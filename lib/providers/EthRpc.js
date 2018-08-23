(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'emerald-js', './EthJsonRpcProvider'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('emerald-js'), require('./EthJsonRpcProvider'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.emeraldJs, global.EthJsonRpcProvider);
    global.EthRpc = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _emeraldJs, _EthJsonRpcProvider) {
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

  var EthRpcProvider = function (_React$Component) {
    _inherits(EthRpcProvider, _React$Component);

    function EthRpcProvider() {
      _classCallCheck(this, EthRpcProvider);

      var _this = _possibleConstructorReturn(this, (EthRpcProvider.__proto__ || Object.getPrototypeOf(EthRpcProvider)).call(this));

      _this.state = {
        ethrpc: null,
        result: null,
        intervalId: null
      };
      _this.getResult = _this.getResult.bind(_this);
      return _this;
    }

    _createClass(EthRpcProvider, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.setEthRpc();
        this.setInterval();
      }
    }, {
      key: 'setInterval',
      value: function (_setInterval) {
        function setInterval() {
          return _setInterval.apply(this, arguments);
        }

        setInterval.toString = function () {
          return _setInterval.toString();
        };

        return setInterval;
      }(function () {
        if (this.state.invervalId) {
          clearInterval(this.state.intervalId);
        }
        if (this.props.refresh) {
          this.setState({
            intervalId: setInterval(this.getResult, this.props.refresh)
          });
        }
      })
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        clearInterval(this.state.intervalId);
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps, prevState) {
        var transportChanged = prevProps.url !== this.props.url;
        var refreshChanged = prevProps.refresh !== this.props.refresh;

        if (refreshChanged) {
          return this.setInterval();
        }

        if (transportChanged) {
          return this.setEthRpc();
        }

        var ethrpcChanged = prevState.ethrpc !== this.state.ethrpc;
        var methodChanged = prevProps.method !== this.props.method;
        var paramsChanged = prevProps.params !== this.props.params;

        if (ethrpcChanged || methodChanged || paramsChanged) {
          return this.getResult();
        }
      }
    }, {
      key: 'setEthRpc',
      value: function setEthRpc() {
        var jsonRpc = new _emeraldJs.JsonRpc(new _emeraldJs.HttpTransport(this.props.url));
        var ethrpc = new _emeraldJs.EthRpc(jsonRpc);

        this.setState({ ethrpc: ethrpc });
      }
    }, {
      key: 'getResult',
      value: function getResult() {
        var _this2 = this;

        var method = this.props.method.split('.').reduce(function (memo, item) {
          return memo[item];
        }, this.state.ethrpc);
        var params = this.props.params || [];

        return method.call.apply(method, [this.state.ethrpc].concat(_toConsumableArray(params))).then(function (result) {
          return _this2.setState(_extends({}, _this2.state, { result: result }));
        });
      }
    }, {
      key: 'render',
      value: function render() {
        if (this.state.result === null) {
          return null;
        }
        return this.props.children(this.state.result);
      }
    }]);

    return EthRpcProvider;
  }(_react2.default.Component);

  EthRpcProvider.propTypes = {
    method: _propTypes2.default.string.isRequired,
    params: _propTypes2.default.array,
    url: _propTypes2.default.string.isRequired
  };
  EthRpcProvider.defaultProps = {
    method: null,
    params: null
  };

  exports.default = function (_ref) {
    var method = _ref.method,
        params = _ref.params,
        refresh = _ref.refresh,
        children = _ref.children;

    return _react2.default.createElement(
      _EthJsonRpcProvider.EthJsonRpcContext.Consumer,
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
          EthRpcProvider,
          props,
          children
        );
      }
    );
  };
});