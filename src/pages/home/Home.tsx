import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DeliceLogo from '/Delice-circle.png';
import { useAppDispatch } from '@/store/hooks';
import { setTableNumber } from '@/services/state/HeaderSlice';
import { clearCart } from '@/services/state/CartSlice';
import {
  DigitCell,
  DigitPlaceholder,
  DigitRow,
  DigitStrip,
  DigitWindow,
  FormContainer,
  Helpers,
  HomeContainer,
  HomeImage,
  KeypadBlank,
  KeypadDone,
  KeypadGrid,
  KeypadKey,
  KeypadSheet,
  RangeHint,
  Rule,
  ScanLineDesktop,
  ScanLineMobile,
  StepperButton,
  StepperRow,
  SubmitButton,
  TableBlock,
  TableLabel,
  Tagline,
  VisuallyHidden,
} from './Home.style';

const MIN_TABLE = 1;
const MAX_TABLE = 20;
const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const KEYPAD_KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', '⌫'];
const BUFFER_RESET_MS = 1200;
const DESKTOP_QUERY = '(min-width: 768px)';

const clampTable = (n: number) => Math.min(MAX_TABLE, Math.max(MIN_TABLE, n));

const isDesktop = () =>
  typeof window !== 'undefined' && window.matchMedia(DESKTOP_QUERY).matches;

const buzz = () => {
  if (typeof navigator !== 'undefined' && navigator.vibrate) {
    navigator.vibrate(8);
  }
};

function OdometerDigit({ value }: { value: number }) {
  return (
    <DigitWindow aria-hidden="true">
      <DigitStrip style={{ transform: `translateY(-${value * 10}%)` }}>
        {DIGITS.map((n) => (
          <DigitCell key={n}>{n}</DigitCell>
        ))}
      </DigitStrip>
    </DigitWindow>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [table, setTable] = useState<number | null>(null);
  const [mode, setMode] = useState<'stepper' | 'keypad'>('stepper');
  const formRef = useRef<HTMLFormElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const bufferRef = useRef('');
  const bufferTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  const bump = useCallback((delta: number) => {
    setTable((prev) => {
      const next = prev == null ? MIN_TABLE : clampTable(prev + delta);
      if (next !== prev) buzz();
      return next;
    });
  }, []);

  const setExact = useCallback((n: number | null) => {
    setTable(n == null ? null : clampTable(n));
  }, []);

  const toggleKeypad = useCallback(() => {
    setMode((m) => {
      if (m === 'keypad') return 'stepper';
      if (isDesktop()) return 'stepper';
      return 'keypad';
    });
    bufferRef.current = '';
  }, []);

  const closeKeypad = useCallback(() => setMode('stepper'), []);

  const pressKey = useCallback(
    (label: string) => {
      if (label === '⌫') {
        bufferRef.current = bufferRef.current.slice(0, -1);
        const n = parseInt(bufferRef.current, 10);
        setExact(Number.isNaN(n) || n < MIN_TABLE ? null : n);
        return;
      }

      const combined = (bufferRef.current + label).slice(-2);
      const asPair = parseInt(combined, 10);
      if (asPair >= MIN_TABLE && asPair <= MAX_TABLE) {
        bufferRef.current = combined;
        setExact(asPair);
        buzz();
      } else if (Number(label) >= MIN_TABLE) {
        bufferRef.current = label;
        setExact(Number(label));
        buzz();
      }
    },
    [setExact],
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      if (e.key === 'ArrowUp') {
        e.preventDefault();
        bump(1);
        return;
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        bump(-1);
        return;
      }
      if (e.key === 'Enter') {
        formRef.current?.requestSubmit();
        return;
      }
      if (e.key === 'Backspace') {
        bufferRef.current = '';
        setExact(null);
        return;
      }
      if (!/^[0-9]$/.test(e.key)) return;

      const combined = (bufferRef.current + e.key).slice(-2);
      const asPair = parseInt(combined, 10);
      if (asPair >= MIN_TABLE && asPair <= MAX_TABLE) {
        bufferRef.current = String(asPair);
        setExact(asPair);
      } else if (Number(e.key) >= MIN_TABLE) {
        bufferRef.current = e.key;
        setExact(Number(e.key));
      } else {
        bufferRef.current = '';
      }

      clearTimeout(bufferTimer.current);
      bufferTimer.current = setTimeout(() => {
        bufferRef.current = '';
      }, BUFFER_RESET_MS);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      clearTimeout(bufferTimer.current);
    };
  }, [bump, setExact]);

  useEffect(() => {
    if (mode === 'keypad') sheetRef.current?.focus();
  }, [mode]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (table == null) return;
    dispatch(setTableNumber(table));
    dispatch(clearCart());
    navigate(`/${table}/menu`);
  };

  const tens = table != null && table >= 10 ? Math.floor(table / 10) : null;
  const ones = table != null ? table % 10 : null;

  return (
    <HomeContainer>
      <FormContainer ref={formRef} onSubmit={handleSubmit} noValidate>
        <HomeImage src={DeliceLogo} alt="Delice" />
        <Rule />
        <Tagline>
          Order and pay from your table.
          <br />
          Tell us where you're sitting.
        </Tagline>

        <TableBlock
          role="group"
          aria-label={
            table == null
              ? 'Table number, not set'
              : `Table number, currently ${table}`
          }
        >
          <TableLabel>TABLE</TableLabel>

          <StepperRow>
            {mode === 'stepper' && (
              <StepperButton
                type="button"
                onClick={() => bump(-1)}
                aria-label="Decrease table number"
                data-cy="table-decrement"
              >
                −
              </StepperButton>
            )}

            <DigitRow
              type="button"
              onClick={toggleKeypad}
              aria-label="Enter table number with keypad"
              data-cy="table-digits"
            >
              {table == null ? (
                <DigitPlaceholder aria-hidden="true">–</DigitPlaceholder>
              ) : (
                <>
                  {tens != null && <OdometerDigit value={tens} />}
                  <OdometerDigit value={ones as number} />
                </>
              )}
            </DigitRow>

            {mode === 'stepper' && (
              <StepperButton
                type="button"
                onClick={() => bump(1)}
                aria-label="Increase table number"
                data-cy="table-increment"
              >
                +
              </StepperButton>
            )}
          </StepperRow>

          <RangeHint>
            {mode === 'keypad' ? (
              'Type it · 1–20'
            ) : (
              <>
                <span className="rh-long">Type a number · </span>1–20
                <span className="rh-long"> · ↑ ↓</span>
              </>
            )}
          </RangeHint>

          <VisuallyHidden aria-live="polite" data-cy="table-value">
            {table ?? ''}
          </VisuallyHidden>
        </TableBlock>

        <SubmitButton type="submit" disabled={table == null} data-cy="submit">
          See the menu
        </SubmitButton>

        <Helpers>
          <ScanLineMobile>Wrong table? Just scan again.</ScanLineMobile>
          <ScanLineDesktop>
            Sitting in the cafe? Scan the code on your table to skip this step.
          </ScanLineDesktop>
        </Helpers>

        {mode === 'keypad' && (
          <KeypadSheet
            ref={sheetRef}
            tabIndex={-1}
            role="dialog"
            aria-label="Table number keypad"
            data-cy="keypad"
          >
            <KeypadGrid>
              {KEYPAD_KEYS.map((key, i) =>
                key === '' ? (
                  <KeypadBlank key={i} aria-hidden="true" />
                ) : (
                  <KeypadKey
                    key={i}
                    type="button"
                    onClick={() => pressKey(key)}
                    aria-label={
                      key === '⌫' ? 'Delete last digit' : `Digit ${key}`
                    }
                    data-cy={key === '⌫' ? 'keypad-delete' : `keypad-${key}`}
                  >
                    {key}
                  </KeypadKey>
                ),
              )}
            </KeypadGrid>
            <KeypadDone
              type="button"
              onClick={closeKeypad}
              data-cy="keypad-done"
            >
              Done
            </KeypadDone>
          </KeypadSheet>
        )}
      </FormContainer>
    </HomeContainer>
  );
}
