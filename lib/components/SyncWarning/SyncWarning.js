(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-jss', '../../icons2', './styles'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-jss'), require('../../icons2'), require('./styles'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactJss, global.icons2, global.styles);
    global.SyncWarning = mod.exports;
  }
})(this, function (exports, _react, _reactJss, _icons, _styles) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactJss2 = _interopRequireDefault(_reactJss);

  var _styles2 = _interopRequireDefault(_styles);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  }

  var SyncWarning = function SyncWarning(props) {
    var startingBlock = props.startingBlock,
        currentBlock = props.currentBlock,
        highestBlock = props.highestBlock,
        classes = props.classes,
        other = _objectWithoutProperties(props, ['startingBlock', 'currentBlock', 'highestBlock', 'classes']);

    return _react2.default.createElement(
      'div',
      { className: classes.container },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_icons.Spinner1, { color: _styles2.default.text.color })
      ),
      _react2.default.createElement(
        'div',
        { className: classes.text },
        'We are syncing, your balances can be wrong'
      ),
      startingBlock && currentBlock && highestBlock && _react2.default.createElement(
        'div',
        { className: classes.text },
        startingBlock,
        '/',
        currentBlock,
        '/',
        highestBlock
      )
    );
  };

  exports.default = (0, _reactJss2.default)(_styles2.default)(SyncWarning);
});