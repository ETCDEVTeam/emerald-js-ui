(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './SelectAddressInput'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./SelectAddressInput'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.SelectAddressInput);
    global.index = mod.exports;
  }
})(this, function (exports, _SelectAddressInput) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_SelectAddressInput).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});