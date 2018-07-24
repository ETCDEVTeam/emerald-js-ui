(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', '@material-ui/core/styles', '@material-ui/core/Typography', '../../icons3', '../Address', '../IdentityIcon'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('@material-ui/core/styles'), require('@material-ui/core/Typography'), require('../../icons3'), require('../Address'), require('../IdentityIcon'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.styles, global.Typography, global.icons3, global.Address, global.IdentityIcon);
    global.Account = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _styles, _Typography, _icons, _Address, _IdentityIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _Typography2 = _interopRequireDefault(_Typography);

  var _Address2 = _interopRequireDefault(_Address);

  var _IdentityIcon2 = _interopRequireDefault(_IdentityIcon);

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

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var getStyles = function getStyles(theme) {
    return {
      root: {
        display: 'flex',
        width: '100%',
        alignItems: 'center'
      },
      nameEditIcon: {
        width: '13px',
        height: '13px',
        cursor: 'pointer'
      },
      nameTypography: {
        lineHeight: '22px',
        fontSize: '14px'
      },
      accountNameContainer: {
        display: 'flex',
        alignItems: 'center'
      },
      editNameIconContainer: {
        marginLeft: '5px'
      },
      accountContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      },
      identityIcon: {
        marginRight: '10px'
      },
      identityIconRegular: {
        height: '48px',
        width: '48px'
      },
      identityIconShort: {
        height: '24px',
        width: '24px'
      }
    };
  };

  var noop = function noop() {};

  var Account = function (_React$Component) {
    _inherits(Account, _React$Component);

    function Account() {
      _classCallCheck(this, Account);

      var _this = _possibleConstructorReturn(this, (Account.__proto__ || Object.getPrototypeOf(Account)).call(this));

      _this.getIdentityIcon = _this.getIdentityIcon.bind(_this);
      _this.getNameField = _this.getNameField.bind(_this);
      _this.getNameEditIcon = _this.getNameEditIcon.bind(_this);
      return _this;
    }

    _createClass(Account, [{
      key: 'getIdentityIcon',
      value: function getIdentityIcon() {
        var _props = this.props,
            identity = _props.identity,
            name = _props.name,
            classes = _props.classes,
            address = _props.address;


        if (!identity) {
          return null;
        }

        var className = classes.identityIcon;

        if (name === null) {
          className += ' ' + classes.identityIconShort;
        } else {
          className += ' ' + classes.identityIconRegular;
        }

        return _react2.default.createElement(
          'div',
          { className: className },
          _react2.default.createElement(_IdentityIcon2.default, { id: address })
        );
      }
    }, {
      key: 'getNameEditIcon',
      value: function getNameEditIcon() {
        var _props2 = this.props,
            editable = _props2.editable,
            classes = _props2.classes,
            onEditClick = _props2.onEditClick;


        if (editable === false) {
          return null;
        }

        return _react2.default.createElement(
          'div',
          { className: classes.editNameIconContainer, onClick: onEditClick },
          _react2.default.createElement(_icons.Pen3, { className: classes.nameEditIcon })
        );
      }
    }, {
      key: 'getNameField',
      value: function getNameField() {
        var _props3 = this.props,
            name = _props3.name,
            classes = _props3.classes;


        if (name === null) {
          return null;
        }

        return _react2.default.createElement(
          'div',
          { className: classes.accountNameContainer },
          _react2.default.createElement(
            _Typography2.default,
            { className: classes.nameTypography },
            name
          ),
          this.getNameEditIcon()
        );
      }
    }, {
      key: 'render',
      value: function render() {
        var addressProps = _extends({
          shortened: true,
          hideCopy: true,
          id: this.props.address
        }, this.props.addressProps);

        var _props4 = this.props,
            addressWidth = _props4.addressWidth,
            classes = _props4.classes;


        return _react2.default.createElement(
          'div',
          { onClick: this.props.onClick, className: classes.root },
          this.getIdentityIcon(),
          _react2.default.createElement(
            'div',
            { className: classes.accountContainer, style: { width: addressWidth } },
            this.getNameField(),
            _react2.default.createElement(_Address2.default, addressProps)
          )
        );
      }
    }]);

    return Account;
  }(_react2.default.Component);

  Account.propTypes = {
    addressProps: _propTypes2.default.object.isRequired,
    address: _propTypes2.default.string.isRequired,
    name: _propTypes2.default.string,
    addressWidth: _propTypes2.default.string,
    classes: _propTypes2.default.object.isRequired,
    identity: _propTypes2.default.bool,
    identityProps: _propTypes2.default.object,
    editable: _propTypes2.default.bool,
    onClick: _propTypes2.default.function,
    onEditClick: _propTypes2.default.func
  };
  Account.defaultProps = {
    editable: false,
    width: 'auto',
    name: null,
    onEditClick: noop,
    onClick: noop
  };
  exports.default = (0, _styles.withStyles)(getStyles)(Account);
});