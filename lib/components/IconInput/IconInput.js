(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react);
        global.IconInput = mod.exports;
    }
})(this, function (exports, _react) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var IconInput = function IconInput(_ref) {
        var icon = _ref.icon,
            defaultValue = _ref.defaultValue,
            value = _ref.value,
            onChange = _ref.onChange;

        return _react2.default.createElement(
            'div',
            { style: { display: 'flex' } },
            icon,
            _react2.default.createElement('input', { style: { border: 'none', width: '100%', outline: 'none' }, type: 'text', value: value || defaultValue, onChange: onChange })
        );
    };
    exports.default = IconInput;
});