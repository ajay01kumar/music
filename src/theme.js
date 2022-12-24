import { red } from '@mui/material/colors';
import { createTheme,responsiveFontSizes } from '@mui/material';
// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: [
     'Lato',
      'sans-serif'
    ].join(','),
    
     fontSize: 12,
     fontWeightBold:'bolder',
     subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
    },
    h6:{
      fontWeight:'bolder',
      marginInline:'5px'
    },
    h5:{
      fontWeight:'bolder'
    }
  },
  links: {
    padding: '0 50px',
    color: '#7cb23e',
    "&:hover": {
      textDecorationColor: "black",
      cursor:'pointer'
    }
  },
  palette: {
    type: 'light',
    primary: {
      main: '#436498',
      light: '#436498',
      dark: '#436498',
      contrastText: "#fff"
    },
    secondary: {
      main: '#aba2a2',
      light: '#aba2a2',
      dark: '##696464',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f6f6f4',
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        padding: '20px 10px',
        margin: '10px',
        backgroundColor: '#fffff', // 5d737e
      },
    },
    MuiButton: {
      root: {
        margin: '5px',
        fontWeight:'bolder',
        
      },
      label: {
        color: "#f1f1f1",
      },
      
    },
    MuiMenuItem: { // For ListItem, change this to MuiListItem
      root: {
        color:'green',
        "&$selected": {       // this is to refer to the prop provided by M-UI
          backgroundColor: "green", // updated backgroundColor
        },
      },
    }
  },
  spacing: (factor) => `${0.25 * factor}rem`, // (Bootstrap strategy)

});

theme.spacing(2);
export default responsiveFontSizes(theme);
