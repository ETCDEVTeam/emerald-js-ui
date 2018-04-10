(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'react-jss', 'material-ui', './styles'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('react-jss'), require('material-ui'), require('./styles'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactJss, global.materialUi, global.styles);
    global.Input = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _reactJss, _materialUi, _styles) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Input = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _reactJss2 = _interopRequireDefault(_reactJss);

  var _styles2 = _interopRequireDefault(_styles);

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

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
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

  var Input = exports.Input = function (_React$Component) {
    _inherits(Input, _React$Component);

    function Input() {
      _classCallCheck(this, Input);

      return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
    }

    _createClass(Input, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            value = _props.value,
            underlineShow = _props.underlineShow,
            className = _props.className,
            multiLine = _props.multiLine,
            rowsMax = _props.rowsMax,
            rows = _props.rows,
            disabled = _props.disabled,
            classes = _props.classes,
            other = _objectWithoutProperties(_props, ['value', 'underlineShow', 'className', 'multiLine', 'rowsMax', 'rows', 'disabled', 'classes']);

        var onChange = this.props.onChange;

        if (value) {
          return _react2.default.createElement(
            'div',
            { className: classes.container },
            _react2.default.createElement(_materialUi.TextField, _extends({
              disabled: disabled,
              multiLine: multiLine,
              rowsMax: rowsMax,
              rows: rows,
              className: className,
              underlineShow: underlineShow,
              fullWidth: true,
              onChange: onChange,
              value: value
            }, other))
          );
        };

        return _react2.default.createElement(
          'div',
          { className: classes.container },
          _react2.default.createElement(_materialUi.TextField, _extends({
            disabled: disabled,
            multiLine: multiLine,
            rowsMax: rowsMax,
            rows: rows,
            className: className,
            underlineShow: underlineShow,
            fullWidth: true,
            onChange: onChange
          }, other))
        );
      }
    }]);

    return Input;
  }(_react2.default.Component);

  Input.propTypes = {
    value: _propTypes2.default.string,
    underlineShow: _propTypes2.default.bool,
    className: _propTypes2.default.string,
    multiLine: _propTypes2.default.bool,
    rowsMax: _propTypes2.default.number,
    rows: _propTypes2.default.number,
    disabled: _propTypes2.default.bool
  };
  Input.defaultProps = {
    multiLine: false,
    rowsMax: 1,
    rows: 1,
    disabled: false,
    underlineShow: false
  };
  exports.default = (0, _reactJss2.default)(_styles2.default)(Input);
});