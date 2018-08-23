(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', '@material-ui/core/Typography', '@material-ui/core/Input', '@material-ui/core/styles'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('@material-ui/core/Typography'), require('@material-ui/core/Input'), require('@material-ui/core/styles'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.Typography, global.Input, global.styles);
    global.index = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _Typography, _Input, _styles) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _Typography2 = _interopRequireDefault(_Typography);

  var _Input2 = _interopRequireDefault(_Input);

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

  function getStyles(muiTheme) {
    return {
      root: {
        fontFamily: muiTheme.fontFamily,
        color: muiTheme.palette.secondaryTextColor,
        wordSpacing: '3px',
        letterSpacing: '1px',
        fontWeight: '200',
        paddingLeft: '20px',
        fontSize: '14px'
      }
    };
  }

  var GasLimitField = function (_React$Component) {
    _inherits(GasLimitField, _React$Component);

    function GasLimitField() {
      _classCallCheck(this, GasLimitField);

      var _this = _possibleConstructorReturn(this, (GasLimitField.__proto__ || Object.getPrototypeOf(GasLimitField)).call(this));

      _this.onChangeGasLimit = _this.onChangeGasLimit.bind(_this);
      return _this;
    }

    _createClass(GasLimitField, [{
      key: 'onChangeGasLimit',
      value: function onChangeGasLimit(event, amount) {
        this.props.onChangeGasLimit(amount);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            _Typography2.default,
            null,
            'Gas Limit'
          ),
          _react2.default.createElement(_Input2.default, {
            type: 'number',
            value: this.props.gasLimit,
            min: '21000',
            onChange: this.onChangeGasLimit
          }),
          _react2.default.createElement(
            'div',
            { className: this.props.classes.root },
            this.props.txFee,
            ' ETC   /   ',
            this.props.txFeeFiat,
            ' ',
            this.props.currency
          )
        );
      }
    }]);

    return GasLimitField;
  }(_react2.default.Component);

  GasLimitField.propTypes = {
    onChangeGasLimit: _propTypes2.default.func.isRequired,
    txFee: _propTypes2.default.string.isRequired,
    token: _propTypes2.default.string.isRequired,
    gasLimit: _propTypes2.default.string.isRequired,
    txFeeFiat: _propTypes2.default.string.isRequired,
    currency: _propTypes2.default.string.isRequired,
    muiTheme: _propTypes2.default.string.isRequired,
    classes: _propTypes2.default.object.isRequired
  };
  exports.default = (0, _styles.withStyles)(getStyles)(GasLimitField);
});