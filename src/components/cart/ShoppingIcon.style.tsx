import styled from 'styled-components';

export const StyledShoppingIcon = styled.svg`
  height: 45px;
  width: auto;
  fill: #f8f4e1;
`;

export const ItemCount = styled.span`
  color: #423124;
  position: absolute;
  font-size: 14px;
  font-weight: bold;
  top: 8px;
`;

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 15px;

  &:hover {
    ${StyledShoppingIcon}, ${ItemCount} {
      transform: scale(1.2);
      transition: 0.2s ease all;
    }
  }
`;
