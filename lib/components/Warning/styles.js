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
      maxWidth: '580px',
      borderRadius: '1px',
      backgroundColor: '#F9F2F2',
      color: '#CF3B3B',
      fontSize: '14px',
      lineHeight: '22px',
      paddingTop: '14px',
      paddingLeft: '20px',
      paddingRight: '20px',
      paddingBottom: '10px'
    },
    header: {
      fontWeight: 'bold'
    },
    text: {
      paddingBottom: '10px'
    }
  };

  exports.default = styles;
});