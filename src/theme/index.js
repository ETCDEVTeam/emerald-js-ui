import { createMuiTheme } from '@material-ui/core/styles';

import colors from './colors';

const theme = {
  palette: {
    primary: colors.emerald,
    secondary: colors.ash,
  },
  overrides: {
    MuiFormControl: {
      root: {
        boxSizing: 'border-box',
        borderRadius: '1px',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: colors.ash.main
      }
    },
  },
  props: {
    MuiInput: {
      disableUnderline: true,
    },
    MuiFormHelperText: {
      error: true,
    }
  },
};

const muiTheme = createMuiTheme(theme);

export default muiTheme;
