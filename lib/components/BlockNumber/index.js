(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './BlockNumber'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./BlockNumber'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.BlockNumber);
    global.index = mod.exports;
  }
})(this, function (exports, _BlockNumber) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_BlockNumber).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});