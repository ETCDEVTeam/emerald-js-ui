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

  var theme = {
    emeraldColors: _colors2.default,
    palette: {
      primary: _colors2.default.emerald,
      secondary: _colors2.default.ash,
      divider: _colors2.default.conch.main
    },
    typography: {
      button: {
        fontSize: '15px',
        fontWeight: '500',
        lineHeight: '18px'
      }
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
      MuiPaper: {
        root: {
          border: '1px solid ' + _colors2.default.conch.main,
          marginBottom: '10px',
          marginTop: '10px'
        }
      }
    },
    props: {
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