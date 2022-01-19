import React from 'react';
import ReactDOM from 'react-dom'; //used for websites, the dom, could be ReactNative, for mobile phones.
import './index.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import {robots} from './robots';

ReactDOM.render(
  <div>
  <Card id={robots[0].name} email={robots[0].email} name={robots[0].name} />
  <Card id={robots[1].name} email={robots[1].email} name={robots[1].name} />
  <Card id={robots[2].name} email={robots[2].email} name={robots[2].name} />
  </div>
    , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
