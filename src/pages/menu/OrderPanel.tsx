import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartProduct } from '@/models/Cart';
import CategoryMark from '@/components/Card/CategoryMark';
import { useAppDispatch } from '@/store/hooks';
import {
  addProductToCart,
  removeProductFromCart,
} from '@/services/state/CartSlice';
import { formatMoney, useOrderSummary } from '@/pages/menu/orderSummary';
import { useFlashOnChange } from '@/pages/menu/useFlashOnChange';
import {
  CheckoutButton,
  EmptyState,
  Footer,
  Line,
  LineInfo,
  LineName,
  LineQtyValue,
  LineStepper,
  LineStepperButton,
  LineThumb,
  LineTotal,
  Lines,
  Panel,
  PanelSubtitle,
  PanelTitle,
  TotalLabel,
  TotalRow,
  TotalValue,
} from '@/pages/menu/OrderPanel.style';

function OrderLine({
  product,
  index,
}: {
  product: CartProduct;
  index: number;
}) {
  const dispatch = useAppDispatch();
  const imageSource = import.meta.env.VITE_AWS_IMAGES;
  const [failed, setFailed] = useState(!product.imageUrl);

  return (
    <Line
      style={{ animationDelay: `${index * 45}ms` }}
      data-cy={`order-line-${product.name}`}
    >
      <LineThumb>
        {failed ? (
          <CategoryMark type={product.type} />
        ) : (
          <img
            src={imageSource + product.imageUrl}
            alt=""
            loading="lazy"
            onError={() => setFailed(true)}
          />
        )}
      </LineThumb>
      <LineInfo>
        <LineName>{product.name}</LineName>
        <LineStepper data-cy={`order-line-${product.name}-stepper`}>
          <LineStepperButton
            type="button"
            aria-label={`Remove one ${product.name}`}
            onClick={() => dispatch(removeProductFromCart(product.id))}
            data-cy={`order-line-${product.name}-decrement`}
          >
            −
          </LineStepperButton>
          <LineQtyValue data-cy={`order-line-${product.name}-qty`}>
            {product.quantity}
          </LineQtyValue>
          <LineStepperButton
            type="button"
            aria-label={`Add one ${product.name}`}
            onClick={() => dispatch(addProductToCart({ product }))}
            data-cy={`order-line-${product.name}-increment`}
          >
            +
          </LineStepperButton>
        </LineStepper>
      </LineInfo>
      <LineTotal>{formatMoney(product.price * product.quantity)}</LineTotal>
    </Line>
  );
}

export default function OrderPanel() {
  const navigate = useNavigate();
  const { products, total, count, tableNumber } = useOrderSummary();
  const flash = useFlashOnChange(total);
  const hasItems = count > 0;

  return (
    <Panel data-cy="order-panel" aria-label="Your order">
      <PanelTitle>Your order</PanelTitle>
      <PanelSubtitle>
        Table {tableNumber} ·{' '}
        {hasItems ? `${count} item${count === 1 ? '' : 's'}` : 'empty'}
      </PanelSubtitle>

      {hasItems ? (
        <Lines>
          {products.map((product, index) => (
            <OrderLine key={product.id} product={product} index={index} />
          ))}
        </Lines>
      ) : (
        <EmptyState>
          <span>Add something from the menu and it will show up here.</span>
        </EmptyState>
      )}

      <Footer>
        <TotalRow>
          <TotalLabel>Total</TotalLabel>
          <TotalValue $flash={flash} data-cy="order-total">
            {formatMoney(total)}
          </TotalValue>
        </TotalRow>
        <CheckoutButton
          type="button"
          disabled={!hasItems}
          onClick={() => navigate(`/${tableNumber}/checkout`)}
          data-cy="checkout-button"
        >
          Checkout
        </CheckoutButton>
      </Footer>
    </Panel>
  );
}
