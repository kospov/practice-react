import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import CategoriesProvider from 'context/CategoriesProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CategoriesProvider>
      <App />
    </CategoriesProvider>
  </React.StrictMode>
);
