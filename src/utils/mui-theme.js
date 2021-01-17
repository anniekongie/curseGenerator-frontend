import { createMuiTheme } from '@material-ui/core/styles';
import { PlayCircleFilledWhite, SportsRugby } from '@material-ui/icons';

const font =  "'Josefin Sans', sans-serif";

const theme = createMuiTheme({
    palette: {
        primary: {
            dark: '#000000',
            main: '#b08401',
        },
        secondary: {
            main: '#dfcd99',
        },
        status: {
            danger: 'orange',
        },
    },overrides: {
        MuiButton: {
            root: {
                backgroundColor: '#dfcd99',
            },
            label: {
                marginRight: 10,
                marginLeft: 10,
            },
          sizeSmall: {
            // Adjust spacing to reach minimal touch target hitbox
            marginLeft: 4,
            marginRight: 4,
            padding: 12,
          },
        },
        MuiFormControl: {
            root: {
                marginBottom: 20,
                marginLeft: 'auto',
                marginRight: 'auto',
            },
      },
    },
    typography: {
        fontFamily: font,
        body1: {
        },
        button: {
            fontSize: 18,
            fontWeight: 300,
        },
        subtitle1: {
            color: 'grey',

        },
        h1: {
            fontWeight: 600,
            fontSize: 67,
            color: '#b08401',
        },
        h2: {
            fontSize: 54,
            fontWeight: 400,
            color: 'black',//'#f5f5f5',
        },
        h3: {
            fontWeight: 300,
            fontSize: 30,
            // color: '#ffc4c4',
            color: 'black',
        },
        h4: {
            color:'#f5f5f5',
            fontSize: 28,
            fontWeight: 500,
        }
    }

});

export default theme;