(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-jss', 'material-ui', 'material-ui/styles/muiThemeable', './styles'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-jss'), require('material-ui'), require('material-ui/styles/muiThemeable'), require('./styles'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactJss, global.materialUi, global.muiThemeable, global.styles);
    global.LinkButton = mod.exports;
  }
})(this, function (exports, _react, _reactJss, _materialUi, _muiThemeable, _styles) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactJss2 = _interopRequireDefault(_reactJss);

  var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

  var _styles2 = _interopRequireDefault(_styles);

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

  var LinkButton = function LinkButton(_ref) {
    var classes = _ref.classes,
        muiTheme = _ref.muiTheme,
        other = _objectWithoutProperties(_ref, ['classes', 'muiTheme']);

    var style = other.style;

    var color = style && style.color ? style.color : muiTheme.palette.primary1Color;
    return _react2.default.createElement(_materialUi.FlatButton, _extends({}, other, {
      style: _extends({ color: color }, style),
      className: classes.linkButton
    }));
  };

  exports.default = (0, _muiThemeable2.default)()((0, _reactJss2.default)(_styles2.default)(LinkButton));
});