import {
  HeaderContainer,
  LogoImage,
  IconContainer,
  TableNumberContainer,
} from '@/components/header/Header.style';
import Delice from '@/assets/Delice.svg';
import ShoppingIcon from '@/components/cart/ShoppingIcon';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';

export default function Header() {
  const tableNumber = useAppSelector((state) => state.tableNumber);
  const navigate = useNavigate();

  return (
    <>
      <HeaderContainer>
        <LogoImage
          src={Delice}
          alt="Delice-logo"
          onClick={() => navigate(`/${tableNumber}/menu`)}
        />
        <IconContainer>
          <TableNumberContainer>Table {tableNumber}</TableNumberContainer>
          <ShoppingIcon />
        </IconContainer>
      </HeaderContainer>
      <Outlet />
    </>
  );
}
