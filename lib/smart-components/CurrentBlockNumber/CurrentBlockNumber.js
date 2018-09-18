(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', '@material-ui/core/Typography', '@material-ui/core/styles', '../../icons3', '../../providers/EthRpc'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('@material-ui/core/Typography'), require('@material-ui/core/styles'), require('../../icons3'), require('../../providers/EthRpc'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.Typography, global.styles, global.icons3, global.EthRpc);
    global.CurrentBlockNumber = mod.exports;
  }
})(this, function (exports, _react, _Typography, _styles, _icons, _EthRpc) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _Typography2 = _interopRequireDefault(_Typography);

  var _EthRpc2 = _interopRequireDefault(_EthRpc);

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
      root: {},
      icon: {
        marginRight: theme.spacing.unit
      }
    };
  };

  var CurrentBlockNumber = function (_React$Component) {
    _inherits(CurrentBlockNumber, _React$Component);

    function CurrentBlockNumber() {
      _classCallCheck(this, CurrentBlockNumber);

      return _possibleConstructorReturn(this, (CurrentBlockNumber.__proto__ || Object.getPrototypeOf(CurrentBlockNumber)).apply(this, arguments));
    }

    _createClass(CurrentBlockNumber, [{
      key: 'render',
      value: function render() {
        var classes = this.props.classes;

        return _react2.default.createElement(
          _EthRpc2.default,
          { method: 'eth.getBlockNumber' },
          function (blockNumber) {
            return _react2.default.createElement(
              _react2.default.Fragment,
              null,
              _react2.default.createElement(_icons.Block, { className: classes.icon }),
              ' ',
              blockNumber
            );
          }
        );
      }
    }]);

    return CurrentBlockNumber;
  }(_react2.default.Component);

  exports.default = (0, _styles.withStyles)(styles, { name: 'EmeraldCurrentBlockNumber' })(CurrentBlockNumber);
});