(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'material-ui/styles/muiThemeable', 'material-ui/Toolbar', 'material-ui/IconButton', 'material-ui/Divider', '../Card'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('material-ui/styles/muiThemeable'), require('material-ui/Toolbar'), require('material-ui/IconButton'), require('material-ui/Divider'), require('../Card'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.muiThemeable, global.Toolbar, global.IconButton, global.Divider, global.Card);
    global.Page = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _muiThemeable, _Toolbar, _IconButton, _Divider, _Card) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Page = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

  var _IconButton2 = _interopRequireDefault(_IconButton);

  var _Divider2 = _interopRequireDefault(_Divider);

  var _Card2 = _interopRequireDefault(_Card);

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
      wrapper: {
        border: '1px solid ' + muiTheme.palette.borderColor,
        backgroundColor: muiTheme.palette.alternateTextColor
      },
      toolbar: {
        background: 'transparent',
        height: '100px'
      }
    };
  }

  var Page = exports.Page = function (_React$Component) {
    _inherits(Page, _React$Component);

    function Page() {
      _classCallCheck(this, Page);

      return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
    }

    _createClass(Page, [{
      key: 'getIconWithButton',
      value: function getIconWithButton(icon) {
        if (!icon) {
          return _react2.default.createElement('div', null);
        }
        return _react2.default.createElement(
          _Toolbar.ToolbarGroup,
          null,
          _react2.default.createElement(
            _IconButton2.default,
            null,
            icon
          )
        );
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            muiTheme = _props.muiTheme,
            title = _props.title,
            leftIcon = _props.leftIcon,
            rightIcon = _props.rightIcon;

        var styles = getStyles(muiTheme);
        return _react2.default.createElement(
          _Card2.default,
          { style: styles.wrapper },
          _react2.default.createElement(
            _Toolbar.Toolbar,
            { style: styles.toolbar },
            this.getIconWithButton(leftIcon),
            _react2.default.createElement(_Toolbar.ToolbarTitle, { style: { lineHeight: styles.toolbar.height }, text: title }),
            this.getIconWithButton(rightIcon)
          ),
          _react2.default.createElement(_Divider2.default, null),
          this.props.children
        );
      }
    }]);

    return Page;
  }(_react2.default.Component);

  Page.propTypes = {
    title: _propTypes2.default.string.isRequired
  };
  exports.default = (0, _muiThemeable2.default)()(Page);
});