import styled from 'styled-components';

export const CardContainer = styled.div`
  display: block;
  width: 400px;
  height: 480px;
  margin: 15px 15px;
  background-color: whitesmoke;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media only screen and (min-width: 845px) and (max-width: 1400px) {
    width: 300px;
    height: 340px;
  }

  @media only screen and (max-width: 600px) {
    width: 300px;
    height: 320px;
  }
`;

export const CardImage = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 400px;
  height: 350px;

  @media only screen and (min-width: 845px) and (max-width: 1400px) {
    width: 300px;
    height: 228px;
  }

  @media only screen and (max-width: 600px) {
    width: 300px;
    height: 200px;
  }
`;

export const CardInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardName = styled.p`
  font-size: 20px;
  font-style: italic;
  margin: 2px;
`;

export const CardPrice = styled.p`
  font-size: 20px;
  font-style: italic;
  margin: 2px;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: center;
`;
