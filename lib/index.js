(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './components/Account', './components/Address', './components/IdentityIcon', './components/SyncWarning', './components/Warning', './components/CreateTransaction', './components/Input', './components/Page', './components/ToggledIconButton', './components/TransactionButton', './components/AppBar', './theme', './smart-components/AccountSelector', './smart-components/CurrentBlockNumber', './smart-components/EtcBalance', './smart-components/NetworkSelector', './providers/EmeraldProvider', './providers/EthJsonRpcProvider', './providers/EthRpc', './providers/VaultJsonRpcProvider', './providers/VaultRpc', './providers/Contract'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./components/Account'), require('./components/Address'), require('./components/IdentityIcon'), require('./components/SyncWarning'), require('./components/Warning'), require('./components/CreateTransaction'), require('./components/Input'), require('./components/Page'), require('./components/ToggledIconButton'), require('./components/TransactionButton'), require('./components/AppBar'), require('./theme'), require('./smart-components/AccountSelector'), require('./smart-components/CurrentBlockNumber'), require('./smart-components/EtcBalance'), require('./smart-components/NetworkSelector'), require('./providers/EmeraldProvider'), require('./providers/EthJsonRpcProvider'), require('./providers/EthRpc'), require('./providers/VaultJsonRpcProvider'), require('./providers/VaultRpc'), require('./providers/Contract'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Account, global.Address, global.IdentityIcon, global.SyncWarning, global.Warning, global.CreateTransaction, global.Input, global.Page, global.ToggledIconButton, global.TransactionButton, global.AppBar, global.theme, global.AccountSelector, global.CurrentBlockNumber, global.EtcBalance, global.NetworkSelector, global.EmeraldProvider, global.EthJsonRpcProvider, global.EthRpc, global.VaultJsonRpcProvider, global.VaultRpc, global.Contract);
    global.index = mod.exports;
  }
})(this, function (exports, _Account, _Address, _IdentityIcon, _SyncWarning, _Warning, _CreateTransaction, _Input, _Page, _ToggledIconButton, _TransactionButton, _AppBar, _theme, _AccountSelector, _CurrentBlockNumber, _EtcBalance, _NetworkSelector, _EmeraldProvider, _EthJsonRpcProvider, _EthRpc, _VaultJsonRpcProvider, _VaultRpc, _Contract) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'Account', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Account).default;
    }
  });
  Object.defineProperty(exports, 'Address', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Address).default;
    }
  });
  Object.defineProperty(exports, 'IdentityIcon', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_IdentityIcon).default;
    }
  });
  Object.defineProperty(exports, 'SyncWarning', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_SyncWarning).default;
    }
  });
  Object.defineProperty(exports, 'Warning', {
    enumerable: true,
    get: function () {
      return _Warning.Warning;
    }
  });
  Object.defineProperty(exports, 'WarningHeader', {
    enumerable: true,
    get: function () {
      return _Warning.WarningHeader;
    }
  });
  Object.defineProperty(exports, 'WarningText', {
    enumerable: true,
    get: function () {
      return _Warning.WarningText;
    }
  });
  Object.defineProperty(exports, 'CreateTransaction', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_CreateTransaction).default;
    }
  });
  Object.defineProperty(exports, 'Input', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Input).default;
    }
  });
  Object.defineProperty(exports, 'Page', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Page).default;
    }
  });
  Object.defineProperty(exports, 'ToggledIconButton', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ToggledIconButton).default;
    }
  });
  Object.defineProperty(exports, 'TransactionButton', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_TransactionButton).default;
    }
  });
  Object.defineProperty(exports, 'AppBar', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_AppBar).default;
    }
  });
  Object.defineProperty(exports, 'Theme', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_theme).default;
    }
  });
  Object.defineProperty(exports, 'AccountSelector', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_AccountSelector).default;
    }
  });
  Object.defineProperty(exports, 'CurrentBlockNumber', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_CurrentBlockNumber).default;
    }
  });
  Object.defineProperty(exports, 'EtcBalance', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_EtcBalance).default;
    }
  });
  Object.defineProperty(exports, 'NetworkSelector', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_NetworkSelector).default;
    }
  });
  Object.defineProperty(exports, 'EmeraldProvider', {
    enumerable: true,
    get: function () {
      return _EmeraldProvider.EmeraldProvider;
    }
  });
  Object.defineProperty(exports, 'EthJsonRpcProvider', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_EthJsonRpcProvider).default;
    }
  });
  Object.defineProperty(exports, 'EthRpc', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_EthRpc).default;
    }
  });
  Object.defineProperty(exports, 'VaultJsonRpcProvider', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_VaultJsonRpcProvider).default;
    }
  });
  Object.defineProperty(exports, 'VaultRpc', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_VaultRpc).default;
    }
  });
  Object.defineProperty(exports, 'Contract', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Contract).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});