import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { StripePaymentElementOptions } from '@stripe/stripe-js';
import {
  CheckoutContainer,
  CloseButton,
  PaymentMessage,
  StripeContainer,
} from './CheckoutForm.style';
import { useAppSelector } from '@/store/hooks';
import { useState } from 'react';
import { Spinner } from '@/components/ui/Spinner';
import { PaymentButton } from '@/components/Button/Button.style';
import { selectCartTotal } from '@/services/state/CartSelectors';
import { TotalCost } from '@/components/ui/Total';
import { useNavigate } from 'react-router-dom';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const totalCart = useAppSelector(selectCartTotal);
  const cart = useAppSelector((state) => state.cart.cart);
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

    try {
      const submitResult = await elements.submit();
      if (submitResult.error) {
        setMessage(submitResult.error.message);
        setIsLoading(false);
        return;
      }

      if (!cart?.clientSecret) return;

      const paymentResult = await stripe?.confirmPayment({
        elements,
        clientSecret: cart?.clientSecret,
        redirect: 'if_required',
      });

      console.log(paymentResult);

      if (paymentResult.paymentIntent?.status === 'succeeded') {
        navigate('/success');
      } else if (paymentResult.error) {
        throw new Error(paymentResult.error.message);
      }
    } catch (error) {
      console.error('Error confirming payment:', error);
    } finally {
      setIsLoading(false);
    }
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
    <CheckoutContainer>
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
    </CheckoutContainer>
  );
}

// const { error } = await stripe.confirmPayment({
//   elements,
//   confirmParams: {
//     // return_url: `https://delice.davisdjaja.com/success`,
//     return_url: import.meta.env.VITE_STRIPE_SUCCESS_URL,
//   },
// });

// if (error.type === 'card_error' || error.type === 'validation_error') {
//   setMessage(error.message);
// } else {
//   setMessage('An unexpected error occurred.');
// }
