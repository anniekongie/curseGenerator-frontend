import { AppBar, Toolbar, Typography, IconButton,Button } from "@material-ui/core";
import WarningIcon from '@material-ui/icons/Warning';
import useStyles from './styles';
import {withRouter} from 'react-router-dom';

function Header(props) {
    const classes = useStyles();
    const {history} = props;
    const redirectTo = (path) => {
        history.push(path);
    }
    const logo = (
        <div>
            <IconButton onClick={()=>history.push('/')} disableFocusRipple disableTouchRipple classes={{root: classes.hover}}> 
                <WarningIcon position="bottom" display="inline" />
                <Typography display="inline" variant="h4" component="h1" className={classes.title}>
                    &nbsp;What The Cuss?
                </Typography>
            </IconButton>
        </div>
    );

    const menuButtons = (
        <div> 
            <Button classes={{root: classes.hover}} classname={classes.menuButton} onClick={()=> redirectTo('/')}>
                Home
            </Button>
            <Button classes={{root: classes.hover}} classname={classes.menuButton} onClick={()=> redirectTo('/about')}>
                About
            </Button>
        </div>
    );

    const display = () => {
        return (
        <Toolbar className={classes.toolbar}>
            {logo}
            {menuButtons}
        </Toolbar>
        )
    };

    return (
        <header>
            <AppBar className={classes.header}> {display()} </AppBar>
        </header>
    )
}

export default withRouter(Header);