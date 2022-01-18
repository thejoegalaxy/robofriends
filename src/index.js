import React from 'react';
import ReactDOM from 'react-dom'; //used for websites, the dom, could be ReactNative, for mobile phones.
import './index.css';
import Hello from './Hello';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

ReactDOM.render(
    <Hello greeting={'Hello React Ninja'} />, //created our own tag/component: Hello. and created a greeting property.
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
