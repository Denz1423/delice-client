import styled from 'styled-components';

export const HomeButton = styled.button`
  background-color: transparent;
  border: 2px solid #423124;
  border-radius: 1rem;
  color: #7d7463;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 600;
  min-height: 60px;
  padding: 1rem 1.5rem;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  touch-action: manipulation;
  width: 50%;

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    color: #f8f3ed;
    background-color: #423124;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;

export const ProductCardButton = styled.button`
  background-color: #a3b18a;
  width: 100px;
  color: #423124;
  padding: 5px 15px;
  border-radius: 10px;
  border: 0;
  margin: 10px 0px;
  cursor: pointer;
  transition: ease background-color 250ms;
  font-size: 1rem;
  &:hover {
    background-color: #8e9e79;
    transform: scale(1.2);
    transition: 0.3s ease all;
  }
`;

export const PaymentButton = styled.button`
  background: #a3b18a;
  color: #423124;
  border-radius: 10px;
  border: 0;
  padding: 12px 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: block;
  transition: all 0.2s ease;
  box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
  width: 300px;

  &:hover {
    background-color: #8e9e79;
    filter: contrast(140%);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export const CheckoutButton = styled.button`
  background-color: #a3b18a;
  color: #423124;
  font-size: 1rem;
  font-weight: bold;
  padding: 1rem 1.5rem;
  margin: 1rem 0;
  width: 150px;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    background-color: #8e9e79;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
