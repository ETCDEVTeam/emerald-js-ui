(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.Logo = mod.exports;
  }
})(this, function (exports, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var LogoIcon = function LogoIcon(props) {
    return _react2.default.createElement(
      "svg",
      { version: "1.1", x: "0px", y: "0px", width: props.width || '50px', height: props.height || '50px', viewBox: "0 0 1024 1024", "enable-background": "new 0 0 1024 1024" },
      _react2.default.createElement("polyline", { fill: "#48AD54", points: "512,960 768,512 512,64 256,512 512,960 " }),
      _react2.default.createElement("polygon", { opacity: "0", points: "512,64 256,512 444.632,417.684 " }),
      _react2.default.createElement("polygon", { opacity: "0.15", points: "444.632,417.684 256,512 411.826,589.913 " }),
      _react2.default.createElement("polygon", { opacity: "0.3", points: "256,512 384,736 411.826,589.913 " }),
      _react2.default.createElement("polygon", { opacity: "0.15", points: "512,64 444.632,417.684 512,384 579.368,417.684 " }),
      _react2.default.createElement("polygon", { opacity: "0.3", points: "579.368,417.684 512,384 444.632,417.684 411.826,589.913 512,640 612.174,589.913 " }),
      _react2.default.createElement("polygon", { opacity: "0.45", points: "512,640 411.826,589.913 384,736 512,960 640,736 612.174,589.913 " }),
      _react2.default.createElement("polygon", { opacity: "0.3", points: "512,64 768,512 579.368,417.684 " }),
      _react2.default.createElement("polygon", { opacity: "0.45", points: "579.368,417.684 768,512 612.174,589.913 " }),
      _react2.default.createElement("polygon", { opacity: "0.6", points: "768,512 640,736 612.174,589.913 " })
    );
  };
  exports.default = LogoIcon;
});