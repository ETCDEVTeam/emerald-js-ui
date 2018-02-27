(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './SyncWarning'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./SyncWarning'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.SyncWarning);
    global.index = mod.exports;
  }
})(this, function (exports, _SyncWarning) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_SyncWarning).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});