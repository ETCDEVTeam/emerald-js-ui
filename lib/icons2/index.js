(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Block', './Settings', './Add', './ArrowDown', './Back', './Burger', './CheckCircle', './Check', './Cli', './Close', './Contract', './ContractAbi', './ContractExecute1', './ContractExecute2', './ContractExecute3', './Copy', './Dashboard', './Download'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Block'), require('./Settings'), require('./Add'), require('./ArrowDown'), require('./Back'), require('./Burger'), require('./CheckCircle'), require('./Check'), require('./Cli'), require('./Close'), require('./Contract'), require('./ContractAbi'), require('./ContractExecute1'), require('./ContractExecute2'), require('./ContractExecute3'), require('./Copy'), require('./Dashboard'), require('./Download'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Block, global.Settings, global.Add, global.ArrowDown, global.Back, global.Burger, global.CheckCircle, global.Check, global.Cli, global.Close, global.Contract, global.ContractAbi, global.ContractExecute1, global.ContractExecute2, global.ContractExecute3, global.Copy, global.Dashboard, global.Download);
    global.index = mod.exports;
  }
})(this, function (exports, _Block, _Settings, _Add, _ArrowDown, _Back, _Burger, _CheckCircle, _Check, _Cli, _Close, _Contract, _ContractAbi, _ContractExecute, _ContractExecute2, _ContractExecute3, _Copy, _Dashboard, _Download) {
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
  Object.defineProperty(exports, 'Burger', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Burger).default;
    }
  });
  Object.defineProperty(exports, 'CheckCircle', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_CheckCircle).default;
    }
  });
  Object.defineProperty(exports, 'Check', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Check).default;
    }
  });
  Object.defineProperty(exports, 'Cli', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Cli).default;
    }
  });
  Object.defineProperty(exports, 'Close', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Close).default;
    }
  });
  Object.defineProperty(exports, 'Contract', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Contract).default;
    }
  });
  Object.defineProperty(exports, 'ContractAbi', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ContractAbi).default;
    }
  });
  Object.defineProperty(exports, 'ContractExecute1', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ContractExecute).default;
    }
  });
  Object.defineProperty(exports, 'ContractExecute2', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ContractExecute2).default;
    }
  });
  Object.defineProperty(exports, 'ContractExecute3', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_ContractExecute3).default;
    }
  });
  Object.defineProperty(exports, 'Copy', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Copy).default;
    }
  });
  Object.defineProperty(exports, 'Dashboard', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Dashboard).default;
    }
  });
  Object.defineProperty(exports, 'Download', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Download).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});