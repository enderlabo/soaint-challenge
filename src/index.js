import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CartState from './context/cart/cartState'
import './assets/css/styles.scss'


ReactDOM.render(
  <React.StrictMode>
    <CartState>
      <App />
    </CartState>
  </React.StrictMode>,
  document.getElementById('root')
);


