import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Product from './components/Product'

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Product />
  </React.StrictMode>,
  document.getElementById("root")
);
