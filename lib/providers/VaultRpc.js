(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'emerald-js', './VaultJsonRpcProvider'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('emerald-js'), require('./VaultJsonRpcProvider'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.emeraldJs, global.VaultJsonRpcProvider);
    global.VaultRpc = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _emeraldJs, _VaultJsonRpcProvider) {
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

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
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

  var VaultRpcCallContext = _react2.default.createContext({});

  var VaultRpcProvider = function (_React$Component) {
    _inherits(VaultRpcProvider, _React$Component);

    function VaultRpcProvider() {
      _classCallCheck(this, VaultRpcProvider);

      var _this = _possibleConstructorReturn(this, (VaultRpcProvider.__proto__ || Object.getPrototypeOf(VaultRpcProvider)).call(this));

      _this.state = {
        ethrpc: null,
        result: null
      };
      return _this;
    }

    _createClass(VaultRpcProvider, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.setVaultRpc();
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps, prevState) {
        var transportChanged = prevProps.url !== this.props.url;
        if (transportChanged) {
          return this.setVaultRpc();
        }

        var vaultChanged = prevState.vault !== this.state.vault;
        var methodChanged = prevProps.method !== this.props.method;
        var paramsChanged = prevProps.params !== this.props.params;

        if (vaultChanged || methodChanged || paramsChanged) {
          return this.getResult();
        }
      }
    }, {
      key: 'setVaultRpc',
      value: function setVaultRpc() {
        var jsonRpc = new _emeraldJs.JsonRpc(new _emeraldJs.HttpTransport(this.props.url));
        var vaultRpc = new _emeraldJs.VaultJsonRpcProvider(jsonRpc);
        var vault = new _emeraldJs.Vault(vaultRpc);

        this.setState({ vault: vault });
      }
    }, {
      key: 'getResult',
      value: function getResult() {
        var _this2 = this;

        var method = this.state.vault[this.props.method];
        var params = this.props.params || [];

        // TODO: fix having to pass chain here
        return method.call.apply(method, [this.state.vault, 'mainnet'].concat(_toConsumableArray(params))).then(function (result) {
          return _this2.setState(_extends({}, _this2.state, { result: result }));
        });
      }
    }, {
      key: 'render',
      value: function render() {
        if (this.state.result === null) {
          return null;
        }
        return _react2.default.createElement(
          VaultRpcCallContext.Provider,
          { value: this.state.result },
          this.props.children
        );
      }
    }]);

    return VaultRpcProvider;
  }(_react2.default.Component);

  VaultRpcProvider.propTypes = {
    method: _propTypes2.default.string.isRequired,
    params: _propTypes2.default.array,
    url: _propTypes2.default.string.isRequired
  };
  VaultRpcProvider.defaultProps = {
    method: null,
    params: null
  };

  exports.default = function (_ref) {
    var method = _ref.method,
        params = _ref.params,
        refresh = _ref.refresh,
        children = _ref.children;

    return _react2.default.createElement(
      _VaultJsonRpcProvider.VaultJsonRpcContext.Consumer,
      null,
      function (_ref2) {
        var url = _ref2.url;

        var props = {
          method: method,
          params: params,
          refresh: refresh,
          url: url
        };
        return _react2.default.createElement(
          VaultRpcProvider,
          props,
          _react2.default.createElement(
            VaultRpcCallContext.Consumer,
            null,
            children
          )
        );
      }
    );
  };
});