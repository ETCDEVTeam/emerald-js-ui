(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'emerald-js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('emerald-js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.emeraldJs);
    global.VaultJsonRpcProvider = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _emeraldJs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.VaultJsonRpcProvider = exports.VaultJsonRpcContext = undefined;

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

  var VaultJsonRpcContext = exports.VaultJsonRpcContext = _react2.default.createContext();

  var VaultJsonRpcProvider = exports.VaultJsonRpcProvider = function (_React$Component) {
    _inherits(VaultJsonRpcProvider, _React$Component);

    function VaultJsonRpcProvider(props) {
      _classCallCheck(this, VaultJsonRpcProvider);

      var _this = _possibleConstructorReturn(this, (VaultJsonRpcProvider.__proto__ || Object.getPrototypeOf(VaultJsonRpcProvider)).call(this, props));

      _this.state = {
        url: props.url || 'http://127.0.0.1:1920',
        changeUrl: function changeUrl(url) {
          _this.setState(_extends({}, _this.state, {
            url: url
          }));
        }
      };
      return _this;
    }

    _createClass(VaultJsonRpcProvider, [{
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
          VaultJsonRpcContext.Provider,
          { value: this.state },
          this.props.children
        );
      }
    }]);

    return VaultJsonRpcProvider;
  }(_react2.default.Component);
});