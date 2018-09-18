(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', '@material-ui/core/styles', '@material-ui/core/List', '@material-ui/core/ListItem', '@material-ui/core/ListItemText', '@material-ui/core/MenuItem', '@material-ui/core/Menu', '@material-ui/core/Typography', '../Account'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('@material-ui/core/styles'), require('@material-ui/core/List'), require('@material-ui/core/ListItem'), require('@material-ui/core/ListItemText'), require('@material-ui/core/MenuItem'), require('@material-ui/core/Menu'), require('@material-ui/core/Typography'), require('../Account'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.styles, global.List, global.ListItem, global.ListItemText, global.MenuItem, global.Menu, global.Typography, global.Account);
    global.index = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _styles, _List, _ListItem, _ListItemText, _MenuItem, _Menu, _Typography, _Account) {
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

  var _Typography2 = _interopRequireDefault(_Typography);

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

  var SimpleListMenu = function (_React$Component) {
    _inherits(SimpleListMenu, _React$Component);

    function SimpleListMenu(props) {
      _classCallCheck(this, SimpleListMenu);

      var _this = _possibleConstructorReturn(this, (SimpleListMenu.__proto__ || Object.getPrototypeOf(SimpleListMenu)).call(this, props));

      _this.button = null;

      _this.handleClickListItem = function (event) {
        _this.setState({ anchorEl: event.currentTarget });
      };

      _this.handleMenuItemClick = function (event, index) {
        _this.setState({ selectedIndex: index, anchorEl: null });
        _this.props.onChange(_this.props.accounts[index]);
      };

      _this.handleClose = function () {
        _this.setState({ anchorEl: null });
      };

      var selectedIndex = props.accounts.indexOf(props.account);
      _this.state = {
        anchorEl: null,
        selectedIndex: selectedIndex >= 0 ? selectedIndex : 0
      };
      _this.renderAccounts = _this.renderAccounts.bind(_this);
      return _this;
    }

    _createClass(SimpleListMenu, [{
      key: 'renderAccounts',
      value: function renderAccounts() {
        var _this2 = this;

        return this.props.accounts.map(function (account, index) {
          return _react2.default.createElement(
            _MenuItem2.default,
            {
              key: account,
              selected: index === _this2.state.selectedIndex
            },
            _react2.default.createElement(_Account2.default, {
              identity: true,
              hideCopy: true,
              address: account,
              onClick: function onClick(event) {
                return _this2.handleMenuItemClick(event, index);
              }
            })
          );
        });
      }
    }, {
      key: 'renderSelected',
      value: function renderSelected() {
        if (!this.props.selectedAccount) {
          return _react2.default.createElement(
            _Typography2.default,
            { onClick: this.handleClickListItem },
            'Select Account'
          );
        }
        return _react2.default.createElement(_Account2.default, {
          identity: true,
          onClick: this.handleClickListItem,
          address: this.props.accounts[this.state.selectedIndex],
          addressWidth: '200px'
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var classes = this.props.classes;
        var anchorEl = this.state.anchorEl;


        return _react2.default.createElement(
          'div',
          { className: classes.root },
          this.renderSelected(),
          _react2.default.createElement(
            _Menu2.default,
            {
              id: 'lock-menu',
              anchorEl: anchorEl,
              open: Boolean(anchorEl),
              onClose: this.handleClose
            },
            this.renderAccounts()
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