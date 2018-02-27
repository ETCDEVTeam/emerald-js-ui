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
      width: '100%',
      backgroundColor: '#F9F2F2',
      minHeight: '35px',
      // opacity: '0.5',
      display: 'flex',
      zIndex: '-1',
      alignItems: 'center',
      paddingLeft: '5px',
      paddingTop: '5px'
    },
    text: {
      color: '#CF3B3B',
      zIndex: '1',
      marginLeft: '5px'
    }
  };

  exports.default = styles;
});