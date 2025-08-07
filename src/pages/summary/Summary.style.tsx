import styled from 'styled-components';

export const SummaryTitle = styled.h2`
  padding: 1rem;
  font-size: 2rem;
  text-align: center;
`;

export const GoBackContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 1rem;
  cursor: pointer;
  width: fit-content;

  :hover {
    text-decoration: underline;
  }

  & p {
    padding: 0.5rem;
  }
`;

export const SummaryContainer = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

export const ProductsContainer = styled.div`
  width: 60%;

  @media only screen and (max-width: 600px) {
    width: 95%;
  }
`;

export const TotalContainer = styled.div`
  width: 40%;
  height: 500px;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 600px) {
    height: 200px;
    margin: 25px;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 200px;
  width: 100%;
  align-items: center;
  margin: 20px;
  padding: 20px;

  @media only screen and (max-width: 600px) {
    margin: 10px 10px;
    width: 100%;
  }
`;

export const SummaryImageContainer = styled.div`
  /* width: 300px; */

  & img {
    height: 150px;
    width: 150px;
  }

  & svg {
    cursor: pointer;
  }
`;

export const SummaryProductInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  align-items: center;

  & span {
    margin: 10px;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
`;

export const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & span {
    font-size: large;
    margin: 10px;
  }

  & button {
    width: 250px;
    margin: 10px;
  }
`;
