import React, { Fragment } from 'react';

import './index.scss';
import { AppBar, Toolbar, IconButton, Button, Typography, CssBaseline, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { SocialIcon } from 'react-social-icons';
import HideOnScroll from '../hideOnScrool'

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <HideOnScroll >
        <AppBar color="transparent" elevation='0'>
          <Toolbar>
            <IconButton edge="end" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className="title" noWrap>
              LaLa Family
            </Typography>
            <Button>This</Button>
            <Button>That</Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Grid elevation='0'>
        <video id="background-video" muted loop autoPlay>
          <source src="background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>

      </Grid>

      <Grid container>
        <Grid item xs={12} align="center">
          <h1>We are LaLa Family.</h1>
          <h2>Hello Lajoon, Lael!</h2>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} align="center">
          <h2>ABOUT LALA FAMILY</h2>
          <p>We are Korean.</p>
        </Grid>
      </Grid>

      <Grid container>
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
      </Grid>

      <Grid container>
        <Grid item xs={12} align="center">
          <h2>FIND US ON FACEBOOK</h2>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} align="center">
          <h2>FOLLOW US ON INSTAGRAM</h2>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} align="center">
          <h2>TUNE IN ON YOUTUBE</h2>
        </Grid>
      </Grid>

      <footer>
        <nav>
          <SocialIcon url="https://www.facebook.com/welalafamily" />
          <SocialIcon url="http://instagram.com/welalafamily" />
        </nav>
        COPYRIGHT 2019 © LALA FAMILY
      </footer>


    </Fragment>


  );
}

export default App;
