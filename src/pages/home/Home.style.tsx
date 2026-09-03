import styled, { keyframes } from 'styled-components';

const drawRule = keyframes`
  from {
    width: 0;
  }
  to {
    width: 52px;
  }
`;

const rise = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: none;
  }
`;

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideSheet = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: none;
  }
`;

export const HomeContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 50px 30px 40px;
  background-color: #eae9dc;

  @media only screen and (min-width: 768px) {
    align-items: center;
    padding: 40px;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 440px;
`;

export const HomeImage = styled.img`
  width: 200px;
  height: 200px;

  @media only screen and (min-width: 768px) {
    width: 190px;
    height: 190px;
  }
`;

export const Rule = styled.span`
  display: block;
  width: 52px;
  height: 2px;
  margin-top: 20px;
  background-color: #423124;
  animation: ${drawRule} 0.5s 0.1s cubic-bezier(0.22, 1, 0.36, 1) both;
`;

export const Tagline = styled.p`
  margin-top: 20px;
  font-size: 14px;
  line-height: 1.6;
  text-align: center;
  color: #655c4e;
  animation: ${rise} 0.45s 0.18s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media only screen and (min-width: 768px) {
    font-size: 15px;
  }
`;

export const TableBlock = styled.div`
  width: 100%;
  margin-top: 40px;
  padding: 26px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid rgba(66, 49, 36, 0.25);
  border-bottom: 1px solid rgba(66, 49, 36, 0.25);
`;

export const TableLabel = styled.span`
  font-family: ui-monospace, Menlo, monospace;
  font-size: 11px;
  letter-spacing: 0.2em;
  color: #655c4e;
`;

export const StepperRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 22px;
  margin-top: 12px;

  @media only screen and (max-width: 767px) {
    row-gap: 16px;
  }
`;

export const StepperButton = styled.button`
  width: 42px;
  height: 42px;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid rgba(66, 49, 36, 0.32);
  border-radius: 999px;
  background: transparent;
  color: #423124;
  font-size: 22px;
  line-height: 0;
  cursor: pointer;
  touch-action: manipulation;
  user-select: none;
  transition: all 0.18s ease;

  &:hover {
    border-color: #423124;
    background: rgba(66, 49, 36, 0.07);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  @media only screen and (min-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 18px;
  }
`;

export const DigitRow = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 44px;
  min-height: 76px;
  margin: 0;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  cursor: pointer;
  touch-action: manipulation;

  &:active {
    opacity: 0.55;
  }

  @media only screen and (max-width: 767px) {
    flex-basis: 100%;
    order: -1;
  }
`;

export const DigitWindow = styled.span`
  height: 76px;
  width: 44px;
  overflow: hidden;
`;

export const DigitStrip = styled.span`
  display: block;
  transition: transform 0.34s cubic-bezier(0.22, 1, 0.36, 1);
`;

export const DigitCell = styled.span`
  display: block;
  height: 76px;
  font-family: 'Instrument Serif', serif;
  font-size: 76px;
  line-height: 76px;
  text-align: center;
  color: #423124;
`;

export const DigitPlaceholder = styled.span`
  height: 76px;
  font-family: 'Instrument Serif', serif;
  font-size: 76px;
  line-height: 76px;
  color: rgba(66, 49, 36, 0.45);
`;

export const RangeHint = styled.span`
  margin-top: 14px;
  font-family: ui-monospace, Menlo, monospace;
  font-size: 11px;
  letter-spacing: 0.14em;
  color: #6b6252;

  .rh-long {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    .rh-long {
      display: inline;
    }
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  margin-top: 34px;
  padding: 18px 0;
  border: 0;
  background-color: #423124;
  color: #f8f3ed;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover:not(:disabled) {
    background-color: #2f2219;
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;

export const Helpers = styled.div`
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  text-align: center;
`;

export const ScanLineMobile = styled.p`
  font-size: 13px;
  font-style: italic;
  color: #6b6252;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const ScanLineDesktop = styled.p`
  display: none;
  font-size: 13px;
  font-style: italic;
  color: #6b6252;
  animation: ${fade} 0.6s 1.05s both;

  @media only screen and (min-width: 768px) {
    display: block;
  }
`;

export const VisuallyHidden = styled.span`
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

export const KeypadSheet = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  padding: 18px 24px calc(26px + env(safe-area-inset-bottom, 0px));
  background: #eae9dc;
  border-top: 1px solid rgba(66, 49, 36, 0.25);
  outline: none;
  animation: ${slideSheet} 0.3s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const KeypadGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

export const KeypadKey = styled.button`
  height: 56px;
  border: 1px solid rgba(66, 49, 36, 0.2);
  border-radius: 12px;
  background: #e7dcd1;
  color: #423124;
  font-family: 'Instrument Serif', serif;
  font-size: 24px;
  cursor: pointer;
  touch-action: manipulation;
  transition: background 0.12s ease;

  &:active {
    background: rgba(66, 49, 36, 0.14);
  }
`;

export const KeypadBlank = styled.span`
  pointer-events: none;
`;

export const KeypadDone = styled.button`
  display: block;
  width: 100%;
  margin-top: 14px;
  padding: 6px 0;
  border: 0;
  background: transparent;
  color: #423124;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
`;
