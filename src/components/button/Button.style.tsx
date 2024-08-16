import styled from 'styled-components';

export const HomeButton = styled.button`
  appearance: none;
  background-color: transparent;
  border: 2px solid #423124;
  border-radius: 15px;
  box-sizing: border-box;
  color: #f8f3ed;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 50%;
  will-change: transform;

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    color: #f8f3ed;
    background-color: #423124;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;

export const ProductCardButton = styled.button`
  background-color: #423124;
  width: 100px;
  color: white;
  padding: 5px 15px;
  border-radius: 10px;
  border: 0;
  margin: 10px 0px;
  cursor: pointer;
  transition: ease background-color 250ms;
  font-size: 16px;
  &:hover {
    transform: scale(1.2);
    transition: 0.2s ease all;
  }
`;

export const PaymentButton = styled.button`
  background: #423124;
  font-family: Arial, sans-serif;
  color: #ffffff;
  border-radius: 4px;
  border: 0;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: block;
  transition: all 0.2s ease;
  box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
  width: 290px;

  &:hover {
    filter: contrast(140%);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export const CheckoutButton = styled.button`
  background-color: #423124;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;
  display: inline-block;
  text-align: center;

  &:hover {
    background-color: #5b4c43;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
