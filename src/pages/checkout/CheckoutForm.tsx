import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { StripePaymentElementOptions } from '@stripe/stripe-js';
import {
  CloseButton,
  PaymentMessage,
  StripeContainer,
} from './CheckoutForm.style';
import { useAppSelector } from '@/store/hooks';
import { useState } from 'react';
import { Spinner } from '@/components/ui/Spinner';
import { PaymentButton } from '@/components/button/Button.style';
import { selectCartTotal } from '@/services/state/CartSelectors';
import { TotalCost } from '@/components/ui/Total';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const totalCart = useAppSelector(selectCartTotal);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | undefined>('');

  const handlePaymentSubmission = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `http://localhost:5173/success`,
      },
    });

    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message);
    } else {
      setMessage('An unexpected error occurred.');
    }
    setIsLoading(false);
  };

  const handleCloseMessage = () => {
    setMessage('');
  };

  const paymentElementOptions: StripePaymentElementOptions = {
    layout: {
      type: 'accordion',
      defaultCollapsed: false,
      radios: true,
      spacedAccordionItems: false,
    },
  };

  return (
    <>
      <form onSubmit={handlePaymentSubmission}>
        {message && (
          <PaymentMessage>
            {message}
            <CloseButton onClick={handleCloseMessage}>&times;</CloseButton>
          </PaymentMessage>
        )}

        <StripeContainer>
          <TotalCost>Total: ${totalCart}</TotalCost>
          <PaymentElement
            id="payment-element"
            options={paymentElementOptions}
          />
          <PaymentButton disabled={isLoading || !stripe || !elements}>
            {isLoading ? <Spinner /> : 'Pay now'}
          </PaymentButton>
        </StripeContainer>
      </form>
    </>
  );
}
