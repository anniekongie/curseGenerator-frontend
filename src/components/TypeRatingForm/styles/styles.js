import { makeStyles} from '@material-ui/core/styles'
import { Autorenew } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    formControl: {
      marginLeft: 'auto',
      marginRight: 'auto',
      // margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
      display: 'block',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    formPaper: {
      borderRadius: 4,
        marginTop: 20,
        maxWidth: '60%',
        margin: '0 auto',
        display: 'block',
        height: '20rem',
    },
    formControlRoot: {
      minWidth: 296,
      minHeight: 30,
    },
    container: {
      paddingTop: '10%',
      margin: '0 auto',
      display: 'block',
    },
    button: {
      marginTop: 20,
    }
  }));

export default useStyles;