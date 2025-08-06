import { useNavigate } from 'react-router-dom';
import { CheckoutButton, HomeButton } from '@/components/Button/Button.style';
import {
  addProductToCart,
  removeProductFromCart,
} from '@/services/state/CartSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  EmptyCartContainer,
  ItemContainer,
  ProductsContainer,
  QuantityContainer,
  SummaryContainer,
  SummaryImageContainer,
  SummaryProductInformationContainer,
  TotalContainer,
} from './Summary.style';
import { FadeIn } from '@/components/ui/Fade';
import {
  selectCartProducts,
  selectCartTotal,
} from '@/services/state/CartSelectors';
import { TotalCost } from '@/components/ui/Total';
import { Heading } from '@radix-ui/themes';

export default function Summary() {
  const imageSource = import.meta.env.VITE_AWS_IMAGES;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cart = useAppSelector(selectCartProducts);
  const tableNumber = useAppSelector((state) => state.tableNumber);
  const totalCart = useAppSelector(selectCartTotal);

  return (
    <FadeIn>
      <Heading
        as="h2"
        align="center"
        style={{ padding: '1rem' }}
        data-cy="cartSummary-title"
      >
        Cart Summary
      </Heading>

      <SummaryContainer>
        <ProductsContainer>
          {cart && cart.length !== 0 ? (
            cart.map((product) => {
              return (
                <ItemContainer
                  key={product.id}
                  data-cy={`summaryProduct-${product.name}-container`}
                >
                  <SummaryImageContainer>
                    <img
                      src={imageSource + product.imageUrl}
                      alt={product.name}
                      data-cy={`summaryProduct-${product.name}-img`}
                    />
                  </SummaryImageContainer>

                  <SummaryProductInformationContainer>
                    <span data-cy={`summaryProduct-${product.name}`}>
                      {product.name}
                    </span>
                    <span data-cy={`summaryProduct-${product.name}-price`}>
                      <strong>${product.price * product.quantity}</strong>
                    </span>
                    <QuantityContainer>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="size-5"
                        height={30}
                        onClick={() =>
                          dispatch(removeProductFromCart(product.id))
                        }
                        style={{ cursor: 'pointer' }}
                        data-cy={`summaryProduct-${product.name}-remove`}
                      >
                        <path
                          fill-rule="evenodd"
                          d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span data-cy={`summaryProduct-${product.name}-quantity`}>
                        {product.quantity}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="size-5"
                        height={30}
                        onClick={() => dispatch(addProductToCart({ product }))}
                        style={{ cursor: 'pointer' }}
                        data-cy={`summaryProduct-${product.name}-add`}
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </QuantityContainer>
                  </SummaryProductInformationContainer>
                </ItemContainer>
              );
            })
          ) : (
            <EmptyCartContainer>
              <span data-cy="emptyCart-title">Cart is currently empty!</span>
              <HomeButton
                onClick={() => navigate(`/${tableNumber}/menu`)}
                data-cy="home-button"
              >
                Browse Menu
              </HomeButton>
            </EmptyCartContainer>
          )}
        </ProductsContainer>
        {cart && cart.length > 0 && (
          <TotalContainer>
            <TotalCost data-cy="cart-total">Total: ${totalCart}</TotalCost>
            <CheckoutButton
              onClick={() => navigate(`/${tableNumber}/checkout`)}
              data-cy="checkout-button"
            >
              Checkout
            </CheckoutButton>
          </TotalContainer>
        )}
      </SummaryContainer>
    </FadeIn>
  );
}
