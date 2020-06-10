import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../landing';
import AboutPage from '../about';
import DestinationsPage from '../destinations';
import DestinationPage from '../destination';

class Router extends Component {
  render() {
    return (
      <Fragment>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/destinations' component={DestinationsPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/destinations/:destination' component={DestinationPage} />
        </Switch>
      </Fragment>
    )
  }
} 

export default Router;