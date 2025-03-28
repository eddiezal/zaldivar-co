// Corrected main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Router from './router';
import './styles/globals.css';
import { HelmetProvider } from 'react-helmet-async';

// Import App correctly
import App from './App';  // <-- Add this line

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
);
