import { FormEvent, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ExpressCheckoutElement,
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import DeliceLogo from '@/assets/Delice.svg';
import { useAppSelector } from '@/store/hooks';
import {
  selectCartProducts,
  selectCartTotal,
} from '@/services/state/CartSelectors';
import { useMediaQuery } from '@/pages/checkout/useMediaQuery';
import {
  BackLink,
  BigHeading,
  Body,
  CardBox,
  CardPayButton,
  CheckoutPage,
  DesktopHeader,
  EditOrderButton,
  ErrorBanner,
  ErrorClose,
  ExpressWrap,
  HeaderLogoButton,
  LeftCol,
  Line,
  LineName,
  LineQty,
  LineTotal,
  Lines,
  MobileOrderList,
  OrDivider,
  PanelHeading,
  PayButton,
  PayHeader,
  PayHeaderTable,
  PayHeaderTop,
  PayingAmount,
  PayingCount,
  PayingLabel,
  PaymentBox,
  PaymentLabel,
  PaymentRow,
  ScrollArea,
  SidePanel,
  SrOnly,
  TablePill,
  TotalLabel,
  TotalRow,
  TotalValue,
  WalletSection,
} from '@/pages/checkout/CheckoutForm.style';

const formatMoney = (value: number) => `$${value.toFixed(2)}`;

function ChevronLeft({ size = 16 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 6l-6 6 6 6" />
    </svg>
  );
}

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const params = useParams();
  const tableNumber = params.tableNumber ?? '';

  const products = useAppSelector(selectCartProducts) ?? [];
  const total = useAppSelector(selectCartTotal);
  const clientSecret = useAppSelector((state) => state.cart.cart?.clientSecret);
  const isDesktop = useMediaQuery('(min-width: 1100px)');

  const [isPaying, setIsPaying] = useState(false);
  const [message, setMessage] = useState<string | undefined>();
  const [expressAvailable, setExpressAvailable] = useState(false);

  const count = products.reduce((sum, p) => sum + p.quantity, 0);

  const confirmPayment = async () => {
    if (!stripe || !elements || !clientSecret) return;

    setIsPaying(true);
    setMessage(undefined);

    try {
      const submitResult = await elements.submit();
      if (submitResult.error) {
        setMessage(submitResult.error.message);
        return;
      }

      const result = await stripe.confirmPayment({
        elements,
        clientSecret,
        redirect: 'if_required',
      });

      if (result.error) {
        setMessage(result.error.message ?? 'Something went wrong. Try again.');
        return;
      }

      if (result.paymentIntent?.status === 'succeeded') {
        navigate(`/${tableNumber}/success`);
      }
    } catch (err) {
      console.error('Error confirming payment:', err);
      setMessage('Something went wrong. Try again.');
    } finally {
      setIsPaying(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    confirmPayment();
  };

  const payLabel = isPaying ? 'Paying…' : `Pay ${formatMoney(total)}`;

  const orderLines = (
    <Lines>
      {products.map((product) => (
        <Line key={product.id} data-cy={`checkout-line-${product.name}`}>
          <LineQty>{product.quantity}×</LineQty>
          <LineName>{product.name}</LineName>
          <LineTotal>{formatMoney(product.price * product.quantity)}</LineTotal>
        </Line>
      ))}
    </Lines>
  );

  const errorBanner = message ? (
    <ErrorBanner role="alert" data-cy="checkout-error">
      {message}
      <ErrorClose
        type="button"
        onClick={() => setMessage(undefined)}
        aria-label="Dismiss"
      >
        &times;
      </ErrorClose>
    </ErrorBanner>
  ) : null;

  if (isDesktop) {
    return (
      <CheckoutPage onSubmit={handleSubmit}>
        <DesktopHeader>
          <HeaderLogoButton
            type="button"
            onClick={() => navigate(`/${tableNumber}/menu`)}
            aria-label="Delice — back to the menu"
          >
            <img src={DeliceLogo} alt="Delice" data-cy="delice-logo" />
          </HeaderLogoButton>
          <TablePill data-cy="tableNumber-container">
            Table {tableNumber}
          </TablePill>
        </DesktopHeader>
        <Body>
          <LeftCol>
            <div>
              <BackLink
                type="button"
                onClick={() => navigate(`/${tableNumber}/menu`)}
                data-cy="checkout-back"
              >
                <ChevronLeft size={14} />
                Back to the menu
              </BackLink>
              <BigHeading data-cy="checkout-title">Checkout</BigHeading>
            </div>
            {errorBanner}
            <PaymentBox>
              <PaymentRow>
                <PaymentLabel>Payment</PaymentLabel>
                <span>Stripe Payment Element</span>
              </PaymentRow>
              <PaymentElement options={{ layout: 'tabs' }} />
            </PaymentBox>
          </LeftCol>
          <SidePanel>
            <PanelHeading>Your order</PanelHeading>
            <ScrollArea>{orderLines}</ScrollArea>
            <TotalRow>
              <TotalLabel>Total</TotalLabel>
              <TotalValue data-cy="checkout-total">
                {formatMoney(total)}
              </TotalValue>
            </TotalRow>
            <PayButton
              type="submit"
              disabled={!stripe || !elements || isPaying}
              data-cy="pay-button"
            >
              {payLabel}
            </PayButton>
          </SidePanel>
        </Body>
      </CheckoutPage>
    );
  }

  // mobile 13b — wallet first
  return (
    <CheckoutPage onSubmit={handleSubmit}>
      <SrOnly data-cy="checkout-title">Checkout</SrOnly>

      <PayHeader>
        <PayHeaderTop>
          <PayHeaderTable>Table {tableNumber}</PayHeaderTable>
          <EditOrderButton
            type="button"
            onClick={() => navigate(`/${tableNumber}/summary`)}
            data-cy="checkout-back"
          >
            Edit order
          </EditOrderButton>
        </PayHeaderTop>
        <PayingLabel>Paying</PayingLabel>
        <PayingAmount data-cy="checkout-total">
          {formatMoney(total)}
        </PayingAmount>
        <PayingCount>
          {count} item{count === 1 ? '' : 's'}
        </PayingCount>
      </PayHeader>

      <WalletSection>
        {errorBanner}

        <ExpressWrap $show={expressAvailable}>
          <ExpressCheckoutElement
            onConfirm={confirmPayment}
            onReady={(event) =>
              setExpressAvailable(
                !!event.availablePaymentMethods &&
                  Object.values(event.availablePaymentMethods).some(Boolean),
              )
            }
            onLoadError={() => setExpressAvailable(false)}
          />
        </ExpressWrap>

        {expressAvailable && <OrDivider>or pay by card</OrDivider>}

        <CardBox>
          <PaymentElement
            options={{
              layout: 'tabs',
              wallets: { applePay: 'never', googlePay: 'never' },
            }}
          />
          <CardPayButton
            type="submit"
            disabled={!stripe || !elements || isPaying}
            data-cy="pay-button"
          >
            {payLabel}
          </CardPayButton>
        </CardBox>
      </WalletSection>

      <MobileOrderList>
        <PaymentLabel>Your order</PaymentLabel>
        {orderLines}
      </MobileOrderList>
    </CheckoutPage>
  );
}
