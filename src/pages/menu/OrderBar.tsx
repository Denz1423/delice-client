import { useNavigate } from 'react-router-dom';
import { formatMoney, useOrderSummary } from '@/pages/menu/orderSummary';
import { useFlashOnChange } from '@/pages/menu/useFlashOnChange';
import { Bar, Count, Total, ViewButton } from '@/pages/menu/OrderBar.style';

export default function OrderBar() {
  const navigate = useNavigate();
  const { total, count, tableNumber } = useOrderSummary();
  const flash = useFlashOnChange(total);

  return (
    <Bar data-cy="order-bar">
      <div>
        <Count>{count === 1 ? '1 item' : `${count} items`}</Count>
        <Total $flash={flash} data-cy="order-bar-total">
          {formatMoney(total)}
        </Total>
      </div>
      <ViewButton
        type="button"
        onClick={() => navigate(`/${tableNumber}/summary`)}
        data-cy="view-order-button"
      >
        View order
      </ViewButton>
    </Bar>
  );
}
