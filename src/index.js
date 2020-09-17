import React from 'react';
import ReactDOM from 'react-dom';
import HelloTarun from './components/HelloTarun';
import './index.css';
import HelloPreet from './components/HelloPreet';


ReactDOM.render(
  <React.StrictMode>
    <HelloTarun/>
    <HelloPreet /> 
  </React.StrictMode>,
  document.getElementById('root')
);


