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
      },
      action: {
        selected: _colors2.default.snow,
        hover: 'none'
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
      fontFamily: ['"Rubik"', '"Roboto"', "sans-serif"].join(',')
    },
    overrides: {
      MuiFormControl: {
        root: {
          marginBottom: spacing * 2,
          boxSizing: 'border-box',
          borderRadius: '1px',
          borderStyle: 'solid',
          borderWidth: '1px',
          borderColor: _colors2.default.conch.main,
          paddingLeft: spacing,
          paddingRight: spacing
        }
      },
      MuiFormHelperText: {
        root: {
          position: 'absolute',
          bottom: -(spacing * 2)
        }
      },
      MuiButton: {
        root: {
          color: _colors2.default.emerald.main,
          borderRadius: 0,
          minHeight: spacing * 4
        },
        contained: {
          color: _colors2.default.white.main,
          backgroundColor: _colors2.default.emerald.main,
          boxShadow: 'none'
        }
      },
      MuiToolbar: {
        gutters: {
          paddingLeft: spacing * 3,
          paddingRight: spacing * 3
        }
      },
      MuiInputAdornment: {
        root: {
          maxHeight: 'none'
        }
      },
      MuiInput: {
        root: {
          height: spacing * 5
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
      MuiListItem: {
        root: {
          borderBottom: '1px solid ' + _colors2.default.conch.main,
          borderRight: 'none',
          borderLeft: 'none'
        }
      },
      MuiPaper: {
        root: {
          border: '1px solid ' + _colors2.default.conch.main
        }
      },
      MuiMenuItem: {
        root: {
          cursor: 'pointer',
          padding: spacing / 2 + 'px ' + spacing * 8 + 'px ' + spacing / 2 + 'px ' + spacing * 4 + 'px',
          border: 'none',
          lineHeight: spacing * 2,
          marginLeft: spacing / 2,
          height: 'auto'
        },
        selected: {
          marginLeft: '0',
          borderLeft: spacing / 2 + 'px solid ' + _colors2.default.emerald.main
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