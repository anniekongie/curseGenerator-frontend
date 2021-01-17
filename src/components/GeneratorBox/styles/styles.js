import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    wordContainer: {
        minHeight: 78,
        paddingBottom: 70,
    },
    formPaper: {
        maxWidth: '60%',
        margin: '0 auto',
        display: 'block',
        height: '20rem',
        marginBottom: 100,
        marginTop: '7%',
    }
}));

export default useStyles;