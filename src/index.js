import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './calculator/App';
import reportWebVitals from './reportWebVitals';
// import Garage from './class'
// import Clock from './test';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <MyForm/> */}
    {/* <Clock pen={['21' , ' ' , '22']} age="23"/> */}
    {/* <Garage /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
