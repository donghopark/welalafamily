import React, { Component } from 'react';

import { AppBar, Toolbar, IconButton, Button, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import HideOnScroll from '../hideOnScrool'

import baseStyles from '../../style';
import StyledLink from '../styledLink';
const styles = (theme) => ({
  ...baseStyles,
  title: {
    flexGrow: 1
  }
});

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <HideOnScroll >
        <AppBar color="transparent" elevation={0}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <StyledLink to={'/'} >
                <MenuIcon />
              </StyledLink>
            </IconButton>
            <Typography variant="h6" className={classes.title} noWrap>
              <StyledLink to={'/'} >
                LaLa Family
              </StyledLink>
            </Typography>
            <StyledLink to={'/destinations'} >
              <Button>Destinations</Button>
            </StyledLink>
            <StyledLink to={'/about'} >
              <Button>About</Button>
            </StyledLink>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    )
  }
}

export default withStyles(styles)(Header)