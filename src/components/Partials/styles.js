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
      [theme.breakpoints.down('sm')] : {
        height: 70,
        paddingLeft: 0,
      },
    },
    title: {
      [theme.breakpoints.down('sm')]: {
        fontSize: 18,
      },
    },
    menuButton: {
      fontSize: 18,
      marginLeft: 42,
    },
    hover: {
        '&:hover': {
          backgroundColor: "transparent"
        },
        [theme.breakpoints.down('sm')] : {
          fontSize: 12,
        },
    }
    
 }));

 export default useStyles;