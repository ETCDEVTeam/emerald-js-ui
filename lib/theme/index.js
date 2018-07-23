(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', '@material-ui/core/styles', './colors'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('@material-ui/core/styles'), require('./colors'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.styles, global.colors);
    global.index = mod.exports;
  }
})(this, function (exports, _styles, _colors) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _colors2 = _interopRequireDefault(_colors);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var spacing = 10;

  var theme = {
    emeraldColors: _colors2.default,
    palette: {
      primary: _colors2.default.emerald,
      secondary: _colors2.default.ash,
      divider: _colors2.default.conch.main,
      background: {
        default: _colors2.default.snow
      }
    },
    spacing: {
      unit: spacing
    },
    typography: {
      fontSize: 16,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 400,
      button: {
        fontSize: '15px',
        lineHeight: '18px'
      },
      fontFamily: ['"Rubik"', '"Roboto"', "sans-serif"].join(',')
    },
    overrides: {
      MuiFormControl: {
        root: {
          marginBottom: '20px',
          boxSizing: 'border-box',
          borderRadius: '1px',
          borderStyle: 'solid',
          borderWidth: '1px',
          borderColor: _colors2.default.ash.main,
          paddingLeft: '5px',
          paddingRight: '5px'
        }
      },
      MuiFormHelperText: {
        root: {
          position: 'absolute',
          bottom: '-18px'
        }
      },
      MuiButton: {
        root: {
          color: _colors2.default.emerald.main,
          borderRadius: 0,
          minHeight: '40px'
        },
        contained: {
          color: _colors2.default.white.main,
          backgroundColor: _colors2.default.emerald.main,
          boxShadow: 'none'
        }
      },
      MuiToolbar: {
        gutters: {
          paddingLeft: spacing * 3 + 'px',
          paddingRight: spacing * 3 + 'px'
        }
      },
      MuiAppBar: {
        root: {
          boxShadow: 'none'
        },
        colorDefault: {
          backgroundColor: _colors2.default.white.main
        }
      },
      MuiPaper: {
        root: {
          border: '1px solid ' + _colors2.default.conch.main
        }
      }
    },
    props: {
      MuiTypography: {
        color: 'secondary'
      },
      MuiInput: {
        disableUnderline: true
      },
      MuiFormHelperText: {
        error: true
      },
      MuiPaper: {
        square: true,
        elevation: 0
      }
    }
  };

  var muiTheme = (0, _styles.createMuiTheme)(theme);

  exports.default = muiTheme;
});