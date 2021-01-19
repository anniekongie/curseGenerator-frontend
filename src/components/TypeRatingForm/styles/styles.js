import { makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    formControl: {
      display: 'block',
      width:'85%',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
      // [theme.breakpoints.down('xs')]: {
      //   fontSize: 13,
      // }
    },
    formPaper: {
      borderRadius: 4,
        marginTop: 20,
        width: 656,
        [theme.breakpoints.down('sm')]: {
          width: '70%',
        },
        margin: '0 auto',
        display: 'block',
        height: '20rem',
        marginBottom: 80,
    },
    formControlRoot: {
      minWidth: '100%',
      minHeight: 30,
      marginTop: 13,
    },
    container: {
      paddingTop: '6%',
      margin: '0 auto',
      display: 'block',
    },
    button: {
      marginTop: 20,
      [theme.breakpoints.down('sm')]: {
        fontSize: 15,
      },
    }
  }));

export default useStyles;