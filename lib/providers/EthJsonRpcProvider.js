(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes);
    global.EthJsonRpcProvider = mod.exports;
  }
})(this, function (exports, _react, _propTypes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.EthJsonRpcProvider = exports.EthJsonRpcContext = undefined;

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

  var EthJsonRpcContext = exports.EthJsonRpcContext = _react2.default.createContext();

  var EthJsonRpcProvider = exports.EthJsonRpcProvider = function (_React$Component) {
    _inherits(EthJsonRpcProvider, _React$Component);

    function EthJsonRpcProvider(props) {
      _classCallCheck(this, EthJsonRpcProvider);

      var _this = _possibleConstructorReturn(this, (EthJsonRpcProvider.__proto__ || Object.getPrototypeOf(EthJsonRpcProvider)).call(this, props));

      _this.state = {
        url: props.url || 'https://web3.gastracker.io/',
        changeUrl: function changeUrl(url) {
          _this.setState(_extends({}, _this.state, {
            url: url
          }));
        }
      };
      return _this;
    }

    _createClass(EthJsonRpcProvider, [{
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        if (prevProps.url !== this.props.url) {
          this.setState(_extends({}, this.state, {
            url: this.props.url
          }));
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          EthJsonRpcContext.Provider,
          { value: this.state },
          this.props.children
        );
      }
    }]);

    return EthJsonRpcProvider;
  }(_react2.default.Component);
});