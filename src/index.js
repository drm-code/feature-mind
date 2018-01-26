import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router';

render((
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
), document.getElementById('root'));
