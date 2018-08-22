(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'emerald-js', 'prop-types', './EthRpc'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('emerald-js'), require('prop-types'), require('./EthRpc'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.emeraldJs, global.propTypes, global.EthRpc);
    global.Contract = mod.exports;
  }
})(this, function (exports, _react, _emeraldJs, _propTypes, _EthRpc) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _EthRpc2 = _interopRequireDefault(_EthRpc);

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

  var ContractCallContext = _react2.default.createContext({});

  var ContractProvider = function (_React$Component) {
    _inherits(ContractProvider, _React$Component);

    function ContractProvider() {
      _classCallCheck(this, ContractProvider);

      var _this = _possibleConstructorReturn(this, (ContractProvider.__proto__ || Object.getPrototypeOf(ContractProvider)).call(this));

      _this.state = {
        data: null
      };
      return _this;
    }

    _createClass(ContractProvider, [{
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps, prevState) {
        var abiChanged = prevProps.abi !== this.props.abi;
        var methodChanged = prevProps.method !== this.props.method;
        var paramsChanged = prevProps.params !== this.props.params;
        var addressChanged = prevProps.address !== this.props.address;

        if (addressChanged || abiChanged || methodChanged || paramsChanged) {
          return this.setData();
        }
      }
    }, {
      key: 'setData',
      value: function setData() {
        var _this2 = this;

        var func = this.props.abi.find(function (f) {
          return f.name === _this2.props.method;
        });
        var data = _emeraldJs.contracts.functionToData(func, this.props.params);
        this.setState({ data: data });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        if (this.state.data === null) {
          return null;
        }
        return _react2.default.createElement(
          _EthRpc2.default,
          { method: 'eth.call', params: [{ to: this.props.address, data: this.state.data }], refresh: this.props.refresh },
          function (result) {
            var func = _this3.props.abi.find(function (f) {
              return f.name === _this3.props.method;
            });
            var decodedResult = _emeraldJs.contracts.dataToParams(func, result);
            return _react2.default.createElement(
              ContractCallContext.Provider,
              { value: decodedResult },
              _react2.default.createElement(
                ContractCallContext.Consumer,
                null,
                _this3.props.children
              )
            );
          }
        );
      }
    }]);

    return ContractProvider;
  }(_react2.default.Component);

  ContractProvider.propTypes = {
    method: _propTypes2.default.string.isRequired,
    params: _propTypes2.default.array,
    abi: _propTypes2.default.object.isRequired,
    address: _propTypes2.default.string.isRequired,
    refresh: _propTypes2.default.number
  };
  ContractProvider.defaultProps = {
    method: null,
    params: null,
    abi: null,
    refresh: null
  };
  exports.default = ContractProvider;
});