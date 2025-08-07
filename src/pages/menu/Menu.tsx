import { useEffect } from 'react';
import Card from '@/components/Card/Card';

import { GridContainer, MenuContainer } from '@/pages/menu/Menu.style';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  fetchProductsAsync,
  productSelectors,
} from '@/services/state/MenuSlice';
import { FadeIn } from '@/components/ui/Fade';
import SkeletonCard from '@/components/Skeleton/SkeletonCard';

export default function Menu() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(productSelectors.selectAll);
  const { productsLoaded } = useAppSelector((state) => state.menu);
  const SKELETONLENGTH = 6;

  useEffect(() => {
    if (!productsLoaded) {
      dispatch(fetchProductsAsync());
    }
  }, [dispatch, productsLoaded]);

  return (
    <FadeIn>
      <MenuContainer>
        <GridContainer data-cy="product-grid">
          {!productsLoaded
            ? Array.from({ length: SKELETONLENGTH }).map((_, index) => (
                <SkeletonCard key={index} />
              ))
            : products
                .sort((a, b) => a.id - b.id)
                .map((product) => <Card key={product.id} product={product} />)}
        </GridContainer>
      </MenuContainer>
    </FadeIn>
  );
}
