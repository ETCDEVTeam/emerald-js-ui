(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './buttonGroup'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./buttonGroup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.buttonGroup);
    global.index = mod.exports;
  }
})(this, function (exports, _buttonGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_buttonGroup).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});