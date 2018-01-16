(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Button'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Button'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Button);
    global.index = mod.exports;
  }
})(this, function (exports, _Button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Button).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});