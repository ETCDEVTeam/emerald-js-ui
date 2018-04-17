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
    global.Settings = mod.exports;
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

  var Settings = function Settings(props) {
    return _react2.default.createElement(
      _SvgIcon2.default,
      _extends({}, props, { viewBox: '0 0 64 64' }),
      _react2.default.createElement('path', { d: 'M56 32a24.17 24.17 0 0 0-.32-3.89L48 25.37 51.5 18a24.14 24.14 0 0 0-5.5-5.5L38.63 16l-2.74-7.68a24.15 24.15 0 0 0-7.78 0L25.37 16 18 12.5a24.14 24.14 0 0 0-5.5 5.5l3.5 7.37-7.68 2.74a24.15 24.15 0 0 0 0 7.78L16 38.63 12.5 46a24.13 24.13 0 0 0 5.5 5.5l7.37-3.5 2.73 7.69a24.14 24.14 0 0 0 7.78 0L38.63 48 46 51.5a24.13 24.13 0 0 0 5.5-5.5L48 38.63l7.69-2.73A24.18 24.18 0 0 0 56 32z', fill: 'none', stroke: 'currentColor', 'stroke-miterlimit': '10', 'stroke-width': '4' }),
      _react2.default.createElement('circle', { cx: '32', cy: '32', r: '4', fill: 'none', stroke: 'currentColor', 'stroke-miterlimit': '10', 'stroke-width': '4' })
    );
  };

  exports.default = Settings;
});