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
    global.colors = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var white = {
    main: '#FFFFFF'
  };

  var emerald = {
    main: '#00C853',
    contrastText: white.main
  };

  var ash = {
    main: '#B1BFB7',
    contrastText: white.main
  };

  var conch = {
    main: '#EAEFEC'
  };

  var colors = {
    emerald: emerald,
    ash: ash,
    white: white,
    conch: conch,
    snow: '#F7F9F8',
    ruby: '#F41A2D',
    coal: '#222222'
  };

  exports.default = colors;
});