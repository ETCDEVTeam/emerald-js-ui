(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', '@material-ui/core/Select'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('@material-ui/core/Select'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.Select);
    global.index = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _Select) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _Select2 = _interopRequireDefault(_Select);

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

  var FromField = function (_React$Component) {
    _inherits(FromField, _React$Component);

    function FromField() {
      _classCallCheck(this, FromField);

      var _this = _possibleConstructorReturn(this, (FromField.__proto__ || Object.getPrototypeOf(FromField)).call(this));

      _this.inputStyles = {
        flexGrow: 5
      };

      _this.onChangeAccount = _this.onChangeAccount.bind(_this);
      return _this;
    }

    _createClass(FromField, [{
      key: 'onChangeAccount',
      value: function onChangeAccount(list, index) {
        this.props.onChangeAccount(list[index]);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'span',
            null,
            'From'
          ),
          _react2.default.createElement(_Select2.default, {
            onChangeAccount: this.onChangeAccount,
            selectedAccount: this.props.selectedAccount,
            accounts: this.props.accounts,
            containerStyle: this.inputStyles
          })
        );
      }
    }]);

    return FromField;
  }(_react2.default.Component);

  FromField.propTypes = {
    onChangeAccount: _propTypes2.default.func.isRequired,
    selectedAccount: _propTypes2.default.string.isRequired
  };
  exports.default = FromField;
});