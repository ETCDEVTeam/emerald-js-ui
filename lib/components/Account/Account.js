(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', '@material-ui/core/styles', '../../icons3', '../Address', '../IdentityIcon', './styles'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('@material-ui/core/styles'), require('../../icons3'), require('../Address'), require('../IdentityIcon'), require('./styles'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.styles, global.icons3, global.Address, global.IdentityIcon, global.styles);
    global.Account = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _styles, _icons, _Address, _IdentityIcon, _styles2) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Account = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _Address2 = _interopRequireDefault(_Address);

  var _IdentityIcon2 = _interopRequireDefault(_IdentityIcon);

  var _styles3 = _interopRequireDefault(_styles2);

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

  var getStyles = function getStyles(theme) {
    return {
      container: {
        backgroundColor: 'inherit',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      },
      editIcon: {
        width: '13px',
        height: '13px',
        cursor: 'pointer'
      },
      primaryContainer: {
        lineHeight: '22px',
        fontSize: '14px'
      },
      accountName: {
        display: 'flex',
        alignItems: 'center'
      }
    };
  };

  var showIdentity = function showIdentity(show, id, identityProps) {
    var props = _extends({
      size: 48
    }, identityProps);
    if (show) {
      return _react2.default.createElement(
        'div',
        { style: { width: '30px', marginRight: '10px' } },
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
        shortened = props.shortened,
        description = props.description,
        name = props.name,
        editable = props.editable,
        hideCopy = props.hideCopy;
    var onAddressClick = props.onAddressClick,
        onEditClick = props.onEditClick,
        identity = props.identity,
        identityProps = props.identityProps;


    var wrapStyle = void 0;

    if (shortened) {
      wrapStyle = { width: identity ? '80%' : '100%' };
    }

    return _react2.default.createElement(
      'div',
      { className: classes.container },
      showIdentity(identity, addr, identityProps),
      _react2.default.createElement(
        'div',
        { style: wrapStyle },
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
              _react2.default.createElement(_icons.Pen3, { style: _styles3.default.editIcon })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { style: { display: 'flex', alignItems: 'center' } },
          secondary || _react2.default.createElement(_Address2.default, {
            onClick: onAddressClick,
            id: addr,
            shortened: shortened,
            hideCopy: hideCopy
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

  exports.default = (0, _styles.withStyles)(getStyles)(Account);
});