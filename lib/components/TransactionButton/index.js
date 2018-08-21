(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', '@material-ui/core/Button', 'qs'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('@material-ui/core/Button'), require('qs'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.Button, global.qs);
    global.index = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _Button, _qs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _Button2 = _interopRequireDefault(_Button);

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

  var TransactionButton = function (_React$Component) {
    _inherits(TransactionButton, _React$Component);

    function TransactionButton(props) {
      _classCallCheck(this, TransactionButton);

      var _this = _possibleConstructorReturn(this, (TransactionButton.__proto__ || Object.getPrototypeOf(TransactionButton)).call(this, props));

      _this.state = {
        transactionLink: _this.encodeURI(props.transaction)
      };
      return _this;
    }

    _createClass(TransactionButton, [{
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        if (prevProps.transaction !== this.props.transaction) {
          this.setState({
            transactionLink: this.encodeURI(this.props.transaction)
          });
        }
      }
    }, {
      key: 'encodeURI',
      value: function encodeURI(obj) {
        return 'ethereum:' + obj.to + '?' + qs.stringify(obj);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          _Button2.default,
          { href: this.state.transactionLink, variant: 'contained' },
          'Send Transaction'
        );
      }
    }]);

    return TransactionButton;
  }(_react2.default.Component);

  TransactionButton.propTypes = {
    transaction: _propTypes2.default.object
  };
  exports.default = TransactionButton;
});