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
    global.buttonGroup = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _reactJss, _styles) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ButtonGroup = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _reactJss2 = _interopRequireDefault(_reactJss);

  var _styles2 = _interopRequireDefault(_styles);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var ButtonGroup = exports.ButtonGroup = function ButtonGroup(_ref) {
    var classes = _ref.classes,
        children = _ref.children;

    if (!children) {
      return null;
    }
    var key = 0;
    return _react2.default.createElement(
      'div',
      { className: classes.container },
      children.map(function (btn) {
        var item = _react2.default.createElement(
          'div',
          { key: key, className: key === 0 ? classes.firstItem : classes.item },
          btn
        );
        key += 1;
        return item;
      })
    );
  };

  ButtonGroup.propTypes = {
    children: _propTypes2.default.array,
    classes: _propTypes2.default.object.isRequired
  };

  exports.default = (0, _reactJss2.default)(_styles2.default)(ButtonGroup);
});