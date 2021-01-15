import { FormLabel, Paper, Button, Container, InputLabel, FormHelperText, Box } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import useStyles from './styles/styles'
import { useState} from 'react';

const TypeRatingForm = (props) => {
    const classes = useStyles();
    const [type, setType] = useState('');
    const [rating, setRating] = useState('');
    const {onSubmit} = props;
    return (
        <Paper elevation={3} className={classes.formPaper}>
            <Container className={classes.container}>
                <FormControl className={classes.formControl} >
                    <InputLabel shrink htmlFor="type">What are you looking for?</InputLabel>
                    <Select class="form-control" name="type" id="type" onChange={(e)=> setType(e.target.value)} classes={{root: classes.formControlRoot}} required>
                        <MenuItem value="insult">Insults! - I wanna curse someone out!</MenuItem>
                        <MenuItem value="exclamation">Exclamations! - I'm frustrated! </MenuItem>
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel shrink htmlFor="rating" > Choose your profanity level: </InputLabel>
                    <Select class="form-control" name="rating" id="rating" onChange={(e)=> setRating(e.target.value)}  classes={{root: classes.formControlRoot}} required>
                        <MenuItem value="PG">PG</MenuItem>
                        <MenuItem value="R">Rated R</MenuItem>
                    </Select>
                </FormControl>
                <Button onClick={()=>onSubmit(type,rating)} className={classes.button}>Gimme the profanity!</Button>
            </Container>

        </Paper>
    )
}
export default TypeRatingForm;