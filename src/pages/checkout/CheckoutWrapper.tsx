import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';
import { useEffect, useMemo } from 'react';
import agent from '@/services/api/agent';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setCart } from '@/services/state/CartSlice';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '@/pages/checkout/CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export default function CheckoutWrapper() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);
  const options: StripeElementsOptions | undefined = useMemo(() => {
    if (!cart?.clientSecret) return undefined;
    return {
      clientSecret: cart.clientSecret,
    };
  }, [cart?.clientSecret]);

  useEffect(() => {
    if (!cart) return;

    agent.Payments.createPaymentIntent(cart)
      .then((response) => {
        if (response.clientSecret !== cart.clientSecret) {
          dispatch(setCart(response));
        }
      })
      .catch((err) => console.log(err));
  }, [dispatch, cart]);

  return (
    <>
      {!options ? (
        <h2 style={{ textAlign: 'center' }}>Loading checkout...</h2>
      ) : (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}
