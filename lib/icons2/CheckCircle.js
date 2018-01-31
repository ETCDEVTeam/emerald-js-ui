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
    global.CheckCircle = mod.exports;
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

  var CheckCircle = function CheckCircle(props) {
    return _react2.default.createElement(
      _SvgIcon2.default,
      _extends({}, props, { viewBox: '0 0 512 512' }),
      _react2.default.createElement('path', { fill: 'none', stroke: props.color || "#000", strokeWidth: '28', strokeMiterlimit: '10', d: 'M160.619 224.668L255.952 320l160-160' }),
      _react2.default.createElement('path', { fill: 'none', stroke: props.color || "#000", strokeWidth: '28', strokeMiterlimit: '10', d: 'M438.1 316.716c-16.767 50.299-52.333 89.04-96.282 111.015-43.95 21.975-96.282 27.184-146.581 10.417s-89.039-52.333-111.014-96.282c-21.976-43.949-27.184-96.281-10.418-146.581 16.767-50.298 52.333-89.039 96.282-111.015 43.949-21.975 96.282-27.183 146.581-10.417' })
    );
  };

  exports.default = CheckCircle;
});