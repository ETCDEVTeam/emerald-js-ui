(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './components/Account', './components/Address', './components/IdentityIcon', './components/Checkbox'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./components/Account'), require('./components/Address'), require('./components/IdentityIcon'), require('./components/Checkbox'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Account, global.Address, global.IdentityIcon, global.Checkbox);
    global.index = mod.exports;
  }
})(this, function (exports, _Account, _Address, _IdentityIcon, _Checkbox) {
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

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});