import Dashboard from 'pages/dashboard';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Dashboard} />
    <Redirect to="/" />
  </Switch>
);
