import React, { Component } from 'react';

import { Box, Button, Typography, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { Parallax, Background } from 'react-parallax';

import baseStyles from '../../style';

const styles = (theme) => ({
  ...baseStyles,
  fullWidth: {
    width: '100%'
  },
  description: {
    color: 'white',
    textTransform: 'uppercase',
  },
  heading: {
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
    [theme.breakpoints.down('sm')]: {
      fontSize: 'xx-large'
    },
  }
});


class ParallaxBox extends Component {
  render() {
    const { classes, useVideo, imageUrl, fullScreen = false, heading, description, buttonText, buttonUrl } = this.props;
    const height = fullScreen ? '100vh' : '80vh';
    return (

      <Parallax
        blur={3}
        bgImage={useVideo ? null : imageUrl}
        strength={200}
      >
        {useVideo ? <Background className={classes.fullWidth}>
          <video muted loop autoPlay poster={imageUrl} >
            <source src="background.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        </Background> : null}

        <Grid container style={{ height }} alignItems="center" justify="center">
          <Box>
            {description ? <Typography variant="h6" noWrap className={classes.description}>
              {description}
            </Typography> : null}

            <Typography variant="h1" noWrap className={classes.heading}>
              {heading}
            </Typography>
            {buttonText || buttonUrl ? <Button variant="contained">{buttonText}</Button> : null}

          </Box>
        </Grid>
      </Parallax>
    )
  }
}

export default withStyles(styles)(ParallaxBox)