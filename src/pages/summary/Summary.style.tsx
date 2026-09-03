import styled from 'styled-components';

export const SummaryPage = styled.div`
  min-height: 100vh;
  background: #efe8dd;
  display: flex;
  justify-content: center;
`;

export const Sheet = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 480px;
  height: 100vh;
  overflow: hidden;
  background: #f8f3ed;

  @media only screen and (min-width: 520px) {
    height: calc(100vh - 24px);
    margin: 12px;
    border: 1px solid rgba(66, 49, 36, 0.12);
    border-radius: 24px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  }
`;

export const Scroll = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 26px 22px 0;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
`;

export const BackButton = styled.button`
  flex: none;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(66, 49, 36, 0.25);
  border-radius: 999px;
  background: transparent;
  color: #423124;
  cursor: pointer;
  transition: background 0.18s ease;

  &:hover {
    background: rgba(66, 49, 36, 0.06);
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-family: 'Instrument Serif', serif;
  font-weight: 400;
  font-size: 34px;
  line-height: 1.1;
  color: #423124;
`;

export const Subtitle = styled.p`
  margin: 4px 0 0;
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  color: #7d7463;
`;

export const Line = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 22px 0;
  border-bottom: 1px solid rgba(66, 49, 36, 0.1);
`;

export const Thumb = styled.div`
  position: relative;
  flex: none;
  width: 64px;
  height: 64px;
  border-radius: 14px;
  overflow: hidden;
  background: #e7dcd1;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const Middle = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Name = styled.div`
  font-family: 'Instrument Serif', serif;
  font-size: 23px;
  line-height: 1.15;
  color: #423124;
  overflow-wrap: anywhere;
`;

export const Stepper = styled.div`
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 5px;
  border: 1px solid rgba(66, 49, 36, 0.22);
  border-radius: 999px;
`;

export const StepperButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: #423124;
  font-family: 'Lato', sans-serif;
  font-size: 20px;
  line-height: 0;
  cursor: pointer;
  transition: background 0.15s ease;

  &:active {
    background: rgba(66, 49, 36, 0.09);
  }
`;

export const StepperQty = styled.span`
  min-width: 34px;
  text-align: center;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #423124;
`;

export const Right = styled.div`
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  padding-top: 2px;
`;

export const LineTotal = styled.span`
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #423124;
`;

export const UnitPrice = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: 13px;
  color: #7d7463;
  white-space: nowrap;
`;

export const NoteBox = styled.div`
  margin: 24px 0 28px;
  padding: 16px 18px;
  border: 1px dashed rgba(66, 49, 36, 0.3);
  border-radius: 16px;
`;

export const NoteLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #7d7463;
`;

export const NoteInput = styled.textarea`
  display: block;
  width: 100%;
  border: 0;
  padding: 0;
  background: transparent;
  resize: none;
  overflow: hidden;
  font-family: 'Lato', sans-serif;
  font-size: 15px;
  line-height: 1.5;
  color: #423124;
  outline: none;

  &::placeholder {
    color: #a09585;
  }
`;

export const Footer = styled.div`
  flex: none;
  padding: 18px 22px calc(20px + env(safe-area-inset-bottom, 0px));
  border-top: 1px solid rgba(66, 49, 36, 0.12);
  background: #f8f3ed;
`;

export const TotalRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const TotalLabel = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  color: #423124;
`;

export const TotalValue = styled.span`
  font-family: 'Lato', sans-serif;
  font-weight: 800;
  font-size: 30px;
  color: #423124;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 19px 0;
  border: 0;
  border-radius: 999px;
  background: #423124;
  color: #f8f3ed;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #2f2219;
  }
`;

export const EmptyWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 26px 22px;
`;

export const EmptyBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 12px;
`;

export const EmptyTitle = styled.div`
  font-family: 'Instrument Serif', serif;
  font-size: 28px;
  color: #423124;
`;

export const EmptyText = styled.p`
  margin: 0;
  max-width: 260px;
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  line-height: 1.6;
  color: #7d7463;
`;

export const BrowseButton = styled.button`
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
