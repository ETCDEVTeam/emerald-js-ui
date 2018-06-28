(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', '@material-ui/core/SvgIcon'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('@material-ui/core/SvgIcon'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.SvgIcon);
    global.HexagonSpiderWeb = mod.exports;
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

  var HexagonSpiderWeb = function HexagonSpiderWeb(props) {
    return _react2.default.createElement(
      _SvgIcon2.default,
      _extends({}, props, { viewBox: '0 0 64 64' }),
      _react2.default.createElement('path', { fill: 'none', stroke: 'currentColor', d: 'M20 54L8 32l12-22h24l12 22-12 22H20zM32 32l12-22M32 32h24M32 32l12 22M32 32L20 54M32 32H8M32 32L20 10', strokeWidth: '4', strokeMiterlimit: '10' })
    );
  };

  exports.default = HexagonSpiderWeb;
});