import React, { Fragment } from 'react';

import './index.scss';
import { AppBar, Toolbar, Box, IconButton, Button, Typography, CssBaseline, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { SocialIcon } from 'react-social-icons';
import HideOnScroll from '../hideOnScrool'

import { Parallax, Background } from 'react-parallax';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <HideOnScroll >
        <AppBar color="transparent" elevation='0'>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
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

      <Box>
        <video id="background-video" muted loop autoPlay>
          <source src="background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <Box className="center">
          <Typography variant="h6" noWrap>
            Discover Travel
            </Typography>
          <Typography variant="h1" noWrap style={{ 'font-weight': 'bold' }}>
            LaLa Family
            </Typography>
          <Button variant="contained">Join</Button>
        </Box>


      </Box>

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
          <Parallax
          blur={3}
            bgImage={'https://boatingnz.co.nz/wp-content/uploads/2019/11/boating-nz-image-1075-underway.jpg'}
            strength={200}
        >
          <Box style={{ height: '400px', paddingTop: '100px', paddingBotton: '100px' }}>
          <Typography variant="h6" noWrap>
            Discover Travel
            </Typography>
          <Typography variant="h1" noWrap style={{ 'font-weight': 'bold' }}>
            LaLa Family
            </Typography>
          <Button variant="contained">Join</Button>
        </Box>
        </Parallax>
          
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
          <h2>ABOUT LALA FAMILY</h2>
          <p>We are Korean.</p>
          <Parallax
          blur={3}
            bgImage={'https://boatingnz.co.nz/wp-content/uploads/2019/11/boating-nz-image-1075-underway.jpg'}
            strength={200}
        >
          <Box style={{ height: '400px', paddingTop: '100px', paddingBotton: '100px' }}>
          <Typography variant="h6" noWrap>
            Discover Travel
            </Typography>
          <Typography variant="h1" noWrap style={{ 'font-weight': 'bold' }}>
            LaLa Family
            </Typography>
          <Button variant="contained">Join</Button>
        </Box>
        </Parallax>
          
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
