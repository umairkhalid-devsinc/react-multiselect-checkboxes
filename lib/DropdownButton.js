"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DropdownButton;
exports.defaultDropdownButtonStyle = void 0;
var _css = require("@emotion/css");
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var propTypes = {
  children: _propTypes["default"].node.isRequired,
  onPress: _propTypes["default"].func,
  iconAfter: _propTypes["default"].node,
  style: _propTypes["default"].object // eslint-disable-line react/forbid-prop-types
};

var defaultProps = {
  onPress: function onPress() {},
  style: {},
  iconAfter: null
};
var defaultDropdownButtonStyle = {
  padding: "8px 8px 5px 0px",
  backgroundColor: "#FFF",
  borderRadius: "2px",
  borderWidth: 0,
  boxShadow: "0 1px 1px 1px rgba(0, 0, 0, 0.08)",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: 1.36,
  alignItems: "baseline",
  background: "#FFF",
  boxSizing: "border-box",
  borderColor: '1px solid rgb(200, 197, 197)',
  cursor: "pointer",
  display: "inline-flex",
  margin: 0,
  maxWidth: "100%",
  outline: "currentcolor none medium !important",
  textAlign: "center",
  textDecoration: "none",
  transition: "background 0.1s ease-out 0s, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s",
  verticalAlign: "middle",
  whiteSpace: "nowrap",
  width: "auto",
  ":hover": {
    background: "rgba(9, 30, 66, 0.08) none repeat scroll 0% 0%"
  }
};
exports.defaultDropdownButtonStyle = defaultDropdownButtonStyle;
var innerSpan = {
  alignSelf: "center",
  display: "inline-flex",
  flexWrap: "nowrap",
  maxWidth: "100%"
};
var iconSpan = {
  alignSelf: "center",
  display: "flex",
  flexShrink: 0,
  lineHeight: 0,
  fontSize: 0,
  margin: "0px 4px"
};
var textSpan = {
  alignItems: "center",
  alignSelf: "center",
  flex: "1 1 auto",
  margin: "0px 4px",
  maxWidth: "100%",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
};
var defaultStyles = {
  innerSpan: innerSpan,
  iconSpan: iconSpan,
  textSpan: textSpan
};
function DropdownButton(_ref) {
  var onPress = _ref.onPress,
    children = _ref.children,
    iconAfter = _ref.iconAfter,
    buttonStyle = _ref.style;
  var styles = _objectSpread(_objectSpread({}, defaultStyles), {}, {
    button: buttonStyle
  });
  var childContent = typeof children === "string" ? /*#__PURE__*/_react["default"].createElement("span", {
    className: (0, _css.css)(styles.textSpan)
  }, children) : children;
  return /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: (0, _css.css)(styles.button),
    onClick: onPress
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: (0, _css.css)(styles.innerSpan)
  }, childContent, !!iconAfter && /*#__PURE__*/_react["default"].createElement("span", {
    className: (0, _css.css)(styles.iconSpan)
  }, iconAfter)));
}
DropdownButton.propTypes = propTypes;
DropdownButton.defaultProps = defaultProps;