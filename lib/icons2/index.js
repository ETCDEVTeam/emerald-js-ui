(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Block', './Settings', './Add', './ArrowDown', './Back', './Burger', './CheckCircle', './Check', './Cli', './Close', './Contract', './ContractAbi', './ContractExecute1', './ContractExecute2', './ContractExecute3', './Copy', './Dashboard', './Download', './Exit', './Export', './File', './FullScreen', './HardwareWallet', './Home', './Import', './Method1', './Method2', './Method3', './MultiSigWallet', './Network', './NetworkDisconnected', './NetworkOk', './Play', './Print', './QrCode', './Remove', './Search', './Spinner1', './Spinner2', './Time', './Token1', './Token2', './Token3', './Address', './Windowed'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Block'), require('./Settings'), require('./Add'), require('./ArrowDown'), require('./Back'), require('./Burger'), require('./CheckCircle'), require('./Check'), require('./Cli'), require('./Close'), require('./Contract'), require('./ContractAbi'), require('./ContractExecute1'), require('./ContractExecute2'), require('./ContractExecute3'), require('./Copy'), require('./Dashboard'), require('./Download'), require('./Exit'), require('./Export'), require('./File'), require('./FullScreen'), require('./HardwareWallet'), require('./Home'), require('./Import'), require('./Method1'), require('./Method2'), require('./Method3'), require('./MultiSigWallet'), require('./Network'), require('./NetworkDisconnected'), require('./NetworkOk'), require('./Play'), require('./Print'), require('./QrCode'), require('./Remove'), require('./Search'), require('./Spinner1'), require('./Spinner2'), require('./Time'), require('./Token1'), require('./Token2'), require('./Token3'), require('./Address'), require('./Windowed'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Block, global.Settings, global.Add, global.ArrowDown, global.Back, global.Burger, global.CheckCircle, global.Check, global.Cli, global.Close, global.Contract, global.ContractAbi, global.ContractExecute1, global.ContractExecute2, global.ContractExecute3, global.Copy, global.Dashboard, global.Download, global.Exit, global.Export, global.File, global.FullScreen, global.HardwareWallet, global.Home, global.Import, global.Method1, global.Method2, global.Method3, global.MultiSigWallet, global.Network, global.NetworkDisconnected, global.NetworkOk, global.Play, global.Print, global.QrCode, global.Remove, global.Search, global.Spinner1, global.Spinner2, global.Time, global.Token1, global.Token2, global.Token3, global.Address, global.Windowed);
    global.index = mod.exports;
  }
})(this, function (exports, _Block, _Settings, _Add, _ArrowDown, _Back, _Burger, _CheckCircle, _Check, _Cli, _Close, _Contract, _ContractAbi, _ContractExecute, _ContractExecute2, _ContractExecute3, _Copy, _Dashboard, _Download, _Exit, _Export, _File, _FullScreen, _HardwareWallet, _Home, _Import, _Method, _Method2, _Method3, _MultiSigWallet, _Network, _NetworkDisconnected, _NetworkOk, _Play, _Print, _QrCode, _Remove, _Search, _Spinner, _Spinner2, _Time, _Token, _Token2, _Token3, _Address, _Windowed) {
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
  Object.defineProperty(exports, 'Exit', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Exit).default;
    }
  });
  Object.defineProperty(exports, 'Export', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Export).default;
    }
  });
  Object.defineProperty(exports, 'File', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_File).default;
    }
  });
  Object.defineProperty(exports, 'FullScreen', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_FullScreen).default;
    }
  });
  Object.defineProperty(exports, 'HardwareWallet', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_HardwareWallet).default;
    }
  });
  Object.defineProperty(exports, 'Home', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Home).default;
    }
  });
  Object.defineProperty(exports, 'Import', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Import).default;
    }
  });
  Object.defineProperty(exports, 'Method1', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Method).default;
    }
  });
  Object.defineProperty(exports, 'Method2', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Method2).default;
    }
  });
  Object.defineProperty(exports, 'Method3', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Method3).default;
    }
  });
  Object.defineProperty(exports, 'Method4', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Method3).default;
    }
  });
  Object.defineProperty(exports, 'MultiSigWallet', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_MultiSigWallet).default;
    }
  });
  Object.defineProperty(exports, 'Network', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Network).default;
    }
  });
  Object.defineProperty(exports, 'NetworkDisconnected', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_NetworkDisconnected).default;
    }
  });
  Object.defineProperty(exports, 'NetworkOk', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_NetworkOk).default;
    }
  });
  Object.defineProperty(exports, 'Play', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Play).default;
    }
  });
  Object.defineProperty(exports, 'Print', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Print).default;
    }
  });
  Object.defineProperty(exports, 'QrCode', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_QrCode).default;
    }
  });
  Object.defineProperty(exports, 'Remove', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Remove).default;
    }
  });
  Object.defineProperty(exports, 'Search', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Search).default;
    }
  });
  Object.defineProperty(exports, 'Spinner1', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Spinner).default;
    }
  });
  Object.defineProperty(exports, 'Spinner2', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Spinner2).default;
    }
  });
  Object.defineProperty(exports, 'Time', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Time).default;
    }
  });
  Object.defineProperty(exports, 'Token1', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Token).default;
    }
  });
  Object.defineProperty(exports, 'Token2', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Token2).default;
    }
  });
  Object.defineProperty(exports, 'Token3', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Token3).default;
    }
  });
  Object.defineProperty(exports, 'Address', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Address).default;
    }
  });
  Object.defineProperty(exports, 'Windowed', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_Windowed).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});