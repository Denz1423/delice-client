import styled from 'styled-components';

export const CardContainer = styled.div`
  display: block;
  width: 400px;
  height: 480px;
  margin: 15px 15px;
  background-color: #e7dcd1;
  overflow: hidden;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media only screen and (min-width: 845px) and (max-width: 1400px) {
    width: 300px;
    height: 420px;
  }

  @media only screen and (max-width: 600px) {
    width: 300px;
    height: 370px;
  }
`;

export const CardImage = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 100%;
  height: 325px;
  object-fit: cover;
  object-position: 50% 50%;
  transition: transform 0.4s;

  @media only screen and (min-width: 845px) and (max-width: 1400px) {
    width: 300px;
    height: 240px;
  }

  @media only screen and (max-width: 600px) {
    width: 300px;
    height: 250px;
    padding-bottom: 0.5rem;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const CardInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;

  @media only screen and (max-width: 600px) {
    padding: 0;
  }
`;

export const CardName = styled.p`
  font-size: 20px;
  font-style: italic;
  margin: 5px;
  color: #423124;
`;

export const CardPrice = styled.p`
  font-size: 20px;
  font-style: italic;
  margin: 2px;
  color: #423124;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: center;
`;
