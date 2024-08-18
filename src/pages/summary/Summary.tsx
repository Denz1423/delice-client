import { useNavigate } from 'react-router-dom';
import { CheckoutButton, HomeButton } from '@/components/button/Button.style';
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

export default function Summary() {
  const imageSource = import.meta.env.VITE_AWS_IMAGES;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cart = useAppSelector(selectCartProducts);
  const tableNumber = useAppSelector((state) => state.tableNumber);
  const totalCart = useAppSelector(selectCartTotal);

  return (
    <FadeIn>
      <center>
        <h2>Cart Summary</h2>
      </center>
      <SummaryContainer>
        <ProductsContainer>
          {cart && cart.length !== 0 ? (
            cart.map((product) => {
              return (
                <ItemContainer key={product.id}>
                  <SummaryImageContainer>
                    <img
                      src={imageSource + product.imageUrl}
                      alt={product.name}
                    />
                  </SummaryImageContainer>

                  <SummaryProductInformationContainer>
                    <span>{product.name}</span>
                    <span>
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
                      >
                        <path
                          fillRule="evenodd"
                          d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span>{product.quantity}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="size-5"
                        height={30}
                        onClick={() => dispatch(addProductToCart({ product }))}
                        style={{ cursor: 'pointer' }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
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
              <span>Cart is currently empty!</span>
              <HomeButton onClick={() => navigate(`/${tableNumber}/menu`)}>
                Browse Menu
              </HomeButton>
            </EmptyCartContainer>
          )}
        </ProductsContainer>
        {cart && cart.length > 0 && (
          <TotalContainer>
            <TotalCost>Total: ${totalCart}</TotalCost>
            <CheckoutButton
              onClick={() => navigate(`/${tableNumber}/checkout`)}
            >
              Checkout
            </CheckoutButton>
          </TotalContainer>
        )}
      </SummaryContainer>
    </FadeIn>
  );
}
