(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Input'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Input'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Input);
    global.index = mod.exports;
  }
})(this, function (exports, _Input) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Input).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});