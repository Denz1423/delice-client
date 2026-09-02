import { useNavigate } from 'react-router-dom';
import { CheckoutButton, HomeButton } from '@/components/Button/Button.style';
import {
  addProductToCart,
  removeProductFromCart,
} from '@/services/state/CartSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  EmptyCartContainer,
  GoBackContainer,
  ItemContainer,
  ProductsContainer,
  QuantityContainer,
  SummaryContainer,
  SummaryImageContainer,
  SummaryProductInformationContainer,
  SummaryTitle,
  TotalContainer,
} from '@/pages/summary/Summary.style';
import { FadeIn } from '@/components/ui/Fade';
import {
  selectCartProducts,
  selectCartTotal,
} from '@/services/state/CartSelectors';
import { TotalCost } from '@/components/ui/Total';

export default function Summary() {
  const imageSource = import.meta.env.VITE_AWS_IMAGES;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cart = useAppSelector(selectCartProducts);
  const tableNumber = useAppSelector((state) => state.tableNumber);
  const totalCart = useAppSelector(selectCartTotal);

  return (
    <FadeIn>
      <SummaryTitle data-cy="cartSummary-title">Cart Summary</SummaryTitle>

      <GoBackContainer onClick={() => navigate(`/${tableNumber}/menu`)}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
        <p>Back to menu</p>
      </GoBackContainer>

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
                          fillRule="evenodd"
                          d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
                          clipRule="evenodd"
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
                          fillRule="evenodd"
                          d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                          clipRule="evenodd"
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
