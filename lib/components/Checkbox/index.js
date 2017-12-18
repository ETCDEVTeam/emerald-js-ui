(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Checkbox'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Checkbox'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Checkbox);
    global.index = mod.exports;
  }
})(this, function (exports, _Checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
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