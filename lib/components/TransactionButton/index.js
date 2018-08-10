(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', '@material-ui/core/Button', 'ethereum-qr-code'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('@material-ui/core/Button'), require('ethereum-qr-code'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.Button, global.ethereumQrCode);
    global.index = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _Button, _ethereumQrCode) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _Button2 = _interopRequireDefault(_Button);

  var _ethereumQrCode2 = _interopRequireDefault(_ethereumQrCode);

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

  var qr = new _ethereumQrCode2.default();

  var TransactionButton = function (_React$Component) {
    _inherits(TransactionButton, _React$Component);

    function TransactionButton() {
      _classCallCheck(this, TransactionButton);

      var _this = _possibleConstructorReturn(this, (TransactionButton.__proto__ || Object.getPrototypeOf(TransactionButton)).call(this));

      _this.handleClick = _this.handleClick.bind(_this);
      return _this;
    }

    _createClass(TransactionButton, [{
      key: 'handleClick',
      value: function handleClick() {
        window.open(qr.toAddressString(this.props.transaction));
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          _Button2.default,
          { variant: 'contained', onClick: this.handleClick },
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