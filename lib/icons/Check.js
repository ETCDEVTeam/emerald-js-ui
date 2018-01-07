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
    global.Check = mod.exports;
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

  var Check = function Check(props) {
    return _react2.default.createElement(
      _SvgIcon2.default,
      props,
      _react2.default.createElement(
        'svg',
        { viewBox: '0 0 52 52' },
        _react2.default.createElement('circle', { strokeWidth: '2', stroke: 'green', cx: '26', cy: '26', r: '20', fill: 'none' }),
        _react2.default.createElement('path', { strokeWidth: '2', stroke: 'black', fill: 'none', d: 'M14.1 27.2l7.1 7.2 16.7-16.8' })
      )
    );
  };

  exports.default = Check;
});