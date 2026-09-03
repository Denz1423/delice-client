import { Appearance } from '@stripe/stripe-js';

/** Restyles Stripe's Payment Element into the cafe palette. */
export const stripeAppearance: Appearance = {
  theme: 'stripe',
  variables: {
    colorPrimary: '#423124',
    colorBackground: '#fffdfa',
    colorText: '#423124',
    colorTextSecondary: '#7d7463',
    colorTextPlaceholder: '#a09585',
    colorDanger: '#c46b4a',
    fontFamily: '"Lato", sans-serif',
    fontSizeBase: '15px',
    borderRadius: '10px',
    spacingUnit: '4px',
  },
  rules: {
    '.Tab': {
      border: '1.5px solid rgba(66, 49, 36, 0.14)',
      backgroundColor: 'transparent',
      boxShadow: 'none',
      padding: '12px',
    },
    '.Tab:hover': {
      color: '#423124',
    },
    '.Tab--selected, .Tab--selected:hover, .Tab--selected:focus': {
      border: '1.5px solid #423124',
      backgroundColor: '#f8f3ed',
      color: '#423124',
      boxShadow: '0 1px 2px rgba(66, 49, 36, 0.12)',
    },
    '.Input': {
      border: '1px solid rgba(66, 49, 36, 0.2)',
      backgroundColor: '#fffdfa',
      padding: '14px',
      boxShadow: 'none',
    },
    '.Input:focus': {
      border: '1px solid #423124',
      boxShadow: '0 0 0 1px #423124',
    },
    '.Label': {
      color: '#7d7463',
      fontWeight: '400',
      fontSize: '11px',
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
    },
  },
};

export const stripeFonts = [
  {
    cssSrc:
      'https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap',
  },
];
