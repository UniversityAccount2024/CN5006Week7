import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import EmojeeCounter from './EmojeeCounters';
import EmojeeTexts from './EmojeeText';  // Importing EmojiTexts component
import Hook_ControlledButtonState from './Counter.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <React.StrictMode>
    <Hook_ControlledButtonState />
    <EmojeeCounter pic='Love' />
    <EmojeeCounter pic='like' />
    <EmojeeCounter pic='sad' />
    <EmojeeTexts />  {/* Add EmojiTexts component here */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
