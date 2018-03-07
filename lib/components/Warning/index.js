(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Warning'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Warning'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Warning);
    global.index = mod.exports;
  }
})(this, function (exports, _Warning) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.WarningText = exports.WarningHeader = exports.Warning = undefined;
  exports.Warning = _Warning.Warning;
  exports.WarningHeader = _Warning.WarningHeader;
  exports.WarningText = _Warning.WarningText;
});