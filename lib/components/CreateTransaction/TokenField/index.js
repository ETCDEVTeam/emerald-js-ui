(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', '@material-ui/core/styles', '@material-ui/core/Select', '@material-ui/core/Typography'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('@material-ui/core/styles'), require('@material-ui/core/Select'), require('@material-ui/core/Typography'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.styles, global.Select, global.Typography);
    global.index = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _styles, _Select, _Typography) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _Select2 = _interopRequireDefault(_Select);

  var _Typography2 = _interopRequireDefault(_Typography);

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
        paddingLeft: '20px'
      }
    };
  }

  var TokenField = function (_React$Component) {
    _inherits(TokenField, _React$Component);

    function TokenField() {
      _classCallCheck(this, TokenField);

      var _this = _possibleConstructorReturn(this, (TokenField.__proto__ || Object.getPrototypeOf(TokenField)).call(this));

      _this.onChangeToken = _this.onChangeToken.bind(_this);
      return _this;
    }

    _createClass(TokenField, [{
      key: 'onChangeToken',
      value: function onChangeToken(event, value) {
        this.props.onChangeToken(this.props.tokenSymbols[value]);
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
            'Token'
          ),
          _react2.default.createElement(
            _Select2.default,
            { value: this.props.selectedToken, onChange: this.onChangeToken },
            this.props.tokenSymbols.map(function (toke) {
              return _react2.default.createElement(
                'div',
                null,
                'foo',
                toke
              );
            })
          ),
          _react2.default.createElement(
            'div',
            { className: this.props.classes.root },
            this.props.balance,
            ' ',
            this.props.selectedToken,
            '   /   ',
            this.props.fiatBalance,
            ' ',
            this.props.currency
          )
        );
      }
    }]);

    return TokenField;
  }(_react2.default.Component);

  TokenField.propTypes = {
    onChangeToken: _propTypes2.default.func.isRequired,
    selectedToken: _propTypes2.default.string.isRequired,
    tokenSymbols: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
    balance: _propTypes2.default.string.isRequired,
    fiatBalance: _propTypes2.default.string.isRequired,
    currency: _propTypes2.default.string.isRequired,
    classes: _propTypes2.default.object.isRequired
  };
  exports.default = (0, _styles.withStyles)(getStyles)(TokenField);
});