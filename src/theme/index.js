import { createMuiTheme } from '@material-ui/core/styles';

import colors from './colors';

const theme = {
  palette: {
    primary: colors.emerald,
  },
  overrides: {
    MuiFormControl: {
      root: {
        border: colors.ash,
      }
    }
  },
  props: {
    MuiInput: {
      disableUnderline: true,
    }
  },
};

const muiTheme = createMuiTheme(theme);

export default muiTheme;
