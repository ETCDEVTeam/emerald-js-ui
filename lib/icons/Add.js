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
    global.Add = mod.exports;
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

  /* eslint-disable max-len */
  var Add = function Add(props) {
    return _react2.default.createElement(
      _SvgIcon2.default,
      props,
      _react2.default.createElement('path', { d: 'M11.7142857,11.4285714 L11.7142857,7.14285714 L12.8571429,7.14285714 L12.8571429,11.4285714 L17.1428571,11.4285714 L17.1428571,12.5714286 L12.8571429,12.5714286 L12.8571429,16.8571429 L11.7142857,16.8571429 L11.7142857,12.5714286 L7.42857143,12.5714286 L7.42857143,11.4285714 L11.7142857,11.4285714 Z M12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 Z M12,22.8571429 C17.9962344,22.8571429 22.8571429,17.9962344 22.8571429,12 C22.8571429,6.00376557 17.9962344,1.14285714 12,1.14285714 C6.00376557,1.14285714 1.14285714,6.00376557 1.14285714,12 C1.14285714,17.9962344 6.00376557,22.8571429 12,22.8571429 Z' })
    );
  };

  exports.default = Add;
});