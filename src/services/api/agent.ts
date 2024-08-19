import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: object) => axios.post(url, body).then(responseBody),
};

const Products = {
  getAll: () => requests.get('products'),
};

const Payments = {
  createPaymentIntent: (cart: object) => requests.post('payment', cart),
};

const Orders = {
  create: (cart: object) => requests.post('orders', cart),
  getAll: () => requests.get('orders'),
};

const agent = {
  Products,
  Payments,
  Orders,
};

export default agent;
