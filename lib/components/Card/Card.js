(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'react-jss', 'material-ui/styles/muiThemeable'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('react-jss'), require('material-ui/styles/muiThemeable'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactJss, global.muiThemeable);
    global.Card = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _reactJss, _muiThemeable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _reactJss2 = _interopRequireDefault(_reactJss);

  var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

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

  function getStyles(muiTheme) {
    return {
      borderRadius: '1px',
      backgroundColor: muiTheme.palette.alternateTextColor
    };
  }

  var Card = function Card(props) {
    return _react2.default.createElement(
      'div',
      { style: _extends({}, getStyles(props.muiTheme), props.style) },
      props.children
    );
  };

  Card.propTypes = {
    children: _propTypes2.default.node,
    style: _propTypes2.default.object,
    muiTheme: _propTypes2.default.object
  };

  exports.default = (0, _muiThemeable2.default)()(Card);
});