(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './CurrentBlockNumber'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./CurrentBlockNumber'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.CurrentBlockNumber);
    global.index = mod.exports;
  }
})(this, function (exports, _CurrentBlockNumber) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_CurrentBlockNumber).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});