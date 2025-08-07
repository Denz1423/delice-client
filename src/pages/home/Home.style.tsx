import styled, { keyframes } from 'styled-components';

const blurPopIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.95);
    filter: blur(10px);
  }

  60% {
    opacity: 1;
    transform: scale(1.03);
    filter: blur(2px);
  }

  100% {
    opacity: 1;
    transform: scale(1);
    filter: blur(0);
  }
`;

export const HomeContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #a3b18a;
  padding: 2rem;
  border-radius: 1.5rem;
  animation: ${blurPopIn} 1.1s ease-out forwards;

  @media only screen and (max-width: 600px) {
    padding: 1.5rem 1rem;
  }
`;

export const HomeImage = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: auto;
  height: auto;

  @media only screen and (max-width: 600px) {
    width: 300px;
    height: 300px;
  }
`;

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 3.5rem 1.5rem;

  @media only screen and (max-width: 600px) {
    margin: 2rem 1rem;
  }
`;

export const TableInput = styled.input`
  appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  font-size: 1rem;
  color: #2f2f2f;
  padding: 1rem 1rem 1rem 0.5rem;
  display: block;
  width: 130px;
  border: none;
  background: transparent;
  text-align: center;
  cursor: pointer;

  &:focus {
    outline: none;
    text-align: center;
    cursor: default;
  }
`;

export const TableLabel = styled.label`
  color: #7d7463;
  font-size: 1.5rem;
  position: absolute;
  pointer-events: none;
  top: 10px;
  transition: 0.2s ease all;

  ${TableInput}:focus ~ &,
  ${TableInput}:valid ~ & {
    top: -20px;
    font-size: 1rem;
    color: #423124;
  }

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
    padding-bottom: 10px;
  }
`;

const inputHighlighter = keyframes`
  from {
    background: #423124;
  }
  to {
    width: 0;
    background: transparent;
  }
`;

export const Highlight = styled.span`
  position: absolute;
  height: 30px;
  width: 100px;
  top: 0;
  pointer-events: none;
  opacity: 0.5;

  ${TableInput}:focus ~ & {
    animation: ${inputHighlighter} 0.5s ease;
  }
`;

export const Bar = styled.span`
  position: relative;
  display: block;
  width: 150px;

  &:before,
  &:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #423124;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  &:before {
    left: 50%;
  }

  &:after {
    right: 50%;
  }

  ${TableInput}:focus ~ &:before,
  ${TableInput}:focus ~ &:after {
    width: 30%;
  }
`;

export const WhiteSpace = styled.span`
  margin: 5px;
`;

export const TableNumberError = styled.p`
  color: #9b111e;
  font-weight: 900;
  margin: 0.25rem 0;
`;
