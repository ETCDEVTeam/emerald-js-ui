(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './components/Account', './components/Address', './components/IdentityIcon', './components/Card', './components/Checkbox', './components/Button', './components/LinkButton', './components/ButtonGroup', './components/SyncWarning', './components/Input', './components/Warning', './components/SelectField', './components/SelectAddressInput', './components/CreateTransaction'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./components/Account'), require('./components/Address'), require('./components/IdentityIcon'), require('./components/Card'), require('./components/Checkbox'), require('./components/Button'), require('./components/LinkButton'), require('./components/ButtonGroup'), require('./components/SyncWarning'), require('./components/Input'), require('./components/Warning'), require('./components/SelectField'), require('./components/SelectAddressInput'), require('./components/CreateTransaction'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Account, global.Address, global.IdentityIcon, global.Card, global.Checkbox, global.Button, global.LinkButton, global.ButtonGroup, global.SyncWarning, global.Input, global.Warning, global.SelectField, global.SelectAddressInput, global.CreateTransaction);
    global.index = mod.exports;
  }
})(this, function (exports, _Account, _Address, _IdentityIcon, _Card, _Checkbox, _Button, _LinkButton, _ButtonGroup, _SyncWarning, _Input, _Warning, _SelectField, _SelectAddressInput, _CreateTransaction) {
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
  Object.defineProperty(exports, 'Card', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Card).default;
    }
  });
  Object.defineProperty(exports, 'Checkbox', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Checkbox).default;
    }
  });
  Object.defineProperty(exports, 'Button', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Button).default;
    }
  });
  Object.defineProperty(exports, 'LinkButton', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_LinkButton).default;
    }
  });
  Object.defineProperty(exports, 'ButtonGroup', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ButtonGroup).default;
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
      return _SelectField.SelectField;
    }
  });
  Object.defineProperty(exports, 'SelectAddressInput', {
    enumerable: true,
    get: function () {
      return _SelectAddressInput.SelectAddressInput;
    }
  });
  Object.defineProperty(exports, 'CreateTransaction', {
    enumerable: true,
    get: function () {
      return _CreateTransaction.CreateTransaction;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});