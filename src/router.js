// Dependencies
import React from 'react';
import { Switch, Route } from 'react-router-dom';

//  Components

import App from './components/App.js';
import Home from './components/home/'


const appRouter = () => (
  <App>
    <Switch>
      <Route exact path='/' component={Home}/>
    </Switch>
  </App>
)


export default appRouter
