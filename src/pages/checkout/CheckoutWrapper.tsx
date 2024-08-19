import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useRef } from 'react';
import agent from '@/services/api/agent';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setCart } from '@/services/state/CartSlice';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '@/pages/checkout/CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export default function CheckoutWrapper() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);
  const tableNumber = useAppSelector((state) => state.tableNumber);
  const clientSecret = useAppSelector((state) => state.cart.cart?.clientSecret);
  const cartRef = useRef(cart);

  useEffect(() => {
    cartRef.current = cart;
  }, [cart]);

  useEffect(() => {
    agent.Payments.createPaymentIntent({ ...cartRef.current, tableNumber })
      .then((response) => dispatch(setCart(response)))
      .catch((err) => console.log(err));
  }, [dispatch, tableNumber]);

  return (
    <>
      {clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}
