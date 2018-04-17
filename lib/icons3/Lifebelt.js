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
    global.Lifebelt = mod.exports;
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

  var Lifebelt = function Lifebelt(props) {
    return _react2.default.createElement(
      _SvgIcon2.default,
      _extends({}, props, { viewBox: '0 0 64 64' }),
      _react2.default.createElement('circle', { cx: '32', cy: '32', r: '24', fill: 'none', stroke: 'currentColor', 'stroke-miterlimit': '10', 'stroke-width': '4' }),
      _react2.default.createElement('circle', { cx: '32', cy: '32', r: '8', fill: 'none', stroke: 'currentColor', 'stroke-miterlimit': '10', 'stroke-width': '4' }),
      _react2.default.createElement('path', { fill: 'none', stroke: 'currentColor', 'stroke-miterlimit': '10', 'stroke-width': '4', d: 'M48.97 48.97L37.66 37.66M26.34 26.34L15.03 15.03M37.66 26.34l11.31-11.31M26.34 37.66L15.03 48.97' })
    );
  };

  exports.default = Lifebelt;
});