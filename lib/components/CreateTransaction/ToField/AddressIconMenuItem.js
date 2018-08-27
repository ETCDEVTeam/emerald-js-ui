(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', '@material-ui/core', '../../Account/'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('@material-ui/core'), require('../../Account/'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.core, global.Account);
    global.AddressIconMenuItem = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _core, _Account) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

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

  var AddressIconMenuItem = function (_React$Component) {
    _inherits(AddressIconMenuItem, _React$Component);

    function AddressIconMenuItem() {
      var _ref;

      _classCallCheck(this, AddressIconMenuItem);

      for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
        props[_key] = arguments[_key];
      }

      var _this = _possibleConstructorReturn(this, (_ref = AddressIconMenuItem.__proto__ || Object.getPrototypeOf(AddressIconMenuItem)).call.apply(_ref, [this].concat(props)));

      _this.onClick = _this.onClick.bind(_this);
      return _this;
    }

    _createClass(AddressIconMenuItem, [{
      key: 'onClick',
      value: function onClick() {
        this.props.onChange(this.props.address);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(_core.MenuItem, {
          onClick: this.onClick,
          style: {
            paddingBottom: '5px', paddingTop: '5px', minHeight: 'auto', height: 'auto'
          },
          primaryText: _react2.default.createElement(_Account2.default, { identityProps: { size: 30 }, addr: this.props.address, identity: true, hideCopy: true })
        });
      }
    }]);

    return AddressIconMenuItem;
  }(_react2.default.Component);

  AddressIconMenuItem.muiName = 'MenuItem';
  AddressIconMenuItem.propTypes = {
    onChange: _propTypes2.default.func.isRequired,
    address: _propTypes2.default.string.isRequired
  };
  exports.default = AddressIconMenuItem;
});