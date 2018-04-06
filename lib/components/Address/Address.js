(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'copy-to-clipboard', 'react-jss', 'material-ui/styles/muiThemeable', '../../icons2', './styles'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('copy-to-clipboard'), require('react-jss'), require('material-ui/styles/muiThemeable'), require('../../icons2'), require('./styles'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.copyToClipboard, global.reactJss, global.muiThemeable, global.icons2, global.styles);
    global.Address = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _copyToClipboard, _reactJss, _muiThemeable, _icons, _styles) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Address = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _copyToClipboard2 = _interopRequireDefault(_copyToClipboard);

  var _reactJss2 = _interopRequireDefault(_reactJss);

  var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

  var _styles2 = _interopRequireDefault(_styles);

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

  var Address = exports.Address = function (_React$Component) {
    _inherits(Address, _React$Component);

    function Address(props) {
      _classCallCheck(this, Address);

      var _this = _possibleConstructorReturn(this, (Address.__proto__ || Object.getPrototypeOf(Address)).call(this, props));

      _this.state = {
        showCheck: props.showCheck
      };
      return _this;
    }

    _createClass(Address, [{
      key: 'onCopyClick',
      value: function onCopyClick() {
        var _this2 = this;

        (0, _copyToClipboard2.default)(this.props.id);
        if (this.props.onCopyClick) {
          this.props.onCopyClick(this.props.id);
        }
        this.setState({
          showCheck: true
        });
        setTimeout(function () {
          _this2.setState({
            showCheck: false
          });
        }, 1000);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            classes = _props.classes,
            id = _props.id,
            shortened = _props.shortened,
            style = _props.style,
            onClick = _props.onClick,
            muiTheme = _props.muiTheme;


        if (!id) {
          return null;
        }

        var icons = null;
        if (!shortened) {
          icons = _react2.default.createElement(_icons.Copy, {
            onClick: this.onCopyClick.bind(this),
            color: classes.container.color,
            className: classes.copyIcon
          });
        }
        if (this.state.showCheck) {
          icons = _react2.default.createElement(_icons.CheckCircle, { color: muiTheme.palette.primary1Color });
        }

        var sanitizedId = id.startsWith('0x') ? id : '0x' + id;
        var value = shortened ? sanitizedId.substring(0, 7) + '...' + sanitizedId.substring(sanitizedId.length - 6, sanitizedId.length) : sanitizedId;

        return _react2.default.createElement(
          'div',
          { className: classes.container, style: style },
          _react2.default.createElement(
            'div',
            { onClick: onClick, className: classes.address },
            value
          ),
          icons && _react2.default.createElement(
            'div',
            null,
            icons
          )
        );
      }
    }]);

    return Address;
  }(_react2.default.Component);

  Address.propTypes = {
    onClick: _propTypes2.default.func,
    onCopyClick: _propTypes2.default.func,
    id: _propTypes2.default.string.isRequired,
    shortened: _propTypes2.default.bool,
    classes: _propTypes2.default.object.isRequired
  };

  Address.defaultProps = {
    shortened: false,
    showCheck: false
  };

  exports.default = (0, _muiThemeable2.default)()((0, _reactJss2.default)(_styles2.default)(Address));
});