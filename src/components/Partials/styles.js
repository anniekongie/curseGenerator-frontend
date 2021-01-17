import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    header: {
       backgroundColor: theme.palette.secondary.main, //, //#ded1bd',
    },
    footer: {
      position: 'relative',
      marginTop: -25,
      /* negative value of footer height */
      height: 25,
    }, 
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    menuButton: {
      size: 18,
      marginLeft: 42,
    },
    hover: {
        '&:hover': {
          backgroundColor: "transparent"
        }
    }
    
 }));

 export default useStyles;