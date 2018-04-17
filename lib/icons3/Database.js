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
    global.Database = mod.exports;
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

  var Database = function Database(props) {
    return _react2.default.createElement(
      _SvgIcon2.default,
      _extends({}, props, { viewBox: '0 0 64 64' }),
      _react2.default.createElement('path', { d: 'M56 16v32c0 4.42-10.75 8-24 8S8 52.42 8 48V16c0-4.42 10.75-8 24-8s24 3.58 24 8z', fill: 'none', stroke: 'currentColor', strokeWidth: '4', strokeMiterlimit: '10' }),
      _react2.default.createElement('path', { d: 'M56 16c0 4.42-10.75 8-24 8S8 20.42 8 16M56 32c0 4.42-10.75 8-24 8S8 36.42 8 32', fill: 'none', stroke: 'currentColor', strokeWidth: '4', strokeMiterlimit: '10' })
    );
  };

  exports.default = Database;
});