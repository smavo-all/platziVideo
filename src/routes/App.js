import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';

const App = () => ( // Return explicito = se cambia {} por () sin el return
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/registro" component={Register} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
