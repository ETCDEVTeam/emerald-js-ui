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
    global.Token1 = mod.exports;
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

  var Token1 = function Token1(props) {
    return _react2.default.createElement(
      _SvgIcon2.default,
      _extends({}, props, { viewBox: '0 0 512 512' }),
      _react2.default.createElement('circle', { fill: 'none', stroke: '#000', strokeWidth: '28', strokeMiterlimit: '10', cx: '256', cy: '256', r: '192' }),
      _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '28', strokeMiterlimit: '10', d: 'M256 96v32M256 384v32M416 256h-32M128 256H96M369.137 142.863l-22.627 22.628M165.49 346.51l-22.627 22.627M369.137 369.138L346.51 346.51M165.49 165.491l-22.627-22.628' }),
      _react2.default.createElement('circle', { fill: 'none', stroke: '#000', strokeWidth: '28', strokeMiterlimit: '10', cx: '256', cy: '256', r: '96' })
    );
  };

  exports.default = Token1;
});