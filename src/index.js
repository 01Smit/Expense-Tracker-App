import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalProvider } from './Context/GlobalContext';
import { GlobalStyle } from './Styles/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <GlobalProvider children={<App />} />
  </React.StrictMode>
);
