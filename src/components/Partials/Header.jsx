import { AppBar, Toolbar, Typography } from "@material-ui/core";
import WarningIcon from '@material-ui/icons/Warning';
import useStyles from './styles';
import {Link} from 'react-router-dom';

function Header() {
    const classes = useStyles();
    const logo = (
        <div>
            <WarningIcon position="bottom" display="inline"/>
            <Typography display ="inline" variant="h6" component="h1">
                &nbsp;What The Cuss? 
            </Typography> 
        </div>
      );
    
    const display = () => {
        return <Toolbar> <Link to="/">{logo}</Link></Toolbar>;
      };

    return (
        <header>
            <AppBar className={classes.header}> {display()} </AppBar>
        </header>
    )
}

export default Header;