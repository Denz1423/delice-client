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
  useAppDispatch: vi.fn(),
}));

describe('Card Component', () => {
  it('should render product details correctly', () => {
    render(<Card product={product} />);

    expect(screen.getByAltText('Test Product')).toHaveAttribute(
      'src',
      import.meta.env.VITE_AWS_IMAGES + product.imageUrl,
    );
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$13')).toBeInTheDocument();
  });

  it('should handle missing product image', () => {
    render(<Card product={product} />);

    expect(screen.getByAltText('Test Product')).toHaveAttribute(
      'src',
      import.meta.env.VITE_AWS_IMAGES + 'test-product.jpg',
    );
  });
});
