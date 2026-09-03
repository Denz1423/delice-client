import Card from '@/components/Card/Card';
import { Product } from '@/models/Product';
import { render, screen } from '@/testing/testUtils';

const product: Product = {
  id: 1,
  name: 'Test Product',
  price: 13,
  imageUrl: 'test-product.jpg',
  type: 'Cake',
};

vi.mock('@/store/hooks', () => ({
  useAppDispatch: () => vi.fn(),
  useAppSelector: () => 0,
}));

describe('Card Component', () => {
  it('should render product details correctly', () => {
    const { container } = render(<Card product={product} />);

    expect(
      container.querySelector('[data-cy="card-Test Product-img"]'),
    ).toHaveAttribute(
      'src',
      import.meta.env.VITE_AWS_IMAGES + product.imageUrl,
    );
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$13.00')).toBeInTheDocument();
    expect(screen.getByText('Add')).toBeInTheDocument();
  });

  it('should show the category mark when the product has no image', () => {
    const { container } = render(
      <Card product={{ ...product, imageUrl: '' }} />,
    );

    expect(
      container.querySelector('[data-cy="card-Test Product-img"]'),
    ).not.toBeInTheDocument();
    expect(
      container.querySelector('[data-cy="card-Test Product-fallback"]'),
    ).toBeInTheDocument();
  });
});
