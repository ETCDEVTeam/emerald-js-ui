(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', '@material-ui/core/styles', '@material-ui/core/Toolbar', '@material-ui/core/AppBar', '@material-ui/core/Typography', '@material-ui/core/Button', '@material-ui/core/Select'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('@material-ui/core/styles'), require('@material-ui/core/Toolbar'), require('@material-ui/core/AppBar'), require('@material-ui/core/Typography'), require('@material-ui/core/Button'), require('@material-ui/core/Select'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.styles, global.Toolbar, global.AppBar, global.Typography, global.Button, global.Select);
    global.AppBar = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _styles, _Toolbar, _AppBar, _Typography, _Button, _Select) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _Toolbar2 = _interopRequireDefault(_Toolbar);

  var _AppBar2 = _interopRequireDefault(_AppBar);

  var _Typography2 = _interopRequireDefault(_Typography);

  var _Button2 = _interopRequireDefault(_Button);

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

  var styles = function styles(theme) {
    return {
      title: {
        color: theme.palette.primary
      },
      flex: {
        flexGrow: 1
      },
      item: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: theme.spacing.unit * 3 + 'px',
        '&:last-child': {
          marginRight: '0px'
        }
      }
    };
  };

  var EmeraldAppBar = function (_React$Component) {
    _inherits(EmeraldAppBar, _React$Component);

    function EmeraldAppBar() {
      _classCallCheck(this, EmeraldAppBar);

      return _possibleConstructorReturn(this, (EmeraldAppBar.__proto__ || Object.getPrototypeOf(EmeraldAppBar)).apply(this, arguments));
    }

    _createClass(EmeraldAppBar, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            classes = _props.classes,
            title = _props.title,
            subtitle = _props.subtitle,
            balance = _props.balance,
            symbol = _props.symbol,
            fiatBalance = _props.fiatBalance,
            fiatSymbol = _props.fiatSymbol,
            blockNumber = _props.blockNumber;

        var children = this.props.children && this.props.children.length && this.props.children.length > 0 ? this.props.children : [this.props.children];

        return _react2.default.createElement(
          _AppBar2.default,
          { position: 'static', color: 'default' },
          _react2.default.createElement(
            _Toolbar2.default,
            null,
            _react2.default.createElement(
              _Typography2.default,
              { color: 'primary' },
              title
            ),
            '\xA0',
            _react2.default.createElement(
              _Typography2.default,
              { className: classes.flex },
              subtitle
            ),
            children.map(function (item, i) {
              return _react2.default.createElement(
                _Typography2.default,
                { key: i, className: classes.item },
                item
              );
            })
          )
        );
      }
    }]);

    return EmeraldAppBar;
  }(_react2.default.Component);

  EmeraldAppBar.propTypes = {};
  EmeraldAppBar.defaultProps = {};
  exports.default = (0, _styles.withStyles)(styles)(EmeraldAppBar);
});