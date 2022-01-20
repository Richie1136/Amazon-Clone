import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { StateProvider } from './store/state-context'
import cartReducer, { initialState } from './reducer'


ReactDOM.render(
  <StateProvider initialState={initialState} reducer={cartReducer}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StateProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
