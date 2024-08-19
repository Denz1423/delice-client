export interface OrderItem {
  name: string;
  price: number;
  imageUrl: string;
  type: string;
  quantity: number;
}

export interface OrderModel {
  id: string;
  tableNumber: number;
  orderDate: string;
  orderItems: OrderItem[];
  subTotal: number;
  orderStatus: number;
  paymentStatus: number;
  paymentIntentId: string;
}
