import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  background-color: #86796e;
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
  fill: white;
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
  font-size: 24px;
  color: #f8f4e1;
  margin-right: 10px;
`;
