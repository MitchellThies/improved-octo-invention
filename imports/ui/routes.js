import React from 'react';
import { Route, Router, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// route components
import App from './App.js';
import lobby from './lobby.js';
//import Contact from './components/views/contact';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (

  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/lobby" component={lobby}/>
    </Switch>
  </Router>

);

/*
export default (
  <Route path='/' component={App}>
    //<IndexRoute component={Home} />
    <Route path='lobby' component={lobby} />
    <Route path='*' component={App} />
  </Route>
);*/

/*

*/