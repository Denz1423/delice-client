import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@/store/store.ts';
import ShoppingIcon from '@/components/cart/ShoppingIcon';
import { MemoryRouter } from 'react-router-dom';

const renderWithStore = () => {
  return render(
    <MemoryRouter>
      <Provider store={store}>
        <ShoppingIcon />
      </Provider>
    </MemoryRouter>,
  );
};

describe('ShoppingIcon Component', () => {
  it('renders ShoppingIcon component', () => {
    renderWithStore();
  });

  it('displays the correct cart count', () => {
    vi.mock('@/services/state/CartSelectors', () => ({
      selectCartProducts: () => [{ quantity: 3 }, { quantity: 2 }],
    }));

    const { getByText } = renderWithStore();

    expect(getByText('5')).toBeInTheDocument();
  });
});
