import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Header from './Header';
import { render, screen } from '@testing-library/react';
import { TableSlice } from '@/services/state/HeaderSlice';
import { vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

vi.mock('@/store/hooks', () => ({
  useAppSelector: vi.fn(),
}));

const renderWithStore = (initialState: { tableNumber: number | null }) => {
  const store = configureStore({
    reducer: {
      tableNumber: TableSlice.reducer,
    },
    preloadedState: initialState,
  });

  return render(
    <MemoryRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </MemoryRouter>,
  );
};

describe('Header Component', () => {
  it('renders the header container with logo', () => {
    const initialState = { tableNumber: 1 };
    renderWithStore(initialState);

    expect(screen.getByAltText('Delice-logo')).toBeInTheDocument();
  });
});
