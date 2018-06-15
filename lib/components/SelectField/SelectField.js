(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'material-ui/SelectField', 'material-ui/styles/muiThemeable'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('material-ui/SelectField'), require('material-ui/styles/muiThemeable'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.SelectField, global.muiThemeable);
    global.SelectField = mod.exports;
  }
})(this, function (exports, _react, _SelectField, _muiThemeable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Select = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _SelectField2 = _interopRequireDefault(_SelectField);

  var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function getStyles(muiTheme) {
    return {
      boxSizing: 'border-box',
      height: '50px',
      border: '1px solid ' + muiTheme.palette.borderColor,
      borderRadius: '1px',
      color: muiTheme.palette.textColor,
      fontSize: '16px',
      lineHeight: '24px',
      paddingLeft: '10px',
      paddingRight: '10px'
    };
  }

  var Select = exports.Select = function Select(props) {
    var style = props.style,
        muiTheme = props.muiTheme;

    var defaultProps = {
      underlineShow: false
    };
    var styles = getStyles(muiTheme);
    return _react2.default.createElement(_SelectField2.default, _extends({
      hintStyle: { opacity: 1, color: muiTheme.palette.secondaryTextColor, fontWeight: '200' },
      underlineShow: false,
      style: _extends({}, style, styles)
    }, props));
  };

  exports.default = (0, _muiThemeable2.default)()(Select);
});