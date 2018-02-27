(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'material-ui', 'material-ui/styles/muiThemeable'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('material-ui'), require('material-ui/styles/muiThemeable'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.materialUi, global.muiThemeable);
    global.Button = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _materialUi, _muiThemeable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

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

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  }

  var Button = function Button(_ref) {
    var muiTheme = _ref.muiTheme,
        props = _objectWithoutProperties(_ref, ['muiTheme']);

    var disabled = props.disabled,
        primary = props.primary,
        style = props.style;

    var styles = {
      primary: {
        height: '40px',
        fontSize: '14px',
        fontWeight: '500',
        color: muiTheme.palette.alternateTextColor
      },
      ordinary: {
        height: '40px',
        fontSize: '14px',
        fontWeight: '500',
        color: muiTheme.palette.textColor
      }
    };
    var hoverColor = {
      primary: muiTheme.palette.primary2Color,
      ordinary: muiTheme.palette.accent2Color
    };
    if (primary) {
      return _react2.default.createElement(_materialUi.FlatButton, _extends({}, props, {
        backgroundColor: disabled ? muiTheme.palette.disabledColor : muiTheme.palette.primary1Color,
        style: _extends({}, styles.primary, style),
        hoverColor: hoverColor.primary
      }));
    }
    return _react2.default.createElement(_materialUi.FlatButton, _extends({}, props, {
      backgroundColor: muiTheme.palette.accent3Color,
      style: _extends({}, styles.ordinary, style),
      hoverColor: hoverColor.ordinary
    }));
  };

  Button.propTypes = {
    disabled: _propTypes2.default.bool,
    primary: _propTypes2.default.bool
  };

  Button.defaultProps = {
    disabled: false,
    primary: false
  };

  exports.default = (0, _muiThemeable2.default)()(Button);
});