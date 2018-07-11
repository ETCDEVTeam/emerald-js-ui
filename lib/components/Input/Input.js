(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-required-if', 'prop-types', '@material-ui/core/TextField', '@material-ui/core/InputAdornment'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-required-if'), require('prop-types'), require('@material-ui/core/TextField'), require('@material-ui/core/InputAdornment'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactRequiredIf, global.propTypes, global.TextField, global.InputAdornment);
    global.Input = mod.exports;
  }
})(this, function (exports, _react, _reactRequiredIf, _propTypes, _TextField, _InputAdornment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Input = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _reactRequiredIf2 = _interopRequireDefault(_reactRequiredIf);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _TextField2 = _interopRequireDefault(_TextField);

  var _InputAdornment2 = _interopRequireDefault(_InputAdornment);

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

  var getErrorProps = function getErrorProps(_ref) {
    var errorText = _ref.errorText;

    var propsToAdd = {};

    if (errorText) {
      propsToAdd.helperText = errorText;
      propsToAdd.error = true;
    }

    return propsToAdd;
  };

  var getAdornments = function getAdornments(_ref2) {
    var rightIcon = _ref2.rightIcon,
        leftIcon = _ref2.leftIcon;

    var adornments = {};

    if (leftIcon) {
      adornments.startAdornment = _react2.default.createElement(
        _InputAdornment2.default,
        null,
        ' ',
        leftIcon,
        ' '
      );
    }

    if (rightIcon) {
      adornments.endAdornment = _react2.default.createElement(
        _InputAdornment2.default,
        null,
        rightIcon
      );
    }

    return adornments;
  };

  var getInputProps = function getInputProps(props) {
    return {
      InputProps: _extends({}, getAdornments(props))
    };
  };

  var getMultilineProps = function getMultilineProps(_ref3) {
    var multiline = _ref3.multiline,
        rows = _ref3.rows,
        rowsMax = _ref3.rowsMax;

    var props = { multiline: multiline };

    if (multiline) {
      props = { rows: rows, rowsMax: rowsMax };
    }

    return props;
  };

  var Input = exports.Input = function (_React$Component) {
    _inherits(Input, _React$Component);

    function Input() {
      _classCallCheck(this, Input);

      return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
    }

    _createClass(Input, [{
      key: 'render',
      value: function render() {
        var multilineProps = getMultilineProps(this.props);
        var errorProps = getErrorProps(this.props);
        var inputProps = getInputProps(this.props);

        return _react2.default.createElement(_TextField2.default, _extends({
          value: this.props.value,
          fullWidth: true,
          rows: this.props.rows,
          rowsMax: this.props.rowsMax,
          disabled: this.props.disabled,
          placeholder: this.props.placeholder,
          onChange: this.props.onChange
        }, inputProps, errorProps, multilineProps));
      }
    }]);

    return Input;
  }(_react2.default.Component);

  Input.propTypes = {
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    multiline: _propTypes2.default.bool,
    rowsMax: (0, _reactRequiredIf2.default)(_propTypes2.default.number, function (props) {
      return props.multiline;
    }),
    rows: (0, _reactRequiredIf2.default)(_propTypes2.default.number, function (props) {
      return props.multiline;
    }),
    disabled: _propTypes2.default.bool,
    rightIcon: _propTypes2.default.element,
    leftIcon: _propTypes2.default.element,
    placeholder: _propTypes2.default.string,
    onChange: _propTypes2.default.func
  };
  Input.defaultProps = {
    value: '',
    multiline: false,
    rowsMax: null,
    rows: null,
    disabled: false,
    rightIcon: null,
    leftIcon: null,
    placeholder: '',
    onChange: function onChange() {}
  };
  exports.default = Input;
});