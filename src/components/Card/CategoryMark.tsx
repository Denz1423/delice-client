import styled from 'styled-components';

const Tile = styled.div<{ $drink: boolean }>`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(p) => (p.$drink ? '#423124' : '#a3b18a')};
`;

interface Props {
  type: string;
  'data-cy'?: string;
}

/**
 * Fallback tile shown when a product photo is missing or fails to load.
 * Cloche on sage for cakes, cup on brown for drinks.
 */
export default function CategoryMark({ type, ...rest }: Props) {
  const isDrink = type.toLowerCase() === 'drink';
  const stroke = isDrink ? '#e7dcd1' : '#2f3a22';

  return (
    <Tile $drink={isDrink} aria-hidden="true" {...rest}>
      <svg
        viewBox="0 0 24 24"
        width="42%"
        height="42%"
        fill="none"
        stroke={stroke}
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {isDrink ? (
          <>
            <path d="M5 8h11v5a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4Z" />
            <path d="M16 9.5h1.6a2 2 0 0 1 0 4H16" />
            <path d="M4 20h13" />
          </>
        ) : (
          <>
            <path d="M4 17h16l-1.4-6.2a1.6 1.6 0 0 0-1.6-1.3H7a1.6 1.6 0 0 0-1.6 1.3Z" />
            <path d="M9 9V7.4A1.4 1.4 0 0 1 10.4 6h3.2A1.4 1.4 0 0 1 15 7.4V9" />
            <path d="M3 20h18" />
          </>
        )}
      </svg>
    </Tile>
  );
}
