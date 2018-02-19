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
    global.EtcLogo = mod.exports;
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

  var EtcLogo = function EtcLogo(props) {
    return _react2.default.createElement(
      _SvgIcon2.default,
      _extends({}, props, { viewBox: '0 0 512 512' }),
      _react2.default.createElement('path', { fill: 'none', stroke: props.color || '#010103', strokeWidth: '28', strokeMiterlimit: '10', d: 'M256 437.019L128.981 256 256 74.981 383.019 256z' }),
      _react2.default.createElement('path', { fill: 'none', stroke: props.color || '#010103', strokeWidth: '28', strokeMiterlimit: '10', d: 'M128.092 256L256 192l127.908 64M383.908 256L256 320l-127.908-64' })
    );
  };

  exports.default = EtcLogo;
});