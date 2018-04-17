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
    global.Ledgerblue = mod.exports;
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

  var Ledgerblue = function Ledgerblue(props) {
    return _react2.default.createElement(
      _SvgIcon2.default,
      _extends({}, props, { viewBox: '0 0 64 64' }),
      _react2.default.createElement('path', { fill: '#DCDEDF', d: 'M64 960V128c0-35.346 28.654-64 64-64h768c35.346 0 64 28.654 64 64v832' }),
      _react2.default.createElement('path', { fill: '#31373A', d: 'M192 960V192h640v768' }),
      _react2.default.createElement('path', { d: 'M432 640h32v32h-32zm64 0h32v32h-32zm64 0h32v32h-32zm-128-64h32v32h-32zm0-64h32v32h-32zm64 0h96v96h-96z', fill: '#DCDEDF' })
    );
  };

  exports.default = Ledgerblue;
});