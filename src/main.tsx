import ReactDOM from 'react-dom/client';
import '@/index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/router/Routes';
import { Provider } from 'react-redux';
import { store } from '@/store/store.ts';

if (window.Cypress) {
  (window as any).store = store;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
