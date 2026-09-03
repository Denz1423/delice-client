import { useParams } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';
import {
  selectCartProducts,
  selectCartTotal,
} from '@/services/state/CartSelectors';

export const formatMoney = (value: number) => `$${value.toFixed(2)}`;

/** Cart-derived data shared by the desktop order panel and the mobile order bar. */
export function useOrderSummary() {
  const params = useParams();
  const products = useAppSelector(selectCartProducts) ?? [];
  const total = useAppSelector(selectCartTotal);
  const count = products.reduce((sum, product) => sum + product.quantity, 0);

  return {
    products,
    total,
    count,
    tableNumber: params.tableNumber ?? '',
  };
}
