(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', '@material-ui/core/styles', '../../icons3', '@material-ui/core/Typography'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('@material-ui/core/styles'), require('../../icons3'), require('@material-ui/core/Typography'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.styles, global.icons3, global.Typography);
    global.SyncWarning = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _styles, _icons, _Typography) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

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
        width: '100%',
        backgroundColor: '#F9F2F2',
        minHeight: '35px',
        // opacity: '0.5',
        display: 'flex',
        zIndex: '-1',
        alignItems: 'center',
        paddingLeft: '5px',
        paddingTop: '5px'
      },
      errorText: {
        color: theme.palette.error.light
      },
      text: {
        color: '#CF3B3B',
        zIndex: '1',
        marginLeft: '5px'
      }
    };
  };

  var SyncWarning = function (_React$Component) {
    _inherits(SyncWarning, _React$Component);

    function SyncWarning() {
      _classCallCheck(this, SyncWarning);

      var _this = _possibleConstructorReturn(this, (SyncWarning.__proto__ || Object.getPrototypeOf(SyncWarning)).call(this));

      _this.getProgress = _this.getProgress.bind(_this);
      return _this;
    }

    _createClass(SyncWarning, [{
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(_ref) {
        var currentBlock = _ref.currentBlock,
            highestBlock = _ref.highestBlock;

        return currentBlock && highestBlock && highestBlock - currentBlock >= 20;
      }
    }, {
      key: 'getProgress',
      value: function getProgress() {
        var _props = this.props,
            startingBlock = _props.startingBlock,
            currentBlock = _props.currentBlock,
            highestBlock = _props.highestBlock,
            classes = _props.classes;


        if (startingBlock && currentBlock && highestBlock) {
          return 'About ' + (highestBlock - currentBlock) + ' blocks left.';
        } else {
          return '';
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _props2 = this.props,
            startingblock = _props2.startingblock,
            currentblock = _props2.currentblock,
            highestblock = _props2.highestblock,
            classes = _props2.classes;


        return _react2.default.createElement(
          'div',
          { className: classes.container },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_icons.Spinner1, { className: classes.text.color })
          ),
          _react2.default.createElement(
            _Typography2.default,
            { color: 'error' },
            'You are currently syncing. Balances may be incorrect until complete. ',
            this.getProgress()
          )
        );
      }
    }]);

    return SyncWarning;
  }(_react2.default.Component);

  SyncWarning.propTypes = {
    startingBlock: _propTypes2.default.number.isRequired,
    currentBlock: _propTypes2.default.number.isRequired,
    highestBlock: _propTypes2.default.number.isRequired,
    classes: _propTypes2.default.object.isRequired
  };
  SyncWarning.defaultProps = {};
  ;

  exports.default = (0, _styles.withStyles)(getStyles)(SyncWarning);
});