(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', '@material-ui/core/styles'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('@material-ui/core/styles'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.styles);
    global.index = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _styles) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

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

  var styles = function styles(theme) {
    return {
      toggledIcon: {
        cursor: 'pointer',
        marginLeft: '4px'
      }
    };
  };

  var ToggledIconButton = function (_React$Component) {
    _inherits(ToggledIconButton, _React$Component);

    function ToggledIconButton() {
      _classCallCheck(this, ToggledIconButton);

      var _this = _possibleConstructorReturn(this, (ToggledIconButton.__proto__ || Object.getPrototypeOf(ToggledIconButton)).call(this));

      _this.state = { toggled: false };
      _this.toggle = _this.toggle.bind(_this);
      _this.handleClick = _this.handleClick.bind(_this);
      return _this;
    }

    _createClass(ToggledIconButton, [{
      key: 'toggle',
      value: function toggle() {
        this.setState({ toggled: !this.state.toggled });
      }
    }, {
      key: 'handleClick',
      value: function handleClick() {
        this.props.onClick();
        this.setState({ toggled: true });

        setTimeout(this.toggle, this.props.toggleDuration);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            classes = _props.classes,
            toggledIcon = _props.toggledIcon,
            icon = _props.icon;
        var toggled = this.state.toggled;


        return _react2.default.createElement(
          'div',
          { className: classes.toggledIcon, onClick: this.handleClick },
          this.state.toggled ? toggledIcon : icon
        );
      }
    }]);

    return ToggledIconButton;
  }(_react2.default.Component);

  ToggledIconButton.propTypes = {
    onClick: _propTypes2.default.func.isRequired,
    icon: _propTypes2.default.node.isRequired,
    toggledIcon: _propTypes2.default.node.isRequired,
    toggleDuration: _propTypes2.default.number,
    classes: _propTypes2.default.object.isRequired
  };
  ToggledIconButton.defaultProps = {
    toggleDuration: 1000
  };
  exports.default = (0, _styles.withStyles)(styles)(ToggledIconButton);
});