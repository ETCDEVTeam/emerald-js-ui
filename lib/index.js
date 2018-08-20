(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './components/Account', './components/Address', './components/IdentityIcon', './components/Checkbox', './components/SyncWarning', './components/Input', './components/Warning', './components/SelectField', './components/SelectAddressInput', './components/CreateTransaction', './components/Page', './components/ToggledIconButton', './components/TransactionButton', './components/AppBar', './theme', './smart-components/AccountSelector', './smart-components/CurrentBlockNumber', './smart-components/EtcBalance', './smart-components/NetworkSelector', './providers/EmeraldProvider', './providers/EthJsonRpcProvider', './providers/EthRpc', './providers/VaultJsonRpcProvider', './providers/VaultRpc'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./components/Account'), require('./components/Address'), require('./components/IdentityIcon'), require('./components/Checkbox'), require('./components/SyncWarning'), require('./components/Input'), require('./components/Warning'), require('./components/SelectField'), require('./components/SelectAddressInput'), require('./components/CreateTransaction'), require('./components/Page'), require('./components/ToggledIconButton'), require('./components/TransactionButton'), require('./components/AppBar'), require('./theme'), require('./smart-components/AccountSelector'), require('./smart-components/CurrentBlockNumber'), require('./smart-components/EtcBalance'), require('./smart-components/NetworkSelector'), require('./providers/EmeraldProvider'), require('./providers/EthJsonRpcProvider'), require('./providers/EthRpc'), require('./providers/VaultJsonRpcProvider'), require('./providers/VaultRpc'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Account, global.Address, global.IdentityIcon, global.Checkbox, global.SyncWarning, global.Input, global.Warning, global.SelectField, global.SelectAddressInput, global.CreateTransaction, global.Page, global.ToggledIconButton, global.TransactionButton, global.AppBar, global.theme, global.AccountSelector, global.CurrentBlockNumber, global.EtcBalance, global.NetworkSelector, global.EmeraldProvider, global.EthJsonRpcProvider, global.EthRpc, global.VaultJsonRpcProvider, global.VaultRpc);
    global.index = mod.exports;
  }
})(this, function (exports, _Account, _Address, _IdentityIcon, _Checkbox, _SyncWarning, _Input, _Warning, _SelectField, _SelectAddressInput, _CreateTransaction, _Page, _ToggledIconButton, _TransactionButton, _AppBar, _theme, _AccountSelector, _CurrentBlockNumber, _EtcBalance, _NetworkSelector, _EmeraldProvider, _EthJsonRpcProvider, _EthRpc, _VaultJsonRpcProvider, _VaultRpc) {
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
  Object.defineProperty(exports, 'Checkbox', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Checkbox).default;
    }
  });
  Object.defineProperty(exports, 'SyncWarning', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_SyncWarning).default;
    }
  });
  Object.defineProperty(exports, 'Input', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Input).default;
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
  Object.defineProperty(exports, 'SelectField', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_SelectField).default;
    }
  });
  Object.defineProperty(exports, 'SelectAddressInput', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_SelectAddressInput).default;
    }
  });
  Object.defineProperty(exports, 'CreateTransaction', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_CreateTransaction).default;
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
      return _interopRequireDefault(_EmeraldProvider).default;
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

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});