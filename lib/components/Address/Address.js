(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'copy-to-clipboard', 'react-jss', '../../icons', './styles'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('copy-to-clipboard'), require('react-jss'), require('../../icons'), require('./styles'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.copyToClipboard, global.reactJss, global.icons, global.styles);
    global.Address = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _copyToClipboard, _reactJss, _icons, _styles) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Address = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _copyToClipboard2 = _interopRequireDefault(_copyToClipboard);

  var _reactJss2 = _interopRequireDefault(_reactJss);

  var _styles2 = _interopRequireDefault(_styles);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Address = exports.Address = function Address(props) {
    var classes = props.classes,
        id = props.id,
        shortened = props.shortened,
        onClick = props.onClick,
        style = props.style;

    function copyAddressToClipBoard() {
      (0, _copyToClipboard2.default)(id);
    }

    var icons = null;
    if (!shortened) {
      icons = _react2.default.createElement(_icons.Copy, {
        onClick: copyAddressToClipBoard,
        color: classes.container.color,
        className: classes.copyIcon
      });
    }
    var sanitizedId = id.startsWith('0x') ? id : '0x' + id;
    var value = shortened ? sanitizedId.substring(0, 7) + '...' + sanitizedId.substring(sanitizedId.length - 6, sanitizedId.length) : sanitizedId;

    return _react2.default.createElement(
      'div',
      { className: classes.container, style: style },
      _react2.default.createElement(
        'div',
        { onClick: onClick, className: classes.address },
        value
      ),
      icons && _react2.default.createElement(
        'div',
        null,
        icons
      )
    );
  };

  Address.propTypes = {
    onClick: _propTypes2.default.func,
    id: _propTypes2.default.string.isRequired,
    shortened: _propTypes2.default.bool
  };

  exports.default = (0, _reactJss2.default)(_styles2.default)(Address);
});