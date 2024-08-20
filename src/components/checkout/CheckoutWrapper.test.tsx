import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@/store/store.ts';
import CheckoutWrapper from '@/components/checkout/CheckoutWrapper';

describe('ShoppingIcon Component', () => {
  it('should render CheckoutWrapper component successfully', () => {
    render(
      <Provider store={store}>
        <CheckoutWrapper />
      </Provider>,
    );
  });
});
