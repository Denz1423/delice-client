import styled from 'styled-components';

export const TitleRow = styled.div`
  display: flex;

  @media only screen and (min-width: 768px) {
    align-items: center;
    justify-content: space-between;
    margin-bottom: 26px;
  }

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    align-items: stretch;
    margin-bottom: 16px;
  }
`;

export const MenuTitle = styled.h1`
  margin: 0;
  font-family: 'Instrument Serif', serif;
  font-weight: 400;
  line-height: 1;
  color: #423124;

  @media only screen and (min-width: 768px) {
    font-size: 40px;
  }

  @media only screen and (max-width: 767px) {
    font-size: 30px;
  }
`;

export const TabList = styled.div`
  display: flex;

  @media only screen and (min-width: 768px) {
    gap: 30px;
    align-items: center;
  }

  @media only screen and (max-width: 767px) {
    gap: 6px;
    margin-top: 14px;
    padding: 4px;
    background: #e7dcd1;
    border-radius: 999px;
  }
`;

export const TabButton = styled.button<{ $active: boolean }>`
  border: 0;
  background: transparent;
  cursor: pointer;
  font-family: 'Lato', sans-serif;
  transition:
    background 0.18s ease,
    color 0.18s ease;

  @media only screen and (min-width: 768px) {
    padding: 0 2px 7px;
    font-size: 15px;
    font-weight: ${(p) => (p.$active ? 700 : 400)};
    color: ${(p) => (p.$active ? '#423124' : '#8b8071')};
    border-bottom: 2px solid ${(p) => (p.$active ? '#423124' : 'transparent')};
  }

  @media only screen and (max-width: 767px) {
    flex: 1;
    padding: 9px 0;
    border-radius: 999px;
    font-size: 13.5px;
    font-weight: 700;
    color: ${(p) => (p.$active ? '#f8f3ed' : '#7d7463')};
    background: ${(p) => (p.$active ? '#423124' : 'transparent')};
  }
`;
