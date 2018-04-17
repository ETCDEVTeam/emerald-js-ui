(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'react-jss', 'classnames/bind', './blockies', './styles'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('react-jss'), require('classnames/bind'), require('./blockies'), require('./styles'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactJss, global.bind, global.blockies, global.styles);
    global.IdentityIcon = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _reactJss, _bind, _blockies, _styles) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.IdentityIcon = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _reactJss2 = _interopRequireDefault(_reactJss);

  var _bind2 = _interopRequireDefault(_bind);

  var _blockies2 = _interopRequireDefault(_blockies);

  var _styles2 = _interopRequireDefault(_styles);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var IdentityIcon = exports.IdentityIcon = function IdentityIcon(_ref) {
    var classes = _ref.classes,
        id = _ref.id,
        size = _ref.size,
        onClick = _ref.onClick;

    var iconSize = Number.isInteger(size) ? size : 40;
    var icon = _blockies2.default.create({
      seed: (id || '').toLowerCase(),
      size: 8,
      scale: 4
    }).toDataURL();
    var mainStyle = {
      height: iconSize + 'px',
      width: iconSize + 'px',
      minWidth: iconSize + 'px',
      background: 'url(' + icon + ')',
      borderRadius: '50%',
      position: 'relative'
    };

    var cx = _bind2.default.bind(classes);
    var className = cx({
      clickAble: onClick !== null && typeof onClick === 'function'
    });

    return _react2.default.createElement('div', { style: mainStyle, onClick: onClick, className: className });
  };

  IdentityIcon.propTypes = {
    id: _propTypes2.default.string.isRequired,
    size: _propTypes2.default.number,
    onClick: _propTypes2.default.func,
    classes: _propTypes2.default.object
  };

  IdentityIcon.defaultProps = {
    size: 40
  };

  exports.default = (0, _reactJss2.default)(_styles2.default)(IdentityIcon);
});