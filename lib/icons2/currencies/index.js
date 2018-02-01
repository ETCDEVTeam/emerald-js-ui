(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './EthereumClassic', './Bitcoin', './Ethereum', './Litecoin', './Monero', './Zcash'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./EthereumClassic'), require('./Bitcoin'), require('./Ethereum'), require('./Litecoin'), require('./Monero'), require('./Zcash'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.EthereumClassic, global.Bitcoin, global.Ethereum, global.Litecoin, global.Monero, global.Zcash);
    global.index = mod.exports;
  }
})(this, function (exports, _EthereumClassic, _Bitcoin, _Ethereum, _Litecoin, _Monero, _Zcash) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'EthereumClassic', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_EthereumClassic).default;
    }
  });
  Object.defineProperty(exports, 'Bitcoin', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Bitcoin).default;
    }
  });
  Object.defineProperty(exports, 'Ethereum', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Ethereum).default;
    }
  });
  Object.defineProperty(exports, 'Litecoin', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Litecoin).default;
    }
  });
  Object.defineProperty(exports, 'Monero', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Monero).default;
    }
  });
  Object.defineProperty(exports, 'Zcash', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Zcash).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});