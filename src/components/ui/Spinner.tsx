import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
  margin: 0 auto;
  color: #ffffff;
  box-shadow: inset 0 0 0 2px;
  border-radius: 50%;
  transform: translateZ(0);

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    background: #f8f3ed;
  }

  &::before {
    width: 10.4px;
    height: 20.4px;
    border-radius: 20.4px 0 0 20.4px;
    top: -0.2px;
    left: -0.2px;
    transform-origin: 10.4px 10.2px;
    animation: ${spin} 2s infinite ease 1.5s;
  }

  &::after {
    width: 10.4px;
    height: 10.2px;
    border-radius: 0 10.2px 10.2px 0;
    top: -0.1px;
    left: 10.2px;
    transform-origin: 0px 10.2px;
    animation: ${spin} 2s infinite ease;
  }
`;
