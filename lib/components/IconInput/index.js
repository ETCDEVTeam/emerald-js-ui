(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './IconInput'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./IconInput'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.IconInput);
    global.index = mod.exports;
  }
})(this, function (exports, _IconInput) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_IconInput).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});