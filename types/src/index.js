import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { UseWalletProvider } from 'use-wallet';
import { NotificationContainer } from "react-notifications";

import ContextProvider from "./context";

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <UseWalletProvider
      chainId={137}
      connectors={{ portis: { dAppId: "login" } }}
    >
      <ContextProvider>
        <App />
        <NotificationContainer />
      </ContextProvider>
    </UseWalletProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
