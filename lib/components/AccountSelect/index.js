(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', '@material-ui/core/styles', '@material-ui/core/List', '@material-ui/core/ListItem', '@material-ui/core/ListItemText', '@material-ui/core/MenuItem', '@material-ui/core/Menu', '../Account'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('@material-ui/core/styles'), require('@material-ui/core/List'), require('@material-ui/core/ListItem'), require('@material-ui/core/ListItemText'), require('@material-ui/core/MenuItem'), require('@material-ui/core/Menu'), require('../Account'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.styles, global.List, global.ListItem, global.ListItemText, global.MenuItem, global.Menu, global.Account);
    global.index = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _styles, _List, _ListItem, _ListItemText, _MenuItem, _Menu, _Account) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _List2 = _interopRequireDefault(_List);

  var _ListItem2 = _interopRequireDefault(_ListItem);

  var _ListItemText2 = _interopRequireDefault(_ListItemText);

  var _MenuItem2 = _interopRequireDefault(_MenuItem);

  var _Menu2 = _interopRequireDefault(_Menu);

  var _Account2 = _interopRequireDefault(_Account);

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
      root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        cursor: 'pointer'
      }
    };
  };

  var options = ['0x00asdfasdhfhasdfhashdj03401340030340s0dr0asdf0', '0x01a09sd0f01350ds0adf0', '0x030asd0fas013400134013401340134031013401340', '0x040r130r130r130fafw0ef0w'];

  var SimpleListMenu = function (_React$Component) {
    _inherits(SimpleListMenu, _React$Component);

    function SimpleListMenu() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, SimpleListMenu);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SimpleListMenu.__proto__ || Object.getPrototypeOf(SimpleListMenu)).call.apply(_ref, [this].concat(args))), _this), _this.button = null, _this.state = {
        anchorEl: null,
        selectedIndex: 1
      }, _this.handleClickListItem = function (event) {
        _this.setState({ anchorEl: event.currentTarget });
      }, _this.handleMenuItemClick = function (event, index) {
        _this.setState({ selectedIndex: index, anchorEl: null });
      }, _this.handleClose = function () {
        _this.setState({ anchorEl: null });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SimpleListMenu, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var classes = this.props.classes;
        var anchorEl = this.state.anchorEl;


        return _react2.default.createElement(
          'div',
          { className: classes.root },
          _react2.default.createElement(_Account2.default, {
            identity: true,
            onClick: this.handleClickListItem,
            address: options[this.state.selectedIndex],
            addressWidth: '200px'
          }),
          _react2.default.createElement(
            _Menu2.default,
            {
              id: 'lock-menu',
              anchorEl: anchorEl,
              open: Boolean(anchorEl),
              onClose: this.handleClose
            },
            options.map(function (option, index) {
              return _react2.default.createElement(
                _MenuItem2.default,
                {
                  key: option,
                  selected: index === _this2.state.selectedIndex
                },
                _react2.default.createElement(_Account2.default, {
                  identity: true,
                  hideCopy: true,
                  address: option,
                  onClick: function onClick(event) {
                    return _this2.handleMenuItemClick(event, index);
                  }
                })
              );
            })
          )
        );
      }
    }]);

    return SimpleListMenu;
  }(_react2.default.Component);

  SimpleListMenu.propTypes = {
    classes: _propTypes2.default.object.isRequired
  };

  exports.default = (0, _styles.withStyles)(styles)(SimpleListMenu);
});