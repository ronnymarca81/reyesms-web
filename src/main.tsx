import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '@styles/global.css';

// ✅ Sentry Initialization
import './sentry';

// ✅ React Query Setup
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@utils/queryClient';

// ✅ Sentry Error Boundary
import * as Sentry from '@sentry/react';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

createRoot(rootElement).render(
  <React.StrictMode>
    <Sentry.ErrorBoundary fallback={<p>Something went wrong.</p>} showDialog>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Sentry.ErrorBoundary>
  </React.StrictMode>
);
