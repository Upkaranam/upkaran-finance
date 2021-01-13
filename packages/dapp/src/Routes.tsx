import Home from 'pages/home';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Home} />
    <Redirect to="/" />
  </Switch>
);
