import styled from 'styled-components';

export const MenuPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MenuMain = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  flex: 1;

  @media only screen and (min-width: 1100px) {
    display: flex;
    align-items: flex-start;
  }
`;

export const MenuContent = styled.div`
  flex: 1;
  min-width: 0;

  @media only screen and (min-width: 768px) {
    padding: 34px 40px 60px;
  }

  @media only screen and (max-width: 1099px) {
    /* room for the fixed order bar */
    padding-bottom: 112px;
  }

  @media only screen and (max-width: 767px) {
    padding: 16px 18px 112px;
  }
`;

export const Section = styled.section`
  & + & {
    margin-top: 32px;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: baseline;
  gap: 14px;
  margin: 0 0 16px;

  & > span {
    font-family: 'Instrument Serif', serif;
    font-size: 24px;
    color: #423124;
  }

  & > i {
    flex: 1;
    height: 1px;
    background: rgba(66, 49, 36, 0.14);
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 22px;
  grid-template-columns: repeat(3, 1fr);

  @media only screen and (min-width: 768px) and (max-width: 1099px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;
