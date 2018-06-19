(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Page'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Page'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Page);
    global.index = mod.exports;
  }
})(this, function (exports, _Page) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Page).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});