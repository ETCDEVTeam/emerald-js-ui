(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'material-ui'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('material-ui'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.materialUi);
    global.Checkbox = mod.exports;
  }
})(this, function (exports, _react, _materialUi) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Checkbox = undefined;

  var _react2 = _interopRequireDefault(_react);

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

  var styles = {
    icon: {
      checked: {
        marginRight: '10px',
        fill: '#47B04B'
      },
      unchecked: {
        marginRight: '10px',
        fill: '#747474'
      }
    },
    label: {
      checked: {
        color: '#47B04B'
      },
      unchecked: {
        color: '#747474'
      }
    }
  };

  /**
   * For now this is a wrapper around Material-UI Checkbox
   */

  var Checkbox = exports.Checkbox = function (_React$Component) {
    _inherits(Checkbox, _React$Component);

    function Checkbox(props) {
      _classCallCheck(this, Checkbox);

      var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

      _this.handleCheck = function (event, isInputChecked) {
        _this.setState({
          checked: isInputChecked
        });
        if (_this.props.onCheck) {
          _this.props.onCheck(event, isInputChecked);
        }
      };

      _this.state = {
        checked: props.checked
      };
      return _this;
    }

    _createClass(Checkbox, [{
      key: 'render',
      value: function render() {
        var checked = this.state.checked;
        var _props = this.props,
            label = _props.label,
            disabled = _props.disabled;

        var iconStyle = checked ? styles.icon.checked : styles.icon.unchecked;
        var labelStyle = checked ? styles.label.checked : styles.label.unchecked;
        return _react2.default.createElement(_materialUi.Checkbox, {
          checked: checked,
          disabled: disabled,
          iconStyle: iconStyle,
          labelStyle: labelStyle,
          label: label,
          onCheck: this.handleCheck
        });
      }
    }]);

    return Checkbox;
  }(_react2.default.Component);

  exports.default = Checkbox;
});