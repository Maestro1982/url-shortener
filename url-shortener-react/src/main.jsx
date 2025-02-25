import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';

import App from './App.jsx';

import { ContextProvider } from '@/contextApi/ContextApi';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </QueryClientProvider>
  </StrictMode>
);
