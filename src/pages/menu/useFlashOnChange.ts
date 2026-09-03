import { useEffect, useRef, useState } from 'react';

/**
 * Returns `true` for `ms` after `value` changes — used to briefly scale/warm the
 * order total when the cart updates. Does not fire on the initial render.
 */
export function useFlashOnChange(value: number, ms = 240) {
  const [flashing, setFlashing] = useState(false);
  const previous = useRef(value);

  useEffect(() => {
    if (previous.current === value) return;
    previous.current = value;
    setFlashing(true);
    const timer = setTimeout(() => setFlashing(false), ms);
    return () => clearTimeout(timer);
  }, [value, ms]);

  return flashing;
}
