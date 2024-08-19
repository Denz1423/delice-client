import { OrderItem, OrderModel } from '@/models/Order';
import agent from '@/services/api/agent';
import { useEffect, useState } from 'react';

export default function Order() {
  const [orders, setOrders] = useState<OrderModel[]>([]);

  useEffect(() => {
    agent.Orders.getAll()
      .then((fetchedOrders) => {
        setOrders(fetchedOrders);
      })
      .catch((err) => {
        console.error('Failed to fetch orders:', err);
      });
  }, []);

  return (
    <div>
      {orders.length > 0 ? (
        orders.map((order) => (
          <div key={order.id}>
            <h2>Table Number: {order.tableNumber}</h2>
            <ul>
              {order.orderItems.map((item: OrderItem) => (
                <li key={item.name}>
                  <p>
                    {item.quantity}x {item.name}
                  </p>
                </li>
              ))}
            </ul>
            <p>Order Date: {new Date(order.orderDate).toLocaleString()}</p>
            <p>Subtotal: ${order.subTotal}</p>
            <p>Order Status: {order.orderStatus}</p>
            <p>Order ID: {order.id}</p>
          </div>
        ))
      ) : (
        <p>No orders currently!</p>
      )}
    </div>
  );
}
