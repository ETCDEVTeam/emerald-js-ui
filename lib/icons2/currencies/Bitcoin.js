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
    global.Bitcoin = mod.exports;
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

  var Bitcoin = function Bitcoin(props) {
    return _react2.default.createElement(
      _SvgIcon2.default,
      _extends({}, props, { viewBox: '0 0 1024 1024' }),
      _react2.default.createElement('path', { fill: '#F6B75D', d: 'M960 704c0 141.385-114.615 256-256 256H320C178.615 960 64 845.385 64 704V320C64 178.615 178.615 64 320 64h384c141.385 0 256 114.615 256 256v384z' }),
      _react2.default.createElement(
        'g',
        { fill: 'none', stroke: '#FFF', strokeWidth: '32', strokeMiterlimit: '10' },
        _react2.default.createElement('path', { d: 'M336 512h256M592 288H336v448h256M592 512c61.856 0 112-50.144 112-112s-50.144-112-112-112M592 736c61.856 0 112-50.144 112-112s-50.144-112-112-112' })
      ),
      _react2.default.createElement('path', { fill: 'none', stroke: '#FFF', strokeWidth: '32', strokeMiterlimit: '10', d: 'M608 192v96M416 192v96M608 736v96M416 736v96' })
    );
  };

  exports.default = Bitcoin;
});