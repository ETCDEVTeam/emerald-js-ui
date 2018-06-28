(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', '@material-ui/core/styles', '@material-ui/core/Toolbar', '@material-ui/core/Typography', '@material-ui/core/IconButton', '@material-ui/core/Divider', '../Card'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('@material-ui/core/styles'), require('@material-ui/core/Toolbar'), require('@material-ui/core/Typography'), require('@material-ui/core/IconButton'), require('@material-ui/core/Divider'), require('../Card'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.styles, global.Toolbar, global.Typography, global.IconButton, global.Divider, global.Card);
    global.Page = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _styles, _Toolbar, _Typography, _IconButton, _Divider, _Card) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Page = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _Toolbar2 = _interopRequireDefault(_Toolbar);

  var _Typography2 = _interopRequireDefault(_Typography);

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

  var styles = function styles(theme) {
    return {
      toolbar: {
        background: 'transparent',
        height: '100px',
        flex: 1,
        justifyContent: 'center'
      },
      childWrapper: {
        padding: '50px'
      }
    };
  };

  var getIconWithButton = function getIconWithButton(icon) {
    if (!icon) {
      return _react2.default.createElement('div', null);
    }
    return _react2.default.createElement(
      _IconButton2.default,
      null,
      icon
    );
  };

  var Page = exports.Page = function (_React$Component) {
    _inherits(Page, _React$Component);

    function Page() {
      _classCallCheck(this, Page);

      return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
    }

    _createClass(Page, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            title = _props.title,
            leftIcon = _props.leftIcon,
            rightIcon = _props.rightIcon,
            classes = _props.classes;

        return _react2.default.createElement(
          _Card2.default,
          null,
          _react2.default.createElement(
            _Toolbar2.default,
            { className: classes.toolbar },
            getIconWithButton(leftIcon),
            _react2.default.createElement(
              _Typography2.default,
              { variant: 'title', color: 'inherit' },
              title
            ),
            getIconWithButton(rightIcon)
          ),
          _react2.default.createElement(_Divider2.default, null),
          _react2.default.createElement(
            'div',
            { className: classes.childWrapper },
            this.props.children
          )
        );
      }
    }]);

    return Page;
  }(_react2.default.Component);

  Page.propTypes = {
    title: _propTypes2.default.string.isRequired,
    classes: _propTypes2.default.object.isRequired,
    children: _propTypes2.default.element.isRequired,
    rightIcon: _propTypes2.default.element,
    leftIcon: _propTypes2.default.element
  };
  Page.defaultProps = {
    rightIcon: null,
    leftIcon: null
  };
  exports.default = (0, _styles.withStyles)(styles)(Page);
});