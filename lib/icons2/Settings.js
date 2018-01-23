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
      _extends({}, props, { viewBox: '0 0 512 512' }),
      _react2.default.createElement('path', {
        fill: 'none',
        stroke: '#000',
        strokeWidth: '28',
        strokeMiterlimit: '10',
        d: 'M448 256c0-10.602-.873-20.998-2.525-31.133l-61.508-21.873 28.021-58.948a193.085 193.085 0 0 0-44.033-44.034l-58.949 28.021-21.873-61.508C276.998 64.873 266.602 64 256 64s-20.998.873-31.133 2.525l-21.873 61.508-58.949-28.021a193.085 193.085 0 0 0-44.033 44.034l28.021 58.948-61.508 21.873C64.873 235.002 64 245.398 64 256s.873 20.998 2.525 31.133l61.508 21.873-28.021 58.948a193.06 193.06 0 0 0 44.033 44.033l58.949-28.021 21.873 61.508C235.002 447.127 245.398 448 256 448s20.998-.873 31.133-2.525l21.873-61.508 58.949 28.021a193.06 193.06 0 0 0 44.033-44.033l-28.021-58.948 61.508-21.873A193.405 193.405 0 0 0 448 256z'
      })
    );
  };

  exports.default = Settings;
});