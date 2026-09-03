import styled, { keyframes } from 'styled-components';

const rise = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px) rotate(-1.6deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotate(-1.6deg);
  }
`;

export const Page = styled.div`
  min-height: 100vh;
  background: #423124;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 34px;
  padding: 44px 30px;

  @media only screen and (min-width: 900px) {
    flex-direction: row;
    gap: 96px;
    padding: 0 80px;
  }
`;

export const Receipt = styled.div`
  flex: none;
  width: 100%;
  max-width: 300px;
  padding: 26px 24px 30px;
  background: #fffdfa;
  transform: rotate(-1.6deg);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.28);
  animation: ${rise} 0.5s cubic-bezier(0.2, 0.7, 0.3, 1) both;

  @media only screen and (min-width: 900px) {
    width: 360px;
    max-width: none;
    padding: 32px 30px 36px;
    box-shadow: 0 26px 60px rgba(0, 0, 0, 0.32);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const ReceiptBrand = styled.div`
  text-align: center;
  font-family: ui-monospace, Menlo, monospace;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.22em;
  color: #423124;

  @media only screen and (min-width: 900px) {
    font-size: 12.5px;
    letter-spacing: 0.24em;
  }
`;

export const Tear = styled.div`
  border-top: 1px dashed rgba(66, 49, 36, 0.3);
  margin: 18px 0;

  @media only screen and (min-width: 900px) {
    margin: 22px 0;
  }
`;

export const ReceiptRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: ui-monospace, Menlo, monospace;
  font-size: 11.5px;
  color: #423124;

  @media only screen and (min-width: 900px) {
    font-size: 13px;
  }
`;

export const ReceiptRowTotal = styled(ReceiptRow)`
  font-weight: 700;
  font-size: 12px;

  @media only screen and (min-width: 900px) {
    font-size: 13.5px;
  }
`;

export const ReceiptLines = styled.div`
  margin-top: 12px;
  font-family: ui-monospace, Menlo, monospace;
  font-size: 11px;
  line-height: 1.7;
  color: #8b8071;

  @media only screen and (min-width: 900px) {
    margin-top: 14px;
    font-size: 12.5px;
    line-height: 1.75;
  }
`;

export const ReceiptFooter = styled.div`
  text-align: center;
  margin-top: 20px;
  font-family: ui-monospace, Menlo, monospace;
  font-size: 10px;
  letter-spacing: 0.08em;
  color: #8b8071;

  @media only screen and (min-width: 900px) {
    margin-top: 24px;
    font-size: 11px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 300px;

  @media only screen and (min-width: 900px) {
    align-items: flex-start;
    text-align: left;
    max-width: 520px;
  }
`;

export const Headline = styled.h1`
  margin: 0;
  font-family: 'Instrument Serif', serif;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.1;
  color: #f8f3ed;

  @media only screen and (min-width: 900px) {
    font-size: 52px;
  }
`;

export const Body = styled.p`
  margin: 16px 0 0;
  font-family: 'Lato', sans-serif;
  font-size: 14.5px;
  line-height: 1.6;
  color: rgba(248, 243, 237, 0.8);

  @media only screen and (min-width: 900px) {
    margin-top: 22px;
    font-size: 16px;
    line-height: 1.65;
    color: rgba(248, 243, 237, 0.75);
  }
`;

export const BackButton = styled.button`
  width: 100%;
  margin-top: 24px;
  padding: 18px 0;
  border: 0;
  border-radius: 14px;
  background: #a3b18a;
  color: #2f3a22;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #96a67c;
  }

  @media only screen and (min-width: 900px) {
    width: auto;
    margin-top: 34px;
    padding: 19px 34px;
  }
`;

export const Footnote = styled.div`
  display: none;
  margin-top: 26px;
  font-family: 'Lato', sans-serif;
  font-size: 12.5px;
  color: rgba(248, 243, 237, 0.45);

  @media only screen and (min-width: 900px) {
    display: block;
  }
`;
