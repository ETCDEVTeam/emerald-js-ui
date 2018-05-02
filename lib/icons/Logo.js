(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.Logo = mod.exports;
  }
})(this, function (exports, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var LogoIcon = function LogoIcon(props) {
    return _react2.default.createElement(
      'svg',
      { xmlns: 'http://www.w3.org/2000/svg', width: props.width || '64', height: props.height || '64', viewBox: '0 0 64 64' },
      _react2.default.createElement('path', { fill: '#00c853', d: 'M32 56L16 32 32 8l16 24-16 24z' }),
      _react2.default.createElement('path', { opacity: '.5', d: 'M38.4 36.8L40 44l8-12-9.6 4.8z' }),
      _react2.default.createElement('path', { opacity: '.2', d: 'M16 32l8 12 1.6-7.2L16 32z' }),
      _react2.default.createElement('path', { opacity: '.3', d: 'M32 40l-6.4-3.2L24 44l8 12 8-12-1.6-7.2L32 40z' }),
      _react2.default.createElement('path', { opacity: '.2', d: 'M32 40l6.4-3.2L36 26l-4-2-4 2-2.4 10.8L32 40z' }),
      _react2.default.createElement('path', { opacity: '.4', d: 'M36 26l2.4 10.8L48 32l-12-6z' }),
      _react2.default.createElement('path', { opacity: '.1', d: 'M28 26l-12 6 9.6 4.8L28 26zM32 24l4 2-4-18-4 18 4-2z' }),
      _react2.default.createElement('path', { opacity: '.3', d: 'M48 32L32 8l4 18 12 6z' })
    );
  };
  exports.default = LogoIcon;
});