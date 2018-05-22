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
      backgroundColor: 'inherit',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    editIcon: {
      width: '13px',
      height: '13px',
      cursor: 'pointer'
    },
    primaryContainer: {
      lineHeight: '22px',
      fontSize: '14px'
    },
    accountName: {
      display: 'flex',
      alignItems: 'center'
    }
  };

  exports.default = styles;
});