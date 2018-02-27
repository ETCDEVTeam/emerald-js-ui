(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './LinkButton'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./LinkButton'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.LinkButton);
    global.index = mod.exports;
  }
})(this, function (exports, _LinkButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_LinkButton).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});