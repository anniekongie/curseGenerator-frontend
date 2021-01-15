import { Box } from '@material-ui/core';
import useStyles from './style/styles';

function Layout (props) {
    const styles = useStyles();
    const { children } = props;
    return (
        <Box id="main-outer-box-" width={1} height={1} paddingTop={64} className={styles.container}>
            {children}
        </Box>
    );
}

export default Layout;