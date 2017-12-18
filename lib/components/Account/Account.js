(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'react-jss', '../../icons', '../Address', './styles'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('react-jss'), require('../../icons'), require('../Address'), require('./styles'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactJss, global.icons, global.Address, global.styles);
    global.Account = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _reactJss, _icons, _Address, _styles) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Account = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _reactJss2 = _interopRequireDefault(_reactJss);

  var _Address2 = _interopRequireDefault(_Address);

  var _styles2 = _interopRequireDefault(_styles);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Account = exports.Account = function Account(props) {
    var classes = props.classes,
        primary = props.primary,
        secondary = props.secondary,
        addr = props.addr,
        abbreviated = props.abbreviated,
        description = props.description,
        name = props.name,
        editable = props.editable;
    var onAddressClick = props.onAddressClick,
        onEditClick = props.onEditClick;


    return _react2.default.createElement(
      'div',
      { className: classes.container },
      _react2.default.createElement(
        'div',
        { className: classes.primaryContainer },
        primary || _react2.default.createElement(
          'div',
          { onClick: onEditClick, className: classes.accountName },
          _react2.default.createElement(
            'div',
            null,
            name
          ),
          editable && _react2.default.createElement(
            'div',
            { style: { marginLeft: '5px' } },
            _react2.default.createElement(_icons.Edit, { style: _styles2.default.editIcon })
          )
        )
      ),
      _react2.default.createElement(
        'div',
        null,
        secondary || _react2.default.createElement(_Address2.default, {
          onClick: onAddressClick,
          id: addr,
          shortened: abbreviated
        })
      )
    );
  };

  Account.defaultProps = {
    editable: false,
    onAddressClick: function onAddressClick() {}
  };

  Account.propTypes = {
    onAddressClick: _propTypes2.default.func,
    onEditClick: _propTypes2.default.func
  };

  exports.default = (0, _reactJss2.default)(_styles2.default)(Account);
});