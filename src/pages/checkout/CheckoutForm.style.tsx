import styled from 'styled-components';

export const CheckoutPage = styled.form`
  display: flex;
  flex-direction: column;
  background: #f8f3ed;

  @media only screen and (max-width: 1099px) {
    min-height: 100vh;
  }

  @media only screen and (min-width: 1100px) {
    height: 100vh;
    overflow: hidden;
  }
`;

export const SrOnly = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
`;

/* ---- mobile 13b: "paying" header ---- */

export const PayHeader = styled.div`
  flex: none;
  padding: 22px 20px 26px;
  background: #423124;
  color: #f8f3ed;
`;

export const PayHeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PayHeaderTable = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(248, 243, 237, 0.65);
`;

export const EditOrderButton = styled.button`
  padding: 6px 0;
  border: 0;
  background: transparent;
  color: rgba(248, 243, 237, 0.75);
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  cursor: pointer;

  &:hover {
    color: #f8f3ed;
  }
`;

export const PayingLabel = styled.div`
  margin-top: 18px;
  font-family: 'Lato', sans-serif;
  font-size: 13px;
  color: rgba(248, 243, 237, 0.7);
`;

export const PayingAmount = styled.div`
  margin-top: 8px;
  font-family: 'Instrument Serif', serif;
  font-size: 46px;
  line-height: 1;
`;

export const PayingCount = styled.div`
  margin-top: 9px;
  font-family: 'Lato', sans-serif;
  font-size: 12px;
  color: rgba(248, 243, 237, 0.6);
`;

/* ---- mobile 13b: wallet + card ---- */

export const WalletSection = styled.div`
  flex: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
`;

export const ExpressWrap = styled.div<{ $show: boolean }>`
  overflow: hidden;
  height: ${(p) => (p.$show ? 'auto' : '0')};
  visibility: ${(p) => (p.$show ? 'visible' : 'hidden')};
`;

export const OrDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Lato', sans-serif;
  font-size: 11px;
  color: #a09585;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(66, 49, 36, 0.14);
  }
`;

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CardPayButton = styled.button`
  width: 100%;
  padding: 16px 0;
  border: 1.5px solid #423124;
  border-radius: 12px;
  background: transparent;
  color: #423124;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  cursor: pointer;
  transition: background 0.18s ease;

  &:hover:not(:disabled) {
    background: rgba(66, 49, 36, 0.06);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const MobileOrderList = styled.div`
  flex: 1;
  padding: 18px 20px 32px;
  border-top: 1px solid rgba(66, 49, 36, 0.12);

  & > *:first-child {
    margin-bottom: 4px;
  }
`;

/* ---- desktop header ---- */

export const BigHeading = styled.h1`
  margin: 0;
  font-family: 'Instrument Serif', serif;
  font-weight: 400;
  line-height: 1;
  color: #423124;
  font-size: 27px;

  @media only screen and (min-width: 1100px) {
    font-size: 38px;
  }
`;

/* ---- desktop header ---- */

export const DesktopHeader = styled.div`
  flex: none;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  background: #a3b18a;
`;

export const HeaderLogoButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;

  & > img {
    display: block;
    height: 58px;
    width: auto;
  }
`;

export const BackLink = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 12px;
  padding: 0;
  border: 0;
  background: transparent;
  color: #7d7463;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  cursor: pointer;
  transition: color 0.18s ease;

  &:hover {
    color: #423124;
  }
`;

export const TablePill = styled.span`
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  color: #423124;
  background: rgba(248, 243, 237, 0.6);
  padding: 7px 14px;
  border-radius: 999px;
  white-space: nowrap;
`;

/* ---- desktop two-column body ---- */

export const Body = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  gap: 56px;
  padding: 40px 40px 0;
  overflow: hidden;
`;

export const LeftCol = styled.div`
  flex: 1;
  min-width: 0;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  overflow-y: auto;
`;

export const SidePanel = styled.aside`
  flex: none;
  width: 400px;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  padding: 30px 28px;
  background: #f1e8de;
  border-radius: 18px 18px 0 0;
`;

export const PanelHeading = styled.h2`
  margin: 0;
  flex: none;
  font-family: 'Instrument Serif', serif;
  font-weight: 400;
  font-size: 24px;
  color: #423124;
`;

/* ---- shared: scroll region ---- */

export const ScrollArea = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  margin-top: 18px;
`;

/* ---- shared: order lines ---- */

export const Lines = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Line = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(66, 49, 36, 0.1);
`;

export const LineQty = styled.span`
  flex: none;
  width: 26px;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  color: #7d7463;
`;

export const LineName = styled.span`
  flex: 1;
  min-width: 0;
  font-family: 'Instrument Serif', serif;
  font-size: 17px;
  line-height: 1.2;
  color: #423124;

  @media only screen and (min-width: 1100px) {
    font-size: 18px;
  }
`;

export const LineTotal = styled.span`
  flex: none;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 13.5px;
  color: #7d7463;

  @media only screen and (min-width: 1100px) {
    font-weight: 700;
    color: #423124;
  }
`;

/* ---- payment section ---- */

export const PaymentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const PaymentRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  & > span:last-child {
    font-family: 'Lato', sans-serif;
    font-size: 10.5px;
    color: #a09585;
  }
`;

export const PaymentLabel = styled.span`
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #7d7463;
`;

/* ---- desktop total + pay ---- */

export const TotalRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  ${SidePanel} & {
    margin-top: 14px;
    padding-top: 14px;
    border-top: 1px solid rgba(66, 49, 36, 0.16);
  }
`;

export const TotalLabel = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: 13px;
  color: #7d7463;

  @media only screen and (min-width: 1100px) {
    font-size: 14px;
    color: #423124;
  }
`;

export const TotalValue = styled.span`
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 22px;
  color: #423124;

  @media only screen and (min-width: 1100px) {
    font-size: 26px;
  }
`;

export const PayButton = styled.button`
  width: 100%;
  margin-top: 14px;
  padding: 18px 0;
  border: 0;
  border-radius: 14px;
  background: #423124;
  color: #f8f3ed;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover:not(:disabled) {
    background: #2f2219;
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }

  @media only screen and (min-width: 1100px) {
    margin-top: 18px;
    padding: 19px 0;
  }
`;

/* ---- error ---- */

export const ErrorBanner = styled.div`
  position: relative;
  margin-bottom: 16px;
  padding: 12px 40px 12px 14px;
  border-radius: 10px;
  background: #c46b4a;
  color: #f8f3ed;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 1.4;
`;

export const ErrorClose = styled.button`
  position: absolute;
  top: 6px;
  right: 8px;
  border: 0;
  background: transparent;
  color: #f8f3ed;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

/* ---- loading ---- */

export const LoadingPage = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f3ed;
  font-family: 'Instrument Serif', serif;
  font-size: 24px;
  color: #7d7463;
`;
