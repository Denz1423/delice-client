import styled, { keyframes } from 'styled-components';

const lineIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(16px);
  }
  to {
    opacity: 1;
    transform: none;
  }
`;

export const Panel = styled.aside`
  display: none;

  @media only screen and (min-width: 1100px) {
    display: flex;
    flex-direction: column;
    flex: none;
    align-self: flex-start;
    position: sticky;
    top: 88px;
    width: 352px;
    height: calc(100vh - 88px);
    padding: 34px 28px 28px;
    background: #efe8dd;
    border-left: 1px solid rgba(66, 49, 36, 0.12);
  }
`;

export const PanelTitle = styled.h2`
  margin: 0;
  flex: none;
  font-family: 'Instrument Serif', serif;
  font-weight: 400;
  font-size: 26px;
  color: #423124;
`;

export const PanelSubtitle = styled.p`
  margin: 5px 0 0;
  flex: none;
  font-family: 'Lato', sans-serif;
  font-size: 12.5px;
  color: #7d7463;
`;

export const EmptyState = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  & > span {
    max-width: 200px;
    font-family: 'Lato', sans-serif;
    font-size: 13px;
    line-height: 1.6;
    color: #8b8071;
  }
`;

export const Lines = styled.ul`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 22px 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Line = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  opacity: 0;
  animation: ${lineIn} 0.34s cubic-bezier(0.2, 0.7, 0.3, 1) forwards;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 1;
  }
`;

export const LineThumb = styled.div`
  position: relative;
  flex: none;
  width: 46px;
  height: 46px;
  border-radius: 8px;
  overflow: hidden;
  background: #e7dcd1;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const LineInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const LineName = styled.div`
  font-family: 'Instrument Serif', serif;
  font-size: 17px;
  line-height: 1.2;
  color: #423124;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const LineStepper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  margin-top: 5px;
  padding: 2px;
  border-radius: 999px;
  background: #423124;
`;

export const LineStepperButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: #f8f3ed;
  font-family: 'Lato', sans-serif;
  font-size: 15px;
  line-height: 0;
  cursor: pointer;
`;

export const LineQtyValue = styled.span`
  min-width: 16px;
  text-align: center;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #f8f3ed;
`;

export const LineTotal = styled.span`
  flex: none;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 13.5px;
  color: #423124;
`;

export const Footer = styled.div`
  flex: none;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid rgba(66, 49, 36, 0.16);
`;

export const TotalRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

export const TotalLabel = styled.span`
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #423124;
`;

export const TotalValue = styled.span<{ $flash: boolean }>`
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 16px;
  transform-origin: 100% 50%;
  transition:
    transform 0.24s cubic-bezier(0.2, 0.7, 0.3, 1),
    color 0.24s ease;
  color: ${(p) => (p.$flash ? '#6d5a3f' : '#423124')};
  transform: ${(p) => (p.$flash ? 'scale(1.08)' : 'scale(1)')};

  @media (prefers-reduced-motion: reduce) {
    transform: none;
  }
`;

export const CheckoutButton = styled.button`
  width: 100%;
  margin-top: 16px;
  padding: 15px 0;
  border: 0;
  border-radius: 999px;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  background: #423124;
  color: #f8f3ed;
  transition:
    background 0.22s ease,
    color 0.22s ease,
    transform 0.28s cubic-bezier(0.2, 0.7, 0.3, 1);

  &:hover:not(:disabled) {
    background: #2f2219;
  }

  &:disabled {
    background: #d9d0c3;
    color: #8b8071;
    cursor: not-allowed;
    transform: scale(0.985);
  }

  @media (prefers-reduced-motion: reduce) {
    transform: none;
  }
`;
