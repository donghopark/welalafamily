import React, { Component } from 'react';

import { CssBaseline } from '@material-ui/core';

import { BrowserRouter } from 'react-router-dom';




import Header from '../header';
import Footer from '../footer';
import Router from '../router';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <CssBaseline />
        <Header />

        <Router />

        <Footer />


      </BrowserRouter>

    );
  }

}
export default App;
