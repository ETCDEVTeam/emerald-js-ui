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
    global.ContractExecute2 = mod.exports;
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

  var ContractExecute2 = function ContractExecute2(props) {
    return _react2.default.createElement(
      _SvgIcon2.default,
      _extends({}, props, { viewBox: '0 0 512 512' }),
      _react2.default.createElement('path', { fill: 'none', stroke: props.color || "#000", strokeWidth: '28', strokeMiterlimit: '10', d: 'M128 320H64V64h320v64' }),
      _react2.default.createElement('circle', { fill: 'none', stroke: props.color || "#000", strokeWidth: '28', strokeMiterlimit: '10', cx: '320', cy: '320', r: '128' }),
      _react2.default.createElement('path', { fill: 'none', stroke: props.color || "#000", strokeWidth: '28', strokeMiterlimit: '10', d: 'M288 256l64 64-64 64M128 128v32M192 128v32M256 128v32' })
    );
  };

  exports.default = ContractExecute2;
});