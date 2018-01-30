(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.styles = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var styles = {
    container: {
      display: 'flex',
      alignItems: 'center'
    },
    item: {
      marginLeft: '10px'
    },
    firstItem: {
      marginLeft: '0px'
    }
  };

  exports.default = styles;
});