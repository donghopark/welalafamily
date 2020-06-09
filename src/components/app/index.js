import React, { Component, Fragment } from 'react';

// import './index.scss';
import { CssBaseline, Grid } from '@material-ui/core';






import { withStyles } from '@material-ui/core/styles';

import Header from '../header';
import Footer from '../footer';
import ParallaxBox from '../parallaxBox';

import baseStyles from '../../style';

const styles = (theme) => ({
  ...baseStyles,
  fullWidth: {
    width: '100%'
  },
  heading: {
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: 'xx-large'
    },
  },
  centerWrapper: {
    position: 'relative'
  },
  center: {
    position: 'absolute',
    width: '100%',
    top: '35%',
    textAlign: 'center',
  }
});

class App extends Component {

  render() {

    const { classes } = this.props;

    return (
      <Fragment>
        <CssBaseline />
        <Header />

        <Grid container>
          <Grid item xs={12} align="center">
            <ParallaxBox
              imageUrl='https://boatingnz.co.nz/wp-content/uploads/2019/11/boating-nz-image-1075-underway.jpg'
              heading='LaLa Family'
              description='Discover Travel And...'
              buttonText='Join'
              useVideo='true'
            />
          </Grid>
          <Grid item xs={12} align="center">
            <h1>We are LaLa Family.</h1>
            <h2>Hello Lajoon, Lael!</h2>
          </Grid>


          <Grid item xs={12} align="center">
            <h2>ABOUT LALA FAMILY</h2>
            <p>We are Korean.</p>
            <ParallaxBox
              imageUrl='https://boatingnz.co.nz/wp-content/uploads/2019/11/boating-nz-image-1075-underway.jpg'
              heading='LaLa Family'
              description='Discover Travel'
              buttonText='Join'
            />


          </Grid>
          <Grid item xs={12} align="center">
            <div>
              <h2>Dongho</h2>
              <p>I am a software engineer.</p>
            </div>
            <div>
              <h2>Chorong</h2>
              <p>I like reading.</p>
            </div>
            <div>
              <h2>Lajoon</h2>
              <p>I like playing games outside.</p>
            </div>
            <div>
              <h2>Lael</h2>
              <p>I like everywhere I go on my holidays.</p>
            </div>
          </Grid>
          <Grid item xs={12} align="center">
            <ParallaxBox
              imageUrl='https://boatingnz.co.nz/wp-content/uploads/2019/11/boating-nz-image-1075-underway.jpg'
              heading='ABOUT LALA FAMILY'
              description='Discover Travel And...'
              buttonText='Join'
            />
          </Grid>

          <Grid item xs={12} align="center">
            <h2>FIND US ON FACEBOOK</h2>
          </Grid>
          <Grid item xs={12} align="center">
            <h2>FOLLOW US ON INSTAGRAM</h2>
          </Grid>

          <Grid item xs={12} align="center">
            <h2>TUNE IN ON YOUTUBE</h2>
          </Grid>
        </Grid>

        <Footer />


      </Fragment>

    );
  }

}
export default withStyles(styles)(App)
