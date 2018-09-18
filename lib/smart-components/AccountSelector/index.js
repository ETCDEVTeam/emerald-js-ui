(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', '../../components/AccountSelect', '../../providers/VaultRpc'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('../../components/AccountSelect'), require('../../providers/VaultRpc'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.AccountSelect, global.VaultRpc);
    global.index = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _AccountSelect, _VaultRpc) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _AccountSelect2 = _interopRequireDefault(_AccountSelect);

  var _VaultRpc2 = _interopRequireDefault(_VaultRpc);

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

  var AccountSelector = function (_React$Component) {
    _inherits(AccountSelector, _React$Component);

    function AccountSelector() {
      _classCallCheck(this, AccountSelector);

      return _possibleConstructorReturn(this, (AccountSelector.__proto__ || Object.getPrototypeOf(AccountSelector)).apply(this, arguments));
    }

    _createClass(AccountSelector, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            onChange = _props.onChange,
            account = _props.account;

        return _react2.default.createElement(
          _VaultRpc2.default,
          { method: 'listAccounts' },
          function (accounts) {
            var flattenedAccounts = accounts.map(function (a) {
              return a.address;
            });
            return _react2.default.createElement(_AccountSelect2.default, { accounts: flattenedAccounts, selectedAccount: account, onChange: onChange });
          }
        );
      }
    }]);

    return AccountSelector;
  }(_react2.default.Component);

  AccountSelector.propTypes = {
    onChange: _propTypes2.default.func.isRequired,
    account: _propTypes2.default.string
  };
  exports.default = AccountSelector;
});