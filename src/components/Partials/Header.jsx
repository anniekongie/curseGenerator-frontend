import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import WarningIcon from '@material-ui/icons/Warning';
import useStyles from './styles';

function Header(props) {
    const classes = useStyles();
    const {history} = props;
    const redirectTo = (path) => {
        console.log('pushed to ', path)
        history.push(path);
    }
    const logo = (
        <div>
            <WarningIcon position="bottom" display="inline" />
            <Typography display="inline" variant="h4" component="h1">
                &nbsp;What The Cuss?
            </Typography>
        </div>
    );

    const menuButtons = (
        <div> 
            <Button classname={classes.menuButton} onClick={()=> redirectTo('/')}>
                Home
            </Button>
            <Button classname={classes.menuButton} onClick={()=> redirectTo('/about')}>
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

export default Header;