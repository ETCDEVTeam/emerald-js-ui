(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'material-ui/SvgIcon'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('material-ui/SvgIcon'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.SvgIcon);
    global.User = mod.exports;
  }
})(this, function (exports, _react, _SvgIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

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

  var User = function User(props) {
    return _react2.default.createElement(
      _SvgIcon2.default,
      _extends({}, props, { viewBox: '0 0 64 64' }),
      _react2.default.createElement('path', { d: 'M44 24c0 8.84-4 16-12 16s-12-7.16-12-16c0-12 4-16 12-16s12 4 12 16z', fill: 'none', stroke: 'currentColor', strokeWidth: '4', strokeMiterlimit: '3' }),
      _react2.default.createElement('path', { d: 'M22 33.46s-10.08 2.69-12 8A32.91 32.91 0 0 0 8 56h48a32.91 32.91 0 0 0-1.94-14.54c-1.93-5.31-12-8-12-8', fill: 'none', stroke: 'currentColor', strokeWidth: '4', strokeMiterlimit: '3' })
    );
  };

  exports.default = User;
});