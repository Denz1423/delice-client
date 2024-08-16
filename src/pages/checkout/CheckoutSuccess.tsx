import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { clearCart } from '@/services/state/CartSlice';
import { clearTableNumber } from '@/services/state/HeaderSlice';
import { useNavigate } from 'react-router-dom';
import { CheckoutButton } from '@/components/button/Button.style';
import agent from '@/services/api/agent';

export default function CheckoutSuccess() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cart = useAppSelector((state) => state.cart.cart);
  const tableNumber = useAppSelector((state) => state.tableNumber);
  const [orderId, setOrderId] = useState('');

  const createOrder = useCallback(async () => {
    try {
      const { orderId } = await agent.Orders.create({
        ...cart,
        tableNumber,
      });
      setOrderId(orderId);
    } catch (err) {
      console.log(err);
    }
  }, [cart, tableNumber]);

  useEffect(() => {
    createOrder();
  }, [createOrder]);

  const handleHomeClick = () => {
    dispatch(clearCart());
    dispatch(clearTableNumber());
    navigate('/');
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Payment Successful!</h1>
      <p>
        Thank you for your purchase. Your order #{orderId} has been processed
        successfully.
      </p>
      <CheckoutButton onClick={handleHomeClick} className="home-button-back">
        Return to Home
      </CheckoutButton>
    </div>
  );
}
