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
    linkButton: {
      fontSize: '14px',
      fontWeight: '500',
      lineHeight: '20px',
      textTransform: 'uppercase',
      cursor: 'pointer',
      textDecoration: 'none',
      backgroundColor: 'transparent !important',
      '&:hover': {
        backgroundColor: 'transparent !important'
      }
    }
  };

  exports.default = styles;
});