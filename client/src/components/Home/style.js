import { makeStyles } from '@material-ui/core/styles';
import bg from './images/bg1.jpg';
import bgMobile from './images/bg-mobile.png';
import bgMain from './images/webbg-mini.jpg';

export default makeStyles((theme) => ({

  container: {
    display: 'flex',
    flexDirection: 'column',
  },

  header: {
    width: '100%',
    minHeight: '100vh',
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },

  name: {
    padding: '25px',
    color: '#5d6888',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  title: {
    color: '#5d6888',
  },

  technos: {
    fontSize: '30px',
  },

  js: {
    color: '#efd81d',
  },

  react: {
    color: '#61dafb',
  },

  node: {
    color: '#026e00',
  },

  icons: {
    padding: '10px 0px',
  },

  links: {
    padding: '0px 0px 0px 10px',
  },

  description: {
    width: '30%',
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '40px',
    fontSize: '42px',
  },

  techLogo: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '.5rem'
  },

  downButton: {
    border: ' 1px solid #5d6888',
    borderRadius: '5px',
    color: '#5d6888',
    "&:hover": {
      border: ' 1px solid #5d6888',
      background: '#5d6888',
      color: '#ffffff',
    }
  },

  canvas: {
    position: "absolute",
    top:"0",
    left: "0",
  },

  main: {
    background: '#ffffff',
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },

  goTop: {
    color: '#5d6888',
    padding: '2rem',
    display: 'flex',
    justifyContent: 'flex-end',
  },


  // Responsive
  [theme.breakpoints.down('sm')]: {
    header: {
      width: '100%',
      minHeight: '100vh',
      backgroundImage: `url(${bgMobile})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },

    description: {
      padding: '15px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
      fontSize: '22px',
      color: '#ffffff',
    },

    technos: {
      fontSize: '20px',
    },
  },
  
  
}));