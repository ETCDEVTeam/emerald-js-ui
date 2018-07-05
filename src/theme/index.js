import { createMuiTheme } from '@material-ui/core/styles';

import colors from './colors';

const theme = {
  palette: {
    primary: colors.emerald,
    secondary: colors.ash,
  },
  typography: {
    button: {
      fontSize: '15px',
      fontWeight: '500',
      lineHeight: '18px',
    },
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
  },
  props: {
    MuiInput: {
      disableUnderline: true,
    },
    MuiFormHelperText: {
      error: true,
    },
  },
};

const muiTheme = createMuiTheme(theme);

export default muiTheme;
