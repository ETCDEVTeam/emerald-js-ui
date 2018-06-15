(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './SelectField'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./SelectField'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.SelectField);
    global.index = mod.exports;
  }
})(this, function (exports, _SelectField) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_SelectField).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});