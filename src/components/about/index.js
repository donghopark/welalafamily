import React, { Component } from 'react';

import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

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

class AboutPage extends Component {
  render() {
    return (
      <Grid container>
        
        <Grid item xs={12} align="center">
          <ParallaxBox
            imageUrl='https://boatingnz.co.nz/wp-content/uploads/2019/11/boating-nz-image-1075-underway.jpg'
            heading='About'
            description='Discover Travel And...'
            fullScreen='true'
          />
        </Grid>

      </Grid>
    )
  }
}


export default withStyles(styles)(AboutPage)