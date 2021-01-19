import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    wordContainer: {
        minHeight: 148,
        paddingBottom: 70,
        [theme.breakpoints.down('sm')]: {
           paddingBottom: 25,
         },
        [theme.breakpoints.down(400)]: {
            minHeight: 150,
          },
    },
    textContainerRoot: {
        paddingLeft: 3,
        paddingRight: 3
    },
    resultText: {
        [theme.breakpoints.down(400)]: {
            fontSize:48,
          },
        overflowWrap: 'break-word',
    },
    formPaper: {
        width: 720,
        [theme.breakpoints.down('sm')]: {
          width: '85%',
          height: '24.3rem'
        },
        margin: '0 auto',
        display: 'block',
        height: '25rem',
        marginBottom:150,
        marginTop: 130,
    },
    youText: {
       paddingTop: 40,
       [theme.breakpoints.down('sm')]: {
        fontSize: 36,
      },
    }
}));

export default useStyles;