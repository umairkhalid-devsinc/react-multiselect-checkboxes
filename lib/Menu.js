"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Menu;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function Menu(props) {
  var shadow = '#ececec';
  var style = {
    backgroundColor: "white",
    borderRadius: 4,
    boxShadow: "0 0 0 1px ".concat(shadow, ", 0 4px 11px ").concat(shadow),
    marginTop: 8,
    position: "absolute",
    zIndex: 2
  };
  if (props.rightAligned) {
    style.right = 0;
  }
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    style: {}
  }, props));
}