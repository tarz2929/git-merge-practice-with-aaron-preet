import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloPreet from './components/HelloPreet';
import AaronsComponent from './components/AaronComponent';
import HelloTarun from './components/HelloTarun';

ReactDOM.render(
  <React.StrictMode>
    <AaronsComponent />
    <HelloTarun/>
    <HelloPreet />
  </React.StrictMode>,
  document.getElementById('root')
);
