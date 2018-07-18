import { createMuiTheme } from '@material-ui/core/styles';

import colors from './colors';

const theme = {
  emeraldColors: colors,
  palette: {
    primary: colors.emerald,
    secondary: colors.ash,
    divider: colors.conch.main,
  },
  typography: {
    fontSize: '16px',
    fontWeightLight: 200,
    fontWeightRegular: 300,
    fontWeightMedium: 300,
    button: {
      fontSize: '15px',
      fontWeight: '500',
      lineHeight: '18px',
    },
    fontFamily: [
      "Rubik",
      "Roboto",
      "sans-serif"
    ]
  },
  overrides: {
    MuiFormControl: {
      root: {
        marginBottom: '20px',
        boxSizing: 'border-box',
        borderRadius: '1px',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: colors.ash.main,
        paddingLeft: '5px',
        paddingRight: '5px',
      },
    },
    MuiFormHelperText: {
      root: {
        position: 'absolute',
        bottom: '-18px',
      },
    },
    MuiButton: {
      root: {
        color: colors.emerald.main,
        borderRadius: 0,
        minHeight: '40px',
      },
      contained: {
        color: colors.white.main,
        backgroundColor: colors.emerald.main,
        boxShadow: 'none',
      },
    },
    MuiAppBar: {
      root: {
        boxShadow: 'none'
      },
      colorDefault: {
        backgroundColor: colors.white.main
      }
    },
    MuiPaper: {
      root: {
        border: `1px solid ${colors.conch.main}`,
        marginBottom: '10px',
        marginTop: '10px',
      },
    },
  },
  props: {
    MuiInput: {
      disableUnderline: true,
    },
    MuiFormHelperText: {
      error: true,
    },
    MuiPaper: {
      square: true,
      elevation: 0,
    },
  },
};

const muiTheme = createMuiTheme(theme);

export default muiTheme;
