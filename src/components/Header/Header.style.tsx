import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  background-color: #a3b18a;
  justify-content: space-between;
  align-items: center;
  min-height: 75px;
`;

export const LogoImage = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 150px;
  height: 100px;
  margin: 5px 10px;
  cursor: pointer;
`;

export const IconContainer = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TableNumberContainer = styled.span`
  font-size: 1.5rem;
  color: #423124;
  margin-right: 10px;
`;
