import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../landing';
import AboutPage from '../about';
import DestinationsPage from '../destinations';

class Router extends Component {
  render() {
    return (
      <Fragment>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/destinations' component={DestinationsPage} />
        </Switch>
      </Fragment>
    )
  }
} 

export default Router;