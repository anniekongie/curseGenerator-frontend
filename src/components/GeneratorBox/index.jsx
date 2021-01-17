import { Paper, Container, Typography, Button, Box} from '@material-ui/core';
import { useState} from 'react';
import axios from '../../axiosHandler';
import useStyles from './styles/styles';


function GeneratorBox (props) {
    const [result, setResult] = useState('');
    const {rating, type} = props;
    const classes = useStyles();

    const generateWord = async () => {
        const res = await axios.post('/generate', {rating, type});
        console.log('res', res)
        setResult(res.data)
    }
    return (
        <Paper elevation={3} className={classes.formPaper}>
            {type==="insult" && <Typography variant="h2" style={{paddingTop: 40}}> You </Typography>}
            <Container className={classes.wordContainer} id="wordContainer"> 
                {result && <Typography variant="h1">{result}</Typography>}
            </Container>
            <Button onClick={generateWord}> Generate! </Button>
        </Paper>
    );
}

export default GeneratorBox;