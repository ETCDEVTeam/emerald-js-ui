(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'copy-to-clipboard', '@material-ui/core/styles', '../ToggledIconButton', '@material-ui/core/Typography', '../../icons3'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('copy-to-clipboard'), require('@material-ui/core/styles'), require('../ToggledIconButton'), require('@material-ui/core/Typography'), require('../../icons3'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.copyToClipboard, global.styles, global.ToggledIconButton, global.Typography, global.icons3);
    global.Address = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _copyToClipboard, _styles, _ToggledIconButton, _Typography, _icons) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Address = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _copyToClipboard2 = _interopRequireDefault(_copyToClipboard);

  var _ToggledIconButton2 = _interopRequireDefault(_ToggledIconButton);

  var _Typography2 = _interopRequireDefault(_Typography);

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

  var getStyles = function getStyles(theme) {
    return {
      container: {
        height: '28px',
        display: 'flex',
        alignItems: 'center',
        width: '100%'
      },
      shortenedAddress: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        width: '100%'
      },
      toggledIcon: {
        cursor: 'pointer'
      }
    };
  };

  var Address = exports.Address = function (_React$Component) {
    _inherits(Address, _React$Component);

    function Address(props) {
      _classCallCheck(this, Address);

      var _this = _possibleConstructorReturn(this, (Address.__proto__ || Object.getPrototypeOf(Address)).call(this, props));

      _this.onCopyClick = _this.onCopyClick.bind(_this);
      return _this;
    }

    _createClass(Address, [{
      key: 'onCopyClick',
      value: function onCopyClick() {
        (0, _copyToClipboard2.default)(this.props.id);
        this.props.onCopyClick(this.props.id);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            classes = _props.classes,
            shortened = _props.shortened,
            hideCopy = _props.hideCopy;


        var addressClassname = shortened ? classes.shortenedAddress : '';

        return _react2.default.createElement(
          'div',
          { className: classes.container },
          _react2.default.createElement(
            _Typography2.default,
            { className: addressClassname },
            this.id
          ),
          hideCopy ? null : _react2.default.createElement(_ToggledIconButton2.default, { className: classes.toggledIcon, onClick: this.onCopyClick, icon: _react2.default.createElement(_icons.Copytoclipboard, { color: 'secondary' }), toggledIcon: _react2.default.createElement(_icons.Check1, { color: 'primary' }) })
        );
      }
    }, {
      key: 'id',
      get: function get() {
        var idProp = this.props.id;
        return idProp.startsWith('0x') ? idProp : '0x' + idProp;
      }
    }]);

    return Address;
  }(_react2.default.Component);

  Address.propTypes = {
    hideCopy: _propTypes2.default.bool,
    onCopyClick: _propTypes2.default.func,
    id: _propTypes2.default.string.isRequired,
    shortened: _propTypes2.default.bool,
    classes: _propTypes2.default.object.isRequired
  };
  Address.defaultProps = {
    hideCopy: false,
    shortened: false,
    showCheck: false,
    onCopyClick: function onCopyClick() {}
  };
  exports.default = (0, _styles.withStyles)(getStyles)(Address);
});