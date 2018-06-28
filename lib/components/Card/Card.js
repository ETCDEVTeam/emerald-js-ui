(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', '@material-ui/core/styles'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('@material-ui/core/styles'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.styles);
    global.Card = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _styles) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var styles = function styles(theme) {
    return {
      root: {
        border: '1px solid ' + theme.palette.divider // TODO: fixme
      }
    };
  };

  var Card = function Card(props) {
    return _react2.default.createElement(
      'div',
      { className: props.classes.root },
      props.children
    );
  };

  Card.propTypes = {
    children: _propTypes2.default.node.isRequired,
    classes: _propTypes2.default.object.isRequired
  };

  exports.default = (0, _styles.withStyles)(styles)(Card);
});