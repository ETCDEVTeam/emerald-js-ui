(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'material-ui', '../IdentityIcon', '../SelectField', '../../icons3'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('material-ui'), require('../IdentityIcon'), require('../SelectField'), require('../../icons3'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.materialUi, global.IdentityIcon, global.SelectField, global.icons3);
    global.SelectAddressInput = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _materialUi, _IdentityIcon, _SelectField, _icons) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _IdentityIcon2 = _interopRequireDefault(_IdentityIcon);

  var _SelectField2 = _interopRequireDefault(_SelectField);

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

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  }

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

  /**
   * Address with IdentityIcon. We show it in from field select control
   */
  var AddressWithIcon = function AddressWithIcon(_ref) {
    var address = _ref.address,
        name = _ref.name;

    var style = {
      div: {
        display: 'flex',
        alignItems: 'center'
      },
      address: {
        marginLeft: '5px',
        fontSize: '16px',
        color: '#191919'
      }
    };
    return _react2.default.createElement(
      'div',
      { style: style.div },
      _react2.default.createElement(_IdentityIcon2.default, { size: 30, expanded: true, id: address }),
      _react2.default.createElement(
        'div',
        { style: style.address },
        name || address
      )
    );
  };

  var SelectAddressInput = function (_React$Component) {
    _inherits(SelectAddressInput, _React$Component);

    function SelectAddressInput() {
      var _ref2;

      var _temp, _this, _ret;

      _classCallCheck(this, SelectAddressInput);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = SelectAddressInput.__proto__ || Object.getPrototypeOf(SelectAddressInput)).call.apply(_ref2, [this].concat(args))), _this), _this.onChange = function (event, value) {
        _this.props.onChangeAccount(_this.props.accounts, value);
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SelectAddressInput, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            selectedAccount = _props.selectedAccount,
            accounts = _props.accounts,
            containerStyle = _props.containerStyle,
            iconButton = _props.iconButton,
            emptyAccountMenuItem = _props.emptyAccountMenuItem,
            other = _objectWithoutProperties(_props, ['selectedAccount', 'accounts', 'containerStyle', 'iconButton', 'emptyAccountMenuItem']);

        var _emptyAccountMenuItem = emptyAccountMenuItem || _react2.default.createElement(_materialUi.MenuItem, { key: 1, value: 1, primaryText: 'Empty' });
        return _react2.default.createElement(
          'div',
          { style: _extends({ height: '50px' }, containerStyle) },
          _react2.default.createElement(
            _SelectField2.default,
            _extends({
              name: selectedAccount,
              value: selectedAccount,
              onChange: this.onChange
            }, other, {
              fullWidth: true,
              dropDownMenuProps: {
                iconButton: iconButton || _react2.default.createElement(_icons.DropdownArrowDown, null),
                menuStyle: {
                  overflowX: 'hidden'
                },
                selectionRenderer: function selectionRenderer(val) {
                  if (val) {
                    return _react2.default.createElement(AddressWithIcon, { address: val });
                  }
                }
              } }),
            accounts.length > 0 ? accounts.map(function (account) {
              return _react2.default.createElement(_materialUi.MenuItem, {
                key: account,
                value: account,
                primaryText: _react2.default.createElement(AddressWithIcon, { address: account })
              });
            }) : _emptyAccountMenuItem
          )
        );
      }
    }]);

    return SelectAddressInput;
  }(_react2.default.Component);

  SelectAddressInput.propTypes = {
    name: _propTypes2.default.string.isRequired,
    accounts: _propTypes2.default.array.isRequired,
    onChangeAccount: _propTypes2.default.func,
    containerStyle: _propTypes2.default.any
  };
  exports.default = SelectAddressInput;
});