import styled, { keyframes } from 'styled-components';

const cardIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: none;
  }
`;

const pillIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.82);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const shimmer = keyframes`
  from {
    background-position: 140% 0;
  }
  to {
    background-position: -40% 0;
  }
`;

export const CardRoot = styled.article`
  display: flex;
  overflow: hidden;
  opacity: 0;
  animation: ${cardIn} 0.5s cubic-bezier(0.2, 0.7, 0.3, 1) forwards;
  transition:
    box-shadow 0.22s ease,
    transform 0.22s ease;

  @media only screen and (min-width: 768px) {
    flex-direction: column;
    background: #fffdfa;
    border: 1px solid rgba(66, 49, 36, 0.1);
    border-radius: 14px;

    &:hover {
      box-shadow: 0 10px 24px -14px rgba(66, 49, 36, 0.5);
      transform: translateY(-2px);
    }
  }

  @media only screen and (max-width: 767px) {
    flex-direction: row;
    align-items: center;
    gap: 14px;
    animation-duration: 0.42s;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 1;
    transform: none;
  }
`;

export const ImageBox = styled.div`
  position: relative;
  flex: none;
  overflow: hidden;
  background: #e7dcd1;

  @media only screen and (min-width: 768px) {
    width: 100%;
    aspect-ratio: 1 / 1;
  }

  @media only screen and (max-width: 767px) {
    width: 78px;
    height: 78px;
    border-radius: 12px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  /* TODO: per-item focal point once the product record carries one */
  object-position: 50% 50%;
  transform-origin: center;
  /* promote to its own layer up front so the first hover doesn't hitch */
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform;
  transition:
    transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.3s ease;

  @media only screen and (min-width: 768px) and (prefers-reduced-motion: no-preference) {
    ${CardRoot}:hover & {
      transform: translateZ(0) scale(1.05);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transform: none;
    will-change: auto;
    transition: opacity 0.3s ease;
  }
`;

export const Shimmer = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(100deg, #e7dcd1 30%, #f1e8de 50%, #e7dcd1 70%);
  background-size: 220% 100%;
  animation: ${shimmer} 1.5s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const SkeletonBar = styled.span<{
  $w: string;
  $h: number;
  $round?: boolean;
}>`
  display: block;
  width: ${(p) => p.$w};
  height: ${(p) => p.$h}px;
  border-radius: ${(p) => (p.$round ? '999px' : '6px')};
  background: linear-gradient(100deg, #e7dcd1 30%, #f1e8de 50%, #e7dcd1 70%);
  background-size: 220% 100%;
  animation: ${shimmer} 1.5s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const Body = styled.div`
  @media only screen and (min-width: 768px) {
    padding: 15px 18px 18px;
  }

  @media only screen and (max-width: 767px) {
    flex: 1;
    min-width: 0;
  }
`;

export const Name = styled.h3`
  margin: 0;
  font-family: 'Instrument Serif', serif;
  font-weight: 400;
  line-height: 1.15;
  color: #423124;

  @media only screen and (min-width: 768px) {
    font-size: 23px;
  }

  @media only screen and (max-width: 767px) {
    font-size: 20px;
  }
`;

export const MetaRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  @media only screen and (min-width: 768px) {
    margin-top: 14px;
  }

  @media only screen and (max-width: 767px) {
    margin-top: 8px;
  }
`;

export const Price = styled.span`
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  color: #423124;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media only screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const AddButton = styled.button`
  flex: none;
  border: 1.5px solid #423124;
  border-radius: 999px;
  background: transparent;
  color: #423124;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  transition:
    background 0.18s ease,
    color 0.18s ease;

  &:hover {
    background: #423124;
    color: #f8f3ed;
  }

  @media only screen and (min-width: 768px) {
    padding: 9px 20px;
  }

  @media only screen and (max-width: 767px) {
    padding: 11px 22px;
  }
`;

export const Stepper = styled.div`
  flex: none;
  display: flex;
  align-items: center;
  border-radius: 999px;
  padding: 3px;
  background: #423124;
  animation: ${pillIn} 0.24s cubic-bezier(0.2, 0.7, 0.3, 1);

  @media only screen and (min-width: 768px) {
    gap: 4px;
  }

  @media only screen and (max-width: 767px) {
    gap: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const StepperButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: #f8f3ed;
  font-family: 'Lato', sans-serif;
  line-height: 0;
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 17px;
  }

  @media only screen and (max-width: 767px) {
    width: 38px;
    height: 38px;
    font-size: 18px;
  }
`;

export const Qty = styled.span`
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  color: #f8f3ed;

  @media only screen and (min-width: 768px) {
    min-width: 14px;
  }

  @media only screen and (max-width: 767px) {
    min-width: 16px;
  }
`;
