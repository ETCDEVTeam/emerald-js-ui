(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './CreateTransaction'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./CreateTransaction'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.CreateTransaction);
    global.index = mod.exports;
  }
})(this, function (exports, _CreateTransaction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_CreateTransaction).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});