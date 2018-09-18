(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', '@material-ui/core/styles', '../../icons3', '@material-ui/core', '../../providers/EthRpc', '../../providers/EthJsonRpcProvider'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('@material-ui/core/styles'), require('../../icons3'), require('@material-ui/core'), require('../../providers/EthRpc'), require('../../providers/EthJsonRpcProvider'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.styles, global.icons3, global.core, global.EthRpc, global.EthJsonRpcProvider);
    global.index = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _styles, _icons, _core, _EthRpc, _EthJsonRpcProvider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

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
      networkIcon: {
        marginRight: theme.spacing.unit
      }
    };
  };

  var networks = [{
    url: 'https://web3.gastracker.io/morden',
    name: 'Gastracker'
  }, {
    url: 'https://web3.gastracker.io/',
    name: 'Gastracker'
  }, {
    url: 'http://localhost:8545',
    name: 'Local'
  }];

  var NetworkSelector = function (_React$Component) {
    _inherits(NetworkSelector, _React$Component);

    function NetworkSelector() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, NetworkSelector);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NetworkSelector.__proto__ || Object.getPrototypeOf(NetworkSelector)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        anchorEl: null,
        selectedIndex: 0
      }, _this.handleClickListItem = function (event) {
        _this.setState({ anchorEl: event.currentTarget });
      }, _this.handleMenuItemClick = function (event, index) {
        _this.setState({ anchorEl: null });
      }, _this.handleClose = function () {
        _this.setState({ anchorEl: null });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(NetworkSelector, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var anchorEl = this.state.anchorEl;
        var classes = this.props.classes;


        return _react2.default.createElement(
          _EthJsonRpcProvider.EthJsonRpcContext.Consumer,
          null,
          function (_ref2) {
            var url = _ref2.url,
                changeUrl = _ref2.changeUrl;

            var selectedNetwork = networks.find(function (network) {
              return network.url === url;
            });

            return _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                _core.Button,
                { color: 'secondary', onClick: _this2.handleClickListItem },
                _react2.default.createElement(_icons.Network, { className: classes.networkIcon }),
                selectedNetwork.name
              ),
              _react2.default.createElement(
                _core.Menu,
                {
                  id: 'network-selector',
                  anchorEl: anchorEl,
                  open: Boolean(anchorEl),
                  onClose: _this2.handleClose
                },
                networks.map(function (network) {
                  return _react2.default.createElement(
                    _core.MenuItem,
                    { key: network.url, selected: network.url === selectedNetwork.url },
                    _react2.default.createElement(
                      _EthJsonRpcProvider.EthJsonRpcProvider,
                      { url: network.url },
                      _react2.default.createElement(
                        'div',
                        { onClick: function onClick() {
                            _this2.handleMenuItemClick();
                            changeUrl(network.url);
                          } },
                        _react2.default.createElement(
                          _core.Typography,
                          null,
                          network.name
                        ),
                        _react2.default.createElement(
                          _EthRpc2.default,
                          { method: 'net.version' },
                          function (networkId) {
                            return _react2.default.createElement(
                              _core.Typography,
                              null,
                              networkId
                            );
                          }
                        )
                      )
                    )
                  );
                })
              )
            );
          }
        );
      }
    }]);

    return NetworkSelector;
  }(_react2.default.Component);

  exports.default = (0, _styles.withStyles)(styles, { name: 'EmeraldNetworkSelector' })(NetworkSelector);
});