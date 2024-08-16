import styled from 'styled-components';

export const FadeIn = styled.div`
  animation: fadeInAnimation ease 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
