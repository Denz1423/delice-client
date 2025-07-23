import {
  HeaderContainer,
  LogoImage,
  IconContainer,
  TableNumberContainer,
} from '@/components/Header/Header.style';
import Delice from '@/assets/Delice.svg';
import ShoppingIcon from '@/components/Cart/ShoppingIcon';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';

export default function Header() {
  const tableNumber = useAppSelector((state) => state.tableNumber);
  const navigate = useNavigate();

  return (
    <>
      <HeaderContainer data-cy="header-container">
        <LogoImage
          src={Delice}
          alt="Delice-logo"
          onClick={() => navigate(`/${tableNumber}/menu`)}
          data-cy="delice-logo"
        />
        <IconContainer>
          <TableNumberContainer data-cy="tableNumber-container">
            Table {tableNumber}
          </TableNumberContainer>
          <ShoppingIcon />
        </IconContainer>
      </HeaderContainer>
      <Outlet />
    </>
  );
}
