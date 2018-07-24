(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', '@material-ui/core/styles', './blockies'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('@material-ui/core/styles'), require('./blockies'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.styles, global.blockies);
    global.IdentityIcon = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _styles, _blockies) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _blockies2 = _interopRequireDefault(_blockies);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

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
      clickable: {
        '&:hover': {
          cursor: 'pointer'
        }
      }
    };
  };

  var noop = function noop() {};

  var IdentityIcon = function (_React$Component) {
    _inherits(IdentityIcon, _React$Component);

    function IdentityIcon() {
      _classCallCheck(this, IdentityIcon);

      return _possibleConstructorReturn(this, (IdentityIcon.__proto__ || Object.getPrototypeOf(IdentityIcon)).apply(this, arguments));
    }

    _createClass(IdentityIcon, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            id = _props.id,
            size = _props.size,
            onClick = _props.onClick,
            classes = _props.classes;


        var seed = id.toLowerCase();
        var icon = _blockies2.default.create({ seed: seed }).toDataURL();

        var mainStyle = {
          height: '100%',
          background: 'url(' + icon + ')',
          borderRadius: '50%',
          position: 'relative'
        };

        var identiconProps = {
          onClick: onClick,
          className: onClick === noop ? '' : classes.clickable
        };

        return _react2.default.createElement('div', _extends({ style: mainStyle }, identiconProps));
      }
    }]);

    return IdentityIcon;
  }(_react2.default.Component);

  IdentityIcon.propTypes = {
    id: _propTypes2.default.string.isRequired,
    size: _propTypes2.default.number,
    onClick: _propTypes2.default.func,
    classes: _propTypes2.default.object.isRequired
  };
  IdentityIcon.defaultProps = {
    size: 40,
    onClick: noop
  };
  exports.default = (0, _styles.withStyles)(getStyles)(IdentityIcon);
});