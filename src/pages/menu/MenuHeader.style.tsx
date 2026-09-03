import styled from 'styled-components';

export const HeaderBar = styled.header`
  flex: none;
  position: sticky;
  top: 0;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #a3b18a;

  @media only screen and (min-width: 768px) {
    height: 88px;
    padding: 0 40px;
  }

  @media only screen and (max-width: 767px) {
    height: 80px;
    padding: 0 18px;
  }
`;

export const LogoButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
`;

export const Logo = styled.img`
  display: block;
  width: auto;

  @media only screen and (min-width: 768px) {
    height: 70px;
  }

  @media only screen and (max-width: 767px) {
    height: 62px;
  }
`;

export const TablePill = styled.span`
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  color: #423124;
  background: rgba(248, 243, 237, 0.6);
  border-radius: 999px;
  white-space: nowrap;

  @media only screen and (min-width: 768px) {
    font-size: 14px;
    padding: 8px 15px;
  }

  @media only screen and (max-width: 767px) {
    font-size: 12.5px;
    padding: 6px 12px;
  }
`;
