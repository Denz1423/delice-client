import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  height: 100%;
`;

export const StripeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 20px;

  #payment-element {
    margin-bottom: 24px;
  }
`;

export const PaymentMessage = styled.div`
  color: #f4efe9;
  background-color: #d9534f;
  font-size: 1rem;
  font-weight: 800;
  line-height: 20px;
  padding: 12px;
  text-align: center;
`;

export const CloseButton = styled.button`
  right: 10px;
  top: 109px;
  position: absolute;
  background: transparent;
  border: none;
  color: #f4efe9;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
