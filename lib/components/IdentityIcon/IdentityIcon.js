(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'react-jss', 'classnames/bind', './blockies'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('react-jss'), require('classnames/bind'), require('./blockies'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactJss, global.bind, global.blockies);
    global.IdentityIcon = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _reactJss, _bind, blockies) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _reactJss2 = _interopRequireDefault(_reactJss);

  var _bind2 = _interopRequireDefault(_bind);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var styles = {
    expandedButton: {
      '&:before': {
        content: 'url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDEyIDE0Ij48cGF0aCBmaWxsPSIjNDdCMDRCIiBkPSJNOS41IDcuNXYtMXEwLTAuMjAzLTAuMTQ4LTAuMzUydC0wLjM1Mi0wLjE0OGgtMnYtMnEwLTAuMjAzLTAuMTQ4LTAuMzUydC0wLjM1Mi0wLjE0OGgtMXEtMC4yMDMgMC0wLjM1MiAwLjE0OHQtMC4xNDggMC4zNTJ2MmgtMnEtMC4yMDMgMC0wLjM1MiAwLjE0OHQtMC4xNDggMC4zNTJ2MXEwIDAuMjAzIDAuMTQ4IDAuMzUydDAuMzUyIDAuMTQ4aDJ2MnEwIDAuMjAzIDAuMTQ4IDAuMzUydDAuMzUyIDAuMTQ4aDFxMC4yMDMgMCAwLjM1Mi0wLjE0OHQwLjE0OC0wLjM1MnYtMmgycTAuMjAzIDAgMC4zNTItMC4xNDh0MC4xNDgtMC4zNTJ6TTEyIDdxMCAxLjYzMy0wLjgwNSAzLjAxMnQtMi4xODQgMi4xODQtMy4wMTIgMC44MDUtMy4wMTItMC44MDUtMi4xODQtMi4xODQtMC44MDUtMy4wMTIgMC44MDUtMy4wMTIgMi4xODQtMi4xODQgMy4wMTItMC44MDUgMy4wMTIgMC44MDUgMi4xODQgMi4xODQgMC44MDUgMy4wMTJ6Ij48L3BhdGg+PC9zdmc+)',
        position: 'absolute',
        fontFamily: 'FontAwesome, serif',
        top: 0,
        fontStyle: 'normal',
        fontWeight: 'normal',
        left: '24px',
        fontSize: '20px',
        height: '20px',
        width: '20px',
        margin: '0',
        color: '#47B04B',
        backgroundColor: 'white',
        borderRadius: '50%',
        textAlign: 'center',
        border: '1px solid #FFFFFF'
      }
    },
    clickAble: {
      '&:hover': {
        cursor: 'pointer'
      }
    }
  };

  var IdentityIcon = function IdentityIcon(_ref) {
    var classes = _ref.classes,
        id = _ref.id,
        expanded = _ref.expanded,
        size = _ref.size,
        onClick = _ref.onClick;

    var iconSize = Number.isInteger(size) ? size : 40;
    var icon = blockies.create({ seed: id, size: 8, scale: 4 }).toDataURL();
    var mainStyle = {
      height: iconSize + 'px',
      width: iconSize + 'px',
      minWidth: iconSize + 'px',
      background: 'url(' + icon + ')',
      borderRadius: '50%',
      position: 'relative'
    };

    var expandButton = expanded ? '' : _react2.default.createElement('div', { className: classes.expandedButton });
    var cx = _bind2.default.bind(classes);
    var className = cx({
      clickAble: onClick !== null && typeof onClick === 'function'
    });

    return _react2.default.createElement(
      'div',
      { style: mainStyle, onClick: onClick, className: className },
      expandButton
    );
  };

  IdentityIcon.propTypes = {
    id: _propTypes2.default.string.isRequired,
    expanded: _propTypes2.default.bool,
    size: _propTypes2.default.number,
    onClick: _propTypes2.default.func,
    classes: _propTypes2.default.object
  };

  exports.default = (0, _reactJss2.default)(styles)(IdentityIcon);
});