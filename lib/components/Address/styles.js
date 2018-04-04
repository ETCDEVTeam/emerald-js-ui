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
      height: '28px',
      fontWeight: '300',
      fontSize: '14px',
      display: 'flex',
      alignItems: 'center'
    },
    address: {
      cursor: 'pointer',
      textOverflow: 'ellipsis',
      overflow: 'hidden'
    },
    copyIcon: {
      width: '13px !important',
      height: '13px !important',
      cursor: 'pointer',
      marginLeft: '4px',
      '&:hover': {
        color: '#5ECE62 !important'
      }
    }
  };

  exports.default = styles;
});