import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from './pages/Landing';
import Login from './pages/Login';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/login" exact component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
