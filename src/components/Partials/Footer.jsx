import {Typography, Container} from '@material-ui/core'
import useStyles from './styles';

export default function Footer () {
    const classes = useStyles();
    return (
        <Container className={classes.footer} id="footer-container">
            <Typography>
                © Copyright 2021 The Awesome Vulgar Annie
            </Typography>
        </Container>
    )
}