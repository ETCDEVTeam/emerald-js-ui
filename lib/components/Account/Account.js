(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'react-jss', '../../icons3', '../Address', '../IdentityIcon', './styles'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('react-jss'), require('../../icons3'), require('../Address'), require('../IdentityIcon'), require('./styles'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactJss, global.icons3, global.Address, global.IdentityIcon, global.styles);
    global.Account = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _reactJss, _icons, _Address, _IdentityIcon, _styles) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Account = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _reactJss2 = _interopRequireDefault(_reactJss);

  var _Address2 = _interopRequireDefault(_Address);

  var _IdentityIcon2 = _interopRequireDefault(_IdentityIcon);

  var _styles2 = _interopRequireDefault(_styles);

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

  var showIdentity = function showIdentity(show, id, identityProps) {
    var props = _extends({
      size: 48
    }, identityProps);
    if (show) {
      return _react2.default.createElement(
        'div',
        { style: { marginRight: '20px' } },
        _react2.default.createElement(_IdentityIcon2.default, _extends({ id: id }, props))
      );
    }
    return null;
  };

  var Account = exports.Account = function Account(props) {
    var classes = props.classes,
        primary = props.primary,
        secondary = props.secondary,
        addr = props.addr,
        abbreviated = props.abbreviated,
        description = props.description,
        name = props.name,
        editable = props.editable;
    var onAddressClick = props.onAddressClick,
        onEditClick = props.onEditClick,
        identity = props.identity,
        identityProps = props.identityProps;


    return _react2.default.createElement(
      'div',
      { className: classes.container },
      showIdentity(identity, addr, identityProps),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: classes.primaryContainer },
          primary || _react2.default.createElement(
            'div',
            { onClick: onEditClick, className: classes.accountName },
            _react2.default.createElement(
              'div',
              null,
              name
            ),
            editable && _react2.default.createElement(
              'div',
              { style: { marginLeft: '5px' } },
              _react2.default.createElement(_icons.Pen3, { style: _styles2.default.editIcon })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { style: { display: 'flex', alignItems: 'center' } },
          secondary || _react2.default.createElement(_Address2.default, {
            onClick: onAddressClick,
            id: addr,
            shortened: abbreviated
          })
        )
      )
    );
  };

  Account.defaultProps = {
    editable: false,
    onAddressClick: function onAddressClick() {}
  };

  Account.propTypes = {
    identity: _propTypes2.default.bool,
    identityProps: _propTypes2.default.object,
    editable: _propTypes2.default.bool,
    onAddressClick: _propTypes2.default.func,
    onEditClick: _propTypes2.default.func
  };

  exports.default = (0, _reactJss2.default)(_styles2.default)(Account);
});