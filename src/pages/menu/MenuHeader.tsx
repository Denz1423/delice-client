import { useNavigate, useParams } from 'react-router-dom';
import Delice from '@/assets/Delice.svg';
import { useAppSelector } from '@/store/hooks';
import {
  HeaderBar,
  Logo,
  LogoButton,
  TablePill,
} from '@/pages/menu/MenuHeader.style';

export default function MenuHeader() {
  const navigate = useNavigate();
  const params = useParams();
  const tableFromStore = useAppSelector((state) => state.tableNumber);
  const tableNumber = params.tableNumber ?? tableFromStore ?? '';

  return (
    <HeaderBar data-cy="header-container">
      <LogoButton
        type="button"
        onClick={() => navigate(`/${tableNumber}/menu`)}
        aria-label="Delice — back to the menu"
        data-cy="delice-logo"
      >
        <Logo src={Delice} alt="Delice" />
      </LogoButton>
      <TablePill data-cy="tableNumber-container">Table {tableNumber}</TablePill>
    </HeaderBar>
  );
}
