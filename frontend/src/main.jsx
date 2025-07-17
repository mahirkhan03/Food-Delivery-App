import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
} else {
  console.error('Root element not found!');
}
