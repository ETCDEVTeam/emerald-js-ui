(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Block', './Settings', './Add', './ArrowDown', './Back'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Block'), require('./Settings'), require('./Add'), require('./ArrowDown'), require('./Back'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Block, global.Settings, global.Add, global.ArrowDown, global.Back);
    global.index = mod.exports;
  }
})(this, function (exports, _Block, _Settings, _Add, _ArrowDown, _Back) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'Block', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Block).default;
    }
  });
  Object.defineProperty(exports, 'Settings', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Settings).default;
    }
  });
  Object.defineProperty(exports, 'Add', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Add).default;
    }
  });
  Object.defineProperty(exports, 'ArrowDown', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ArrowDown).default;
    }
  });
  Object.defineProperty(exports, 'Back', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Back).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});