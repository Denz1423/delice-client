import styled from 'styled-components';

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
  color: #ffffff;
  background-color: #d9534f;
  font-size: 16px;
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
  color: #ffffff;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
