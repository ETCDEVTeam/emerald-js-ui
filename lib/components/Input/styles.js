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
      boxSizing: 'border-box',
      border: '1px solid #DDDDDD',
      borderRadius: '1px',
      paddingLeft: '10px',
      paddingRight: '10px',
      display: 'flex',
      alignItems: 'center'
    }
  };

  exports.default = styles;
});