import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

import 'antd/dist/antd.css';
import './style/index.less';

Promise.resolve().then(() => {
  console.log('hello world');
});

function a () {}
console.log(a);

const ss = new Set();
console.log(ss);

console.log(1 === 1);

const obj = { a: 1 };
console.log(obj);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
