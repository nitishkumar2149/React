import React from 'react';  // "React -> Core Library of React"
import ReactDOM from 'react-dom/client'; // "ReactDOM -> Implementation of React for Web Application. "

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
