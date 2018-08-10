(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', '@material-ui/core/TextField', '@material-ui/core/Button'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('@material-ui/core/TextField'), require('@material-ui/core/Button'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.TextField, global.Button);
    global.index = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _TextField, _Button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _TextField2 = _interopRequireDefault(_TextField);

  var _Button2 = _interopRequireDefault(_Button);

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

  var AmountField = function (_React$Component) {
    _inherits(AmountField, _React$Component);

    function AmountField() {
      _classCallCheck(this, AmountField);

      var _this = _possibleConstructorReturn(this, (AmountField.__proto__ || Object.getPrototypeOf(AmountField)).call(this));

      _this.inputStyles = {
        width: '200px',
        marginRight: '10px'
      };
      _this.buttonStyles = {
        height: '30px',
        minWidth: '35px',
        lineHeight: '30px'
      };
      _this.buttonLabelStyles = {
        fontSize: '11px'
      };

      _this.onChangeAmount = _this.onChangeAmount.bind(_this);
      _this.onClickMax = _this.onClickMax.bind(_this);
      _this.state = { errorText: null };
      return _this;
    }

    _createClass(AmountField, [{
      key: 'onChangeAmount',
      value: function onChangeAmount(event, amount) {
        this.props.onChangeAmount(amount);

        if (!amount && amount !== 0) {
          this.setState({ errorText: 'Required' });
        } else {
          this.setState({ errorText: null });
        }
      }
    }, {
      key: 'onClickMax',
      value: function onClickMax() {
        this.props.onChangeAmount(this.props.balance);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(_TextField2.default, {
            label: 'Amount',
            type: 'number',
            containerStyle: this.inputStyles,
            min: '0',
            max: this.props.balance,
            value: this.props.amount,
            onChange: this.onChangeAmount,
            errorText: this.state.errorText
          }),
          _react2.default.createElement(_Button2.default, {
            style: this.buttonStyles,
            labelStyle: this.buttonLabelStyles,
            primary: true,
            label: 'MAX',
            onClick: this.onClickMax
          })
        );
      }
    }]);

    return AmountField;
  }(_react2.default.Component);

  AmountField.propTypes = {
    onChangeAmount: _propTypes2.default.func.isRequired,
    amount: _propTypes2.default.string.isRequired,
    balance: _propTypes2.default.string.isRequired
  };
  exports.default = AmountField;
});