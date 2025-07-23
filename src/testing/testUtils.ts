import { cleanup, render } from '@testing-library/react';
import { setTableNumber, clearTableNumber } from '@/services/state/HeaderSlice';

afterEach(() => {
  cleanup();
});

function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options,
  });
}

export const testActions = {
  setTableNumber,
  clearTableNumber,
};

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
// override render export
export { customRender as render };
