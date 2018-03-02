(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'react-jss', './styles'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('react-jss'), require('./styles'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactJss, global.styles);
    global.Warning = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _reactJss, _styles) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Warning = exports.WarningText = exports.WarningHeader = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _reactJss2 = _interopRequireDefault(_reactJss);

  var _styles2 = _interopRequireDefault(_styles);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var WarningHeader = exports.WarningHeader = (0, _reactJss2.default)(_styles2.default)(function (props) {
    return _react2.default.createElement(
      'div',
      { className: props.classes.header },
      props.children
    );
  });

  WarningHeader.propTypes = {
    children: _propTypes2.default.node
  };

  var WarningText = exports.WarningText = (0, _reactJss2.default)(_styles2.default)(function (props) {
    return _react2.default.createElement(
      'div',
      { className: props.classes.text },
      props.children
    );
  });

  WarningText.propTypes = {
    children: _propTypes2.default.node
  };

  var Warning = exports.Warning = (0, _reactJss2.default)(_styles2.default)(function (props) {
    var fullWidth = props.fullWidth,
        classes = props.classes;

    var style = {};
    if (fullWidth) {
      style.width = '100%';
      style.maxWidth = 'inherit';
    }

    return _react2.default.createElement(
      'div',
      { className: classes.container, style: style },
      props.children
    );
  });

  Warning.propTypes = {
    children: _propTypes2.default.node,
    fullWidth: _propTypes2.default.bool
  };

  exports.default = Warning;
});