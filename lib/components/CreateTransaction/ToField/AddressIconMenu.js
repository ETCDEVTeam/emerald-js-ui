(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', '@material-ui/core', '../../../icons3', './AddressIconMenuItem'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('@material-ui/core'), require('../../../icons3'), require('./AddressIconMenuItem'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.core, global.icons3, global.AddressIconMenuItem);
    global.AddressIconMenu = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _core, _icons, _AddressIconMenuItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _AddressIconMenuItem2 = _interopRequireDefault(_AddressIconMenuItem);

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

  var AddressIconMenu = function (_React$Component) {
    _inherits(AddressIconMenu, _React$Component);

    function AddressIconMenu() {
      _classCallCheck(this, AddressIconMenu);

      var _this = _possibleConstructorReturn(this, (AddressIconMenu.__proto__ || Object.getPrototypeOf(AddressIconMenu)).call(this));

      _this.onChange = _this.onChange.bind(_this);
      _this.onClick = _this.onClick.bind(_this);
      _this.onRequestChange = _this.onRequestChange.bind(_this);
      _this.renderAddresses = _this.renderAddresses.bind(_this);
      _this.state = {};
      return _this;
    }

    _createClass(AddressIconMenu, [{
      key: 'onChange',
      value: function onChange(address) {
        this.setMenuOpen(false);
        this.props.onChange(address);
      }
    }, {
      key: 'onRequestChange',
      value: function onRequestChange(status) {
        this.setMenuOpen(status);
      }
    }, {
      key: 'onClick',
      value: function onClick() {
        this.setState({ menuOpen: true });
      }
    }, {
      key: 'setMenuOpen',
      value: function setMenuOpen(status) {
        this.setState({ menuOpen: status });
      }
    }, {
      key: 'renderAddresses',
      value: function renderAddresses() {
        var _this2 = this;

        if (this.props.addressBookAddresses.length === 0) {
          return _react2.default.createElement(_core.MenuItem, {
            onClick: this.props.onEmptyAddressBookClick,
            primaryText: 'Click to create an address book entry'
          });
        }

        return this.props.addressBookAddresses.map(function (address) {
          return _react2.default.createElement(_AddressIconMenuItem2.default, { address: address, onChange: _this2.onChange });
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          _core.IconMenu,
          {
            anchorOrigin: { horizontal: 'right', vertical: 'top' },
            targetOrigin: { horizontal: 'right', vertical: 'top' },
            iconButtonElement: _react2.default.createElement(_icons.Book, null),
            open: this.state.menuOpen,
            onClick: this.onClick,
            useLayerForClickAway: false,
            onRequestChange: this.onRequestChange
          },
          this.renderAddresses()
        );
      }
    }]);

    return AddressIconMenu;
  }(_react2.default.Component);

  AddressIconMenu.propTypes = {
    addressBookAddresses: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
    onEmptyAddressBookClick: _propTypes2.default.func.isRequired,
    onChange: _propTypes2.default.func.isRequired
  };
  exports.default = AddressIconMenu;
});