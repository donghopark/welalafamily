import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import { SocialIcon } from 'react-social-icons';

import baseStyles from '../../style';

const styles = (theme) => ({
  ...baseStyles,
  footer: {
    textAlign: 'center',
    backgroundColor: 'black',
    padding: '30px 5px 40px',
    color: 'white',
    nav: {
      padding: '30px 5px'
    }
  }
});

class Footer extends Component {
  render() {

    const { classes } = this.props;

    return (
      <footer className={classes.footer}>
        <nav>
          <SocialIcon url="https://www.facebook.com/welalafamily" />
          <SocialIcon url="http://instagram.com/welalafamily" />
        </nav>
          COPYRIGHT 2019 © LALA FAMILY
      </footer>
    )
  }
}
export default withStyles(styles)(Footer)