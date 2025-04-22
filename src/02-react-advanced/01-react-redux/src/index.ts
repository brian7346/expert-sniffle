import React from 'react';
import ReactDOM from 'react-dom/client';
import { Solution } from './01-react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Solution />
  </React.StrictMode>
);