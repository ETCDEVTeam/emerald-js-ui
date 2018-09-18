(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'qs'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('qs'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.qs);
    global.TransactionUri = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _qs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var qs = _interopRequireWildcard(_qs);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

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

  var TransactionUri = function (_React$Component) {
    _inherits(TransactionUri, _React$Component);

    function TransactionUri() {
      _classCallCheck(this, TransactionUri);

      return _possibleConstructorReturn(this, (TransactionUri.__proto__ || Object.getPrototypeOf(TransactionUri)).apply(this, arguments));
    }

    _createClass(TransactionUri, [{
      key: 'encodeURI',
      value: function encodeURI(obj) {
        return 'ethereum:' + obj.to + '?' + qs.stringify(obj);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            to = _props.to,
            from = _props.from,
            value = _props.value,
            gas = _props.gas,
            method = _props.method,
            params = _props.params;

        var transaction = {
          to: to,
          from: from,
          value: value,
          gas: gas
        };

        if (method && params) {
          transaction = _extends({}, transaction, {
            mode: 'contract_function',
            functionSignature: this.props.abi.find(function (item) {
              return item.name === method;
            }),
            argsDefaults: params
          });
        }
        return this.props.children(this.encodeURI(transaction));
      }
    }]);

    return TransactionUri;
  }(_react2.default.Component);

  TransactionUri.propTypes = {
    transaction: _propTypes2.default.object.isRequired,
    abi: _propTypes2.default.object.isRequired
  };
  exports.default = TransactionUri;
});