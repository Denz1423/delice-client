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
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: max-content;
  overflow: hidden;
  border-radius: 20px;

  @media only screen and (max-width: 400px) {
    width: 300px;
    height: 400px;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #86796e;
  padding: 30px 30px;
  border-radius: 20px;
  animation: ${blurPopIn} 1.2s ease-out forwards;

  @media only screen and (max-width: 600px) {
    padding: 15px;
  }
`;

export const HomeImage = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: auto;
  height: auto;

  @media only screen and (max-width: 400px) {
    width: 200px;
    height: 200px;
  }
`;

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 50px 20px;

  @media only screen and (max-width: 600px) {
    margin: 15px 5px;
    margin: 20px 5px;
  }
`;

export const TableInput = styled.input`
  /* Remove the spinner for number inputs */
  appearance: textfield;
  -moz-appearance: textfield; /* Firefox */

  /* WebKit/Blink browsers */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  font-size: 16px;
  color: #f8f3ed;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 110px;
  border: none;
  background: transparent;
  text-align: center;
  cursor: pointer;

  &:focus {
    outline: none;
    text-align: center;
    cursor: default;
  }

  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

export const TableLabel = styled.label`
  color: white;
  font-size: 18px;
  font-weight: normal;
  text-align: center;
  position: absolute;
  pointer-events: none;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;

  ${TableInput}:focus ~ &,
  ${TableInput}:valid ~ & {
    top: -20px;
    font-size: 14px;
    color: #f8f3ed;
  }

  @media only screen and (max-width: 600px) {
    padding-bottom: 10px;
  }
`;

const inputHighlighter = keyframes`
  from {
    background: #F8F3ED;
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
    background: #f8f3ed;
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
`;
