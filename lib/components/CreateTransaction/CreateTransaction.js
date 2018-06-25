(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'material-ui/styles/muiThemeable', '../ButtonGroup', '../Button', './FormFieldWrapper', './FromField', './FormLabel', './TokenField', './ToField', './AmountField', './GasLimitField'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('material-ui/styles/muiThemeable'), require('../ButtonGroup'), require('../Button'), require('./FormFieldWrapper'), require('./FromField'), require('./FormLabel'), require('./TokenField'), require('./ToField'), require('./AmountField'), require('./GasLimitField'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.muiThemeable, global.ButtonGroup, global.Button, global.FormFieldWrapper, global.FromField, global.FormLabel, global.TokenField, global.ToField, global.AmountField, global.GasLimitField);
    global.CreateTransaction = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _muiThemeable, _ButtonGroup, _Button, _FormFieldWrapper, _FromField, _FormLabel, _TokenField, _ToField, _AmountField, _GasLimitField) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

  var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

  var _Button2 = _interopRequireDefault(_Button);

  var _FormFieldWrapper2 = _interopRequireDefault(_FormFieldWrapper);

  var _FromField2 = _interopRequireDefault(_FromField);

  var _FormLabel2 = _interopRequireDefault(_FormLabel);

  var _TokenField2 = _interopRequireDefault(_TokenField);

  var _ToField2 = _interopRequireDefault(_ToField);

  var _AmountField2 = _interopRequireDefault(_AmountField);

  var _GasLimitField2 = _interopRequireDefault(_GasLimitField);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
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

  function getStyles(muiTheme) {
    return {
      width: '800px'
    };
  }

  var CreateTransaction = function (_React$Component) {
    _inherits(CreateTransaction, _React$Component);

    function CreateTransaction() {
      _classCallCheck(this, CreateTransaction);

      var _this = _possibleConstructorReturn(this, (CreateTransaction.__proto__ || Object.getPrototypeOf(CreateTransaction)).call(this));

      _this.getDisabled = _this.getDisabled.bind(_this);
      return _this;
    }

    _createClass(CreateTransaction, [{
      key: 'getDisabled',
      value: function getDisabled() {
        return !this.props.to || !this.props.from || this.props.amount === '';
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { style: getStyles(this.props.muiTheme) },
          _react2.default.createElement(
            _FormFieldWrapper2.default,
            null,
            _react2.default.createElement(_FromField2.default, {
              onChangeAccount: this.props.onChangeFrom,
              selectedAccount: this.props.from,
              accounts: this.props.ownAddresses
            })
          ),
          _react2.default.createElement(
            _FormFieldWrapper2.default,
            null,
            _react2.default.createElement(_TokenField2.default, {
              onChangeToken: this.props.onChangeToken,
              selectedToken: this.props.token,
              tokenSymbols: this.props.tokenSymbols,
              balance: this.props.balance,
              currency: this.props.currency,
              fiatBalance: this.props.fiatBalance
            })
          ),
          _react2.default.createElement(
            _FormFieldWrapper2.default,
            null,
            _react2.default.createElement(_ToField2.default, {
              onChangeTo: this.props.onChangeTo,
              to: this.props.to,
              addressBookAddresses: this.props.addressBookAddresses,
              onEmptyAddressBookClick: this.props.onEmptyAddressBookClick
            })
          ),
          _react2.default.createElement(
            _FormFieldWrapper2.default,
            null,
            _react2.default.createElement(_AmountField2.default, {
              balance: this.props.balance,
              amount: this.props.amount,
              onChangeAmount: this.props.onChangeAmount
            })
          ),
          _react2.default.createElement(
            _FormFieldWrapper2.default,
            null,
            _react2.default.createElement(_GasLimitField2.default, {
              onChangeGasLimit: this.props.onChangeGasLimit,
              gasLimit: this.props.gasLimit,
              txFee: this.props.txFee,
              token: this.props.token,
              txFeeFiat: this.props.txFeeFiat,
              currency: this.props.currency
            })
          ),
          _react2.default.createElement(
            _FormFieldWrapper2.default,
            { style: { paddingBottom: '0px' } },
            _react2.default.createElement(_FormLabel2.default, null),
            _react2.default.createElement(
              _ButtonGroup2.default,
              { style: { flexGrow: 5 } },
              _react2.default.createElement(_Button2.default, { label: 'Cancel', onClick: this.props.onCancel }),
              _react2.default.createElement(_Button2.default, { disabled: this.getDisabled(), primary: true, label: 'Create Transaction', onClick: this.props.onSubmit })
            )
          )
        );
      }
    }]);

    return CreateTransaction;
  }(_react2.default.Component);

  CreateTransaction.propTypes = {
    from: _propTypes2.default.string.isRequired,
    token: _propTypes2.default.string.isRequired,
    tokenSymbols: _propTypes2.default.string.isRequired,
    balance: _propTypes2.default.string.isRequired,
    amount: _propTypes2.default.string.isRequired,
    addressBookAddresses: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
    to: _propTypes2.default.string.isRequired,
    currency: _propTypes2.default.string.isRequired,
    gasLimit: _propTypes2.default.string.isRequired,
    txFee: _propTypes2.default.string.isRequired,
    fiatBalance: _propTypes2.default.string.isRequired,
    ownAddresses: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
    muiTheme: _propTypes2.default.object.isRequired,
    onSubmit: _propTypes2.default.func.isRequired,
    onCancel: _propTypes2.default.func.isRequired,
    onChangeTo: _propTypes2.default.func.isRequired,
    onChangeAmount: _propTypes2.default.func.isRequired,
    onChangeFrom: _propTypes2.default.func.isRequired,
    onChangeGasLimit: _propTypes2.default.func.isRequired,
    onChangeToken: _propTypes2.default.func.isRequired,
    onEmptyAddressBookClick: _propTypes2.default.func.isRequired
  };
  exports.default = (0, _muiThemeable2.default)()(CreateTransaction);
});