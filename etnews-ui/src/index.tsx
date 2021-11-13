
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function Event() {
  const [canViewApp, setCanViewApp] =
    useState(true)
  return <>
    {
      canViewApp &&
      <App />
    }
    <button
      onClick={() => {
        setCanViewApp(!canViewApp)
      }}
    >
      canViewApp
    </button>
  </>
}

ReactDOM.render(
  <React.StrictMode>
    <Event />
  </React.StrictMode>,
  document.getElementById('root')
);