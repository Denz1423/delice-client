import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: none;
  }
`;

export const Bar = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 18px calc(20px + env(safe-area-inset-bottom, 0px));
  background: #423124;
  animation: ${slideUp} 0.3s cubic-bezier(0.2, 0.7, 0.3, 1) both;

  @media only screen and (min-width: 1100px) {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const Count = styled.div`
  font-family: 'Lato', sans-serif;
  font-size: 11.5px;
  color: rgba(248, 243, 237, 0.7);
`;

export const Total = styled.div<{ $flash: boolean }>`
  margin-top: 2px;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #f8f3ed;
  transform-origin: 0 50%;
  transition: transform 0.24s cubic-bezier(0.2, 0.7, 0.3, 1);
  transform: ${(p) => (p.$flash ? 'scale(1.08)' : 'scale(1)')};

  @media (prefers-reduced-motion: reduce) {
    transform: none;
  }
`;

export const ViewButton = styled.button`
  flex: none;
  border: 0;
  border-radius: 999px;
  padding: 15px 24px;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  background: #a3b18a;
  color: #2f3a22;
  transition:
    background 0.22s ease,
    color 0.22s ease;
`;
