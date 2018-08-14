(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './components/Account', './components/Address', './components/IdentityIcon', './components/Checkbox', './components/SyncWarning', './components/Input', './components/Warning', './components/SelectField', './components/SelectAddressInput', './components/CreateTransaction', './components/Page', './components/ToggledIconButton', './components/TransactionButton', './theme'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./components/Account'), require('./components/Address'), require('./components/IdentityIcon'), require('./components/Checkbox'), require('./components/SyncWarning'), require('./components/Input'), require('./components/Warning'), require('./components/SelectField'), require('./components/SelectAddressInput'), require('./components/CreateTransaction'), require('./components/Page'), require('./components/ToggledIconButton'), require('./components/TransactionButton'), require('./theme'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Account, global.Address, global.IdentityIcon, global.Checkbox, global.SyncWarning, global.Input, global.Warning, global.SelectField, global.SelectAddressInput, global.CreateTransaction, global.Page, global.ToggledIconButton, global.TransactionButton, global.theme);
    global.index = mod.exports;
  }
})(this, function (exports, _Account, _Address, _IdentityIcon, _Checkbox, _SyncWarning, _Input, _Warning, _SelectField, _SelectAddressInput, _CreateTransaction, _Page, _ToggledIconButton, _TransactionButton, _theme) {
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
  Object.defineProperty(exports, 'Theme', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_theme).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});