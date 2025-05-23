import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './03-use-app-store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);