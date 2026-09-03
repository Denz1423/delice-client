import styled, { keyframes } from 'styled-components';

const ring = keyframes`
  from {
    opacity: 0;
    transform: scale(0.7);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const tick = keyframes`
  from {
    stroke-dashoffset: 34;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

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

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f8f3ed;

  @media only screen and (min-width: 1100px) {
    height: 100vh;
    overflow: hidden;
  }
`;

export const MicroLabel = styled.div`
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #7d7463;
`;

export const TickCircle = styled.div<{ $size: number }>`
  width: ${(p) => p.$size}px;
  height: ${(p) => p.$size}px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: #a3b18a;
  animation: ${ring} 0.42s cubic-bezier(0.2, 0.7, 0.3, 1) both;

  @media only screen and (min-width: 1100px) {
    margin: 0;
  }

  & path {
    stroke-dasharray: 34;
    animation: ${tick} 0.5s 0.18s cubic-bezier(0.4, 0, 0.2, 1) both;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;

    & path {
      animation: none;
      stroke-dashoffset: 0;
    }
  }
`;

/* ---- shared order lines ---- */

export const Lines = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Line = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  padding: 11px 0;
  border-bottom: 1px solid rgba(66, 49, 36, 0.1);
  opacity: 0;
  animation: ${lineIn} 0.38s cubic-bezier(0.2, 0.7, 0.3, 1) forwards;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 1;
  }
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
  font-size: 18px;
  line-height: 1.2;
  color: #423124;
`;

export const LineTotal = styled.span`
  flex: none;
  font-family: 'Lato', sans-serif;
  font-size: 13px;
  color: #7d7463;

  @media only screen and (min-width: 1100px) {
    font-weight: 700;
    color: #423124;
  }
`;

/* ---- mobile (14a) ---- */

export const Band = styled.div`
  flex: none;
  padding: 44px 24px 40px;
  text-align: center;
  background: #423124;
  color: #f8f3ed;
`;

export const BandTitle = styled.h1`
  margin: 22px 0 0;
  font-family: 'Instrument Serif', serif;
  font-weight: 400;
  font-size: 34px;
  line-height: 1.1;
`;

export const BandSub = styled.p`
  margin: 10px 0 0;
  font-family: 'Lato', sans-serif;
  font-size: 13px;
  color: rgba(248, 243, 237, 0.72);
`;

export const MobileBody = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 24px 20px 0;
`;

export const Tiles = styled.div`
  display: flex;
  gap: 12px;
`;

export const Tile = styled.div`
  flex: 1;
  padding: 15px 16px;
  border: 1px solid rgba(66, 49, 36, 0.16);
  border-radius: 13px;
`;

export const TileValue = styled.div`
  margin-top: 7px;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #423124;
`;

export const Group = styled.div`
  margin-top: 22px;

  & > ${MicroLabel} {
    margin-bottom: 4px;
  }
`;

export const MobileFooter = styled.div`
  flex: none;
  padding: 16px 20px calc(24px + env(safe-area-inset-bottom, 0px));
`;

export const PrimaryButton = styled.button`
  width: 100%;
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

  &:hover {
    background: #2f2219;
  }
`;

/* ---- desktop (14c) ---- */

export const DesktopHeader = styled.div`
  flex: none;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  background: #a3b18a;

  & > img {
    display: block;
    height: 58px;
    width: auto;
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
`;

export const DesktopBody = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: flex-start;
  gap: 56px;
  padding: 56px 40px 40px;
  overflow: hidden;
`;

export const Confirmation = styled.div`
  flex: 1;
  min-width: 0;
  max-width: 640px;
`;

export const BigTitle = styled.h1`
  margin: 26px 0 0;
  font-family: 'Instrument Serif', serif;
  font-weight: 400;
  font-size: 52px;
  line-height: 1.05;
  color: #423124;
`;

export const Lede = styled.p`
  margin: 14px 0 0;
  max-width: 420px;
  font-family: 'Lato', sans-serif;
  font-size: 15px;
  line-height: 1.6;
  color: #7d7463;
`;

export const Stats = styled.div`
  display: flex;
  gap: 34px;
  margin-top: 34px;
`;

export const StatValue = styled.div`
  margin-top: 8px;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #423124;
`;

export const DesktopButton = styled.button`
  margin-top: 40px;
  padding: 18px 30px;
  border: 0;
  border-radius: 13px;
  background: #423124;
  color: #f8f3ed;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #2f2219;
  }
`;

export const ReceiptPanel = styled.aside`
  flex: none;
  width: 400px;
  max-height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  margin-left: auto;
  padding: 30px 28px;
  background: #f1e8de;
  border-radius: 18px;
`;

export const PanelHeading = styled.h2`
  margin: 0 0 18px;
  font-family: 'Instrument Serif', serif;
  font-weight: 400;
  font-size: 24px;
  color: #423124;
`;

export const PaidRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid rgba(66, 49, 36, 0.16);
`;

export const PaidLabel = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  color: #423124;
`;

export const PaidValue = styled.span`
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 26px;
  color: #423124;
`;

/* ---- fallback (visited with no order) ---- */

export const Fallback = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 40px;
  text-align: center;
`;

export const FallbackTitle = styled.h1`
  margin: 0;
  font-family: 'Instrument Serif', serif;
  font-weight: 400;
  font-size: 32px;
  color: #423124;
`;

export const FallbackText = styled.p`
  margin: 0;
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  color: #7d7463;
`;

export const FallbackButton = styled.button`
  margin-top: 10px;
  padding: 14px 28px;
  border: 0;
  border-radius: 999px;
  background: #423124;
  color: #f8f3ed;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: #2f2219;
  }
`;
