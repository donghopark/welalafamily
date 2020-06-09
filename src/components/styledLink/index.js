import React, {Component} from 'react';

import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import baseStyles from '../../style';

const styles = (theme) => ({
  ...baseStyles,
  link: {
    textDecoration: 'none',
    '&:focus, &:hover, &:visited, &:link, &:active': {
      textDecoration: 'none',
      color: 'inherit'
    },
  }
});

class StyledLink extends Component {
  
  render() {
    const { classes } = this.props;
    return (
      <Link {...this.props}  className={classes.link}></Link>
    )
  }
}
export default withStyles(styles)(StyledLink)