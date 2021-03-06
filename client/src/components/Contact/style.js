import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    background: 'rgb(255,255,255)',
    background: 'linear-gradient(180deg, rgba(255,255,255,1) 56%, rgba(93,104,136,1) 56%)',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  [theme.breakpoints.down('sm')]: {

    container: {
      marginTop: '1.5rem',
      background: 'none',
    },

    
  },

}));