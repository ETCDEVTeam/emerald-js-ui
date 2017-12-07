(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './IdentityIcon'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./IdentityIcon'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.IdentityIcon);
    global.index = mod.exports;
  }
})(this, function (exports, _IdentityIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_IdentityIcon).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});