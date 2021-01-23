import Dashboard from 'pages/dashboard';
import Aave from 'pages/aave';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

export const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/aave" component={Aave} />
    <Redirect to="/" />
  </Switch>
);
