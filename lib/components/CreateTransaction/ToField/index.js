(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', '../FormLabel', '../../Input', '../../IdentityIcon', './AddressIconMenu'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('../FormLabel'), require('../../Input'), require('../../IdentityIcon'), require('./AddressIconMenu'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.FormLabel, global.Input, global.IdentityIcon, global.AddressIconMenu);
    global.index = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _FormLabel, _Input, _IdentityIcon, _AddressIconMenu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _FormLabel2 = _interopRequireDefault(_FormLabel);

  var _Input2 = _interopRequireDefault(_Input);

  var _IdentityIcon2 = _interopRequireDefault(_IdentityIcon);

  var _AddressIconMenu2 = _interopRequireDefault(_AddressIconMenu);

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

  var ToField = function (_React$Component) {
    _inherits(ToField, _React$Component);

    function ToField() {
      _classCallCheck(this, ToField);

      var _this = _possibleConstructorReturn(this, (ToField.__proto__ || Object.getPrototypeOf(ToField)).call(this));

      _this.inputStyles = {
        flexGrow: 5
      };

      _this.onChangeTo = _this.onChangeTo.bind(_this);
      _this.state = { errorText: null };
      return _this;
    }

    _createClass(ToField, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.onChangeTo(null, this.props.to);
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        if (prevProps.to !== this.props.to) {
          this.onChangeTo(null, this.props.to);
        }
      }
    }, {
      key: 'onChangeTo',
      value: function onChangeTo(event, value) {
        this.props.onChangeTo(value);

        if (!value) {
          this.setState({ errorText: 'Required' });
        } else {
          this.setState({ errorText: null });
        }
      }
    }, {
      key: 'getLeftIcon',
      value: function getLeftIcon() {
        if (!this.props.to) {
          return null;
        }
        return _react2.default.createElement(_IdentityIcon2.default, {
          style: { marginRight: '5px' },
          size: 30,
          id: this.props.to
        });
      }
    }, {
      key: 'getRightIcon',
      value: function getRightIcon() {
        var _this2 = this;

        return _react2.default.createElement(_AddressIconMenu2.default, {
          onChange: function onChange(val) {
            return _this2.onChangeTo(null, val);
          },
          addressBookAddresses: this.props.addressBookAddresses,
          onEmptyAddressBookClick: this.props.onEmptyAddressBookClick
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            _FormLabel2.default,
            null,
            'To'
          ),
          _react2.default.createElement(_Input2.default, {
            leftIcon: this.getLeftIcon(),
            rightIcon: this.getRightIcon(),
            containerStyle: this.inputStyles,
            value: this.props.to,
            errorText: this.state.errorText,
            onChange: this.onChangeTo
          })
        );
      }
    }]);

    return ToField;
  }(_react2.default.Component);

  ToField.propTypes = {
    onChangeTo: _propTypes2.default.func.isRequired,
    to: _propTypes2.default.string.isRequired,
    addressBookAddresses: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
    onEmptyAddressBookClick: _propTypes2.default.func.isRequired
  };
  exports.default = ToField;
});