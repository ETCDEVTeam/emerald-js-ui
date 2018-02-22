(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'react-jss'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('react-jss'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactJss);
    global.Card = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _reactJss) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _reactJss2 = _interopRequireDefault(_reactJss);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var styles = {
    container: {
      borderRadius: '1px',
      backgroundColor: '#FFFFFF'
    }
  };

  var Card = function Card(props) {
    return _react2.default.createElement(
      'div',
      { style: props.style, className: props.classes.container },
      props.children
    );
  };

  Card.propTypes = {
    children: _propTypes2.default.node,
    style: _propTypes2.default.object,
    classes: _propTypes2.default.object.isRequired
  };

  exports.default = (0, _reactJss2.default)(styles)(Card);
});