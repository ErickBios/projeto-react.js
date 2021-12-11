import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global-styler.css';
import { Home } from './templetes/Home';
 

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.querySelector('.minha-div')
);
