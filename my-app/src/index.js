//import React from 'react';
//import ReactDOM from 'react-dom';
//import App from './App';

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
  //<React.StrictMode>
    //<App />
  //</React.StrictMode>
//);

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';

import { GlobalStyle } from './styles/global';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
);