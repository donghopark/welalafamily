const baseStyles = (theme) => ({
  body: {
    flexGrow: 1
  },
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
export default baseStyles;