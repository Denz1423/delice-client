import { useEffect, useMemo, useState } from 'react';
import Card from '@/components/Card/Card';
import MenuHeader from '@/pages/menu/MenuHeader';
import MenuTabs, { MenuTab } from '@/pages/menu/MenuTabs';
import OrderPanel from '@/pages/menu/OrderPanel';
import OrderBar from '@/pages/menu/OrderBar';
import {
  Grid,
  MenuContent,
  MenuMain,
  MenuPage,
  Section,
  SectionHeader,
} from '@/pages/menu/Menu.style';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  fetchProductsAsync,
  productSelectors,
} from '@/services/state/MenuSlice';
import { selectCartProducts } from '@/services/state/CartSelectors';
import SkeletonCard from '@/components/Skeleton/SkeletonCard';

const ALL = 'all';
const SKELETON_LENGTH = 6;

export default function Menu() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(productSelectors.selectAll);
  const { productsLoaded } = useAppSelector((state) => state.menu);
  const cartCount = useAppSelector(
    (state) =>
      selectCartProducts(state)?.reduce((sum, p) => sum + p.quantity, 0) ?? 0,
  );
  const [activeTab, setActiveTab] = useState(ALL);

  useEffect(() => {
    if (!productsLoaded) {
      dispatch(fetchProductsAsync());
    }
  }, [dispatch, productsLoaded]);

  const categories = useMemo(() => {
    const seen: string[] = [];
    for (const product of products) {
      if (product.type && !seen.includes(product.type)) seen.push(product.type);
    }
    return seen;
  }, [products]);

  const tabs = useMemo<MenuTab[]>(
    () => [
      { key: ALL, label: 'All' },
      ...categories.map((c) => ({ key: c.toLowerCase(), label: `${c}s` })),
    ],
    [categories],
  );

  const sortedProducts = useMemo(
    () => [...products].sort((a, b) => a.id - b.id),
    [products],
  );

  const sections = useMemo(() => {
    const visible =
      activeTab === ALL
        ? categories
        : categories.filter((c) => c.toLowerCase() === activeTab);

    return visible.map((category) => ({
      key: category,
      label: `${category}s`,
      showHeader: activeTab === ALL,
      items: sortedProducts.filter((p) => p.type === category),
    }));
  }, [activeTab, categories, sortedProducts]);

  return (
    <MenuPage>
      <MenuHeader />
      <MenuMain>
        <MenuContent>
          <MenuTabs tabs={tabs} value={activeTab} onChange={setActiveTab} />

          {!productsLoaded ? (
            <Grid data-cy="product-grid">
              {Array.from({ length: SKELETON_LENGTH }).map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </Grid>
          ) : (
            sections.map((section) => (
              <Section key={section.key} data-cy={`section-${section.key}`}>
                {section.showHeader && (
                  <SectionHeader data-cy="section-header">
                    <span>{section.label}</span>
                    <i />
                  </SectionHeader>
                )}
                <Grid data-cy="product-grid">
                  {section.items.map((product, index) => (
                    <Card key={product.id} product={product} index={index} />
                  ))}
                </Grid>
              </Section>
            ))
          )}
        </MenuContent>

        <OrderPanel />
      </MenuMain>

      {cartCount > 0 && <OrderBar />}
    </MenuPage>
  );
}
