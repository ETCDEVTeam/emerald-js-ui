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
    global.Ledgernano = mod.exports;
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

  var Ledgernano = function Ledgernano(props) {
    return _react2.default.createElement(
      _SvgIcon2.default,
      _extends({}, props, { viewBox: '0 0 64 64' }),
      _react2.default.createElement('path', { fill: '#31373A', d: 'M800 64H224c-17.673 0-32 14.327-32 32v288h192c0-70.692 57.308-128 128-128s128 57.308 128 128h192V96c0-17.673-14.327-32-32-32z' }),
      _react2.default.createElement('path', { fill: '#DCDEDF', d: 'M512 64c-176.731 0-320 143.269-320 320v576h640V384c0-176.731-143.269-320-320-320zm0 448c-70.692 0-128-57.308-128-128s57.308-128 128-128 128 57.308 128 128-57.308 128-128 128z' }),
      _react2.default.createElement('circle', { fill: 'none', stroke: 'currentColor', 'stroke-width': '40', 'stroke-miterlimit': '10', cx: '512', cy: '384', r: '128' }),
      _react2.default.createElement('path', { d: 'M432 864h32v32h-32zm64 0h32v32h-32zm64 0h32v32h-32zm-128-64h32v32h-32zm0-64h32v32h-32zm64 0h96v96h-96z', fill: '#31373A' })
    );
  };

  exports.default = Ledgernano;
});