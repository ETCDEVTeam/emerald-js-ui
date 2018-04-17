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
    global.AppleCommand = mod.exports;
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

  var AppleCommand = function AppleCommand(props) {
    return _react2.default.createElement(
      _SvgIcon2.default,
      _extends({}, props, { viewBox: '0 0 64 64' }),
      _react2.default.createElement('path', { fill: 'none', stroke: 'currentColor', 'stroke-miterlimit': '10', 'stroke-width': '4', d: 'M24 24h16v16H24zM48 8a8 8 0 0 1 8 8 8 8 0 0 1-8 8h-8v-8a8 8 0 0 1 8-8zM40 40h8a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8v-8zM16 40h8v8a8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8zM16 8a8 8 0 0 1 8 8v8h-8a8 8 0 0 1-8-8 8 8 0 0 1 8-8z' })
    );
  };

  exports.default = AppleCommand;
});