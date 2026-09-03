import { useLayoutEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CartProduct } from '@/models/Cart';
import CategoryMark from '@/components/Card/CategoryMark';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  addProductToCart,
  removeProductFromCart,
  setCartNote,
} from '@/services/state/CartSlice';
import {
  selectCartProducts,
  selectCartTotal,
} from '@/services/state/CartSelectors';
import {
  BackButton,
  BrowseButton,
  CheckoutButton,
  EmptyBody,
  EmptyText,
  EmptyTitle,
  EmptyWrap,
  Footer,
  Header,
  Line,
  LineTotal,
  Middle,
  Name,
  NoteBox,
  NoteInput,
  NoteLabel,
  Right,
  Scroll,
  Sheet,
  Stepper,
  StepperButton,
  StepperQty,
  Subtitle,
  SummaryPage,
  Thumb,
  Title,
  TotalLabel,
  TotalRow,
  TotalValue,
  UnitPrice,
} from '@/pages/summary/Summary.style';

const formatMoney = (value: number) => `$${value.toFixed(2)}`;

function ChevronLeft() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 6l-6 6 6 6" />
    </svg>
  );
}

function SummaryLine({ product }: { product: CartProduct }) {
  const dispatch = useAppDispatch();
  const imageSource = import.meta.env.VITE_AWS_IMAGES;
  const [failed, setFailed] = useState(!product.imageUrl);

  return (
    <Line data-cy={`summaryProduct-${product.name}-container`}>
      <Thumb>
        {failed ? (
          <CategoryMark type={product.type} />
        ) : (
          <img
            src={imageSource + product.imageUrl}
            alt=""
            loading="lazy"
            data-cy={`summaryProduct-${product.name}-img`}
            onError={() => setFailed(true)}
          />
        )}
      </Thumb>

      <Middle>
        <Name data-cy={`summaryProduct-${product.name}`}>{product.name}</Name>
        <Stepper>
          <StepperButton
            type="button"
            aria-label={`Remove one ${product.name}`}
            onClick={() => dispatch(removeProductFromCart(product.id))}
            data-cy={`summaryProduct-${product.name}-decrement`}
          >
            −
          </StepperButton>
          <StepperQty data-cy={`summaryProduct-${product.name}-quantity`}>
            {product.quantity}
          </StepperQty>
          <StepperButton
            type="button"
            aria-label={`Add one ${product.name}`}
            onClick={() => dispatch(addProductToCart({ product }))}
            data-cy={`summaryProduct-${product.name}-increment`}
          >
            +
          </StepperButton>
        </Stepper>
      </Middle>

      <Right>
        <LineTotal data-cy={`summaryProduct-${product.name}-linetotal`}>
          {formatMoney(product.price * product.quantity)}
        </LineTotal>
        <UnitPrice data-cy={`summaryProduct-${product.name}-unitprice`}>
          {formatMoney(product.price)} each
        </UnitPrice>
      </Right>
    </Line>
  );
}

export default function Summary() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tableFromStore = useAppSelector((state) => state.tableNumber);
  const tableNumber = params.tableNumber ?? tableFromStore ?? '';
  const note = useAppSelector((state) => state.cart.cart?.note) ?? '';
  const products = useAppSelector(selectCartProducts) ?? [];
  const total = useAppSelector(selectCartTotal);
  const count = products.reduce((sum, product) => sum + product.quantity, 0);

  const noteRef = useRef<HTMLTextAreaElement>(null);
  useLayoutEffect(() => {
    const el = noteRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
  }, [note]);

  const backToMenu = () => navigate(`/${tableNumber}/menu`);

  if (count === 0) {
    return (
      <SummaryPage>
        <Sheet>
          <EmptyWrap>
            <BackButton
              type="button"
              onClick={backToMenu}
              aria-label="Back to menu"
              data-cy="summary-back"
            >
              <ChevronLeft />
            </BackButton>
            <EmptyBody>
              <EmptyTitle data-cy="summary-empty">Nothing here yet</EmptyTitle>
              <EmptyText>
                Add something from the menu and it&apos;ll show up here.
              </EmptyText>
              <BrowseButton
                type="button"
                onClick={backToMenu}
                data-cy="browse-menu-button"
              >
                Browse the menu
              </BrowseButton>
            </EmptyBody>
          </EmptyWrap>
        </Sheet>
      </SummaryPage>
    );
  }

  return (
    <SummaryPage>
      <Sheet>
        <Scroll>
          <Header>
            <BackButton
              type="button"
              onClick={backToMenu}
              aria-label="Back to menu"
              data-cy="summary-back"
            >
              <ChevronLeft />
            </BackButton>
            <div>
              <Title data-cy="summary-title">Your order</Title>
              <Subtitle>
                {count} item{count === 1 ? '' : 's'} · Table {tableNumber}
              </Subtitle>
            </div>
          </Header>

          {products.map((product) => (
            <SummaryLine key={product.id} product={product} />
          ))}

          <NoteBox>
            <NoteLabel htmlFor="kitchen-note">Note for the kitchen</NoteLabel>
            <NoteInput
              id="kitchen-note"
              ref={noteRef}
              rows={1}
              value={note}
              placeholder="Allergies, timing, anything else"
              onChange={(e) => dispatch(setCartNote(e.target.value))}
              data-cy="kitchen-note"
            />
          </NoteBox>
        </Scroll>

        <Footer>
          <TotalRow>
            <TotalLabel>Total</TotalLabel>
            <TotalValue data-cy="summary-total">
              {formatMoney(total)}
            </TotalValue>
          </TotalRow>
          <CheckoutButton
            type="button"
            onClick={() => navigate(`/${tableNumber}/checkout`)}
            data-cy="checkout-button"
          >
            Checkout
          </CheckoutButton>
        </Footer>
      </Sheet>
    </SummaryPage>
  );
}
