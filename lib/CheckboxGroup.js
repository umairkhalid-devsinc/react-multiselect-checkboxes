"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxGroupHeading = CheckboxGroupHeading;
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _css = require("@emotion/css");
var _CheckboxWithIndeterminate = _interopRequireDefault(require("../lib/CheckboxWithIndeterminate"));
var _excluded = ["className", "cx", "getStyles", "children", "checkboxProps"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function CheckboxGroup(props) {
  var children = props.children,
    className = props.className,
    cx = props.cx,
    getStyles = props.getStyles,
    Heading = props.Heading,
    setValue = props.setValue,
    data = props.data,
    label = props.label,
    getValue = props.getValue,
    theme = props.theme,
    getOptionValue = props.selectProps.getOptionValue;
  // const getOptionValue = props.selectProps.getOptionValue;
  var optionsIncludes = function optionsIncludes(v) {
    return !!data.options.find(function (opt) {
      return getOptionValue(opt) === getOptionValue(v);
    });
  };
  var numCheckedOptions = getValue().filter(function (v) {
    return optionsIncludes(v);
  }).length;
  var checked = numCheckedOptions === data.options.length;
  var indeterminate = numCheckedOptions > 0 && !checked;
  var checkboxProps = {
    indeterminate: indeterminate,
    checked: checked
  };
  var selectAllOptions = function selectAllOptions() {
    var newValue = [].concat(_toConsumableArray(getValue().filter(function (v) {
      return !optionsIncludes(v);
    })), _toConsumableArray(data.options));
    setValue(newValue);
  };
  var clearOptions = function clearOptions() {
    var newValue = getValue().filter(function (v) {
      return !optionsIncludes(v);
    });
    setValue(newValue);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: cx((0, _css.css)(getStyles("group", props)), {
      group: true
    }, className)
  }, /*#__PURE__*/_react["default"].createElement(Heading, {
    checkboxProps: checkboxProps,
    getStyles: getStyles,
    cx: cx,
    theme: theme,
    onClick: function onClick() {
      if (indeterminate || checked) {
        clearOptions();
      } else {
        selectAllOptions();
      }
    }
  }, label), /*#__PURE__*/_react["default"].createElement("div", null, children));
}
CheckboxGroup.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  cx: _propTypes["default"].func.isRequired,
  getStyles: _propTypes["default"].func.isRequired,
  Heading: _propTypes["default"].func.isRequired,
  getValue: _propTypes["default"].func.isRequired,
  setValue: _propTypes["default"].func.isRequired,
  label: _propTypes["default"].string.isRequired,
  data: _propTypes["default"].shape({
    options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
      label: _propTypes["default"].node,
      value: _propTypes["default"].any
    }))
  }).isRequired,
  theme: _propTypes["default"].object.isRequired // eslint-disable-line react/forbid-prop-types
};

CheckboxGroup.defaultProps = {
  children: null,
  className: undefined
};
function CheckboxGroupHeading(props) {
  var className = props.className,
    cx = props.cx,
    getStyles = props.getStyles,
    children = props.children,
    checkboxProps = props.checkboxProps,
    cleanProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: cx((0, _css.css)(getStyles("groupHeading", _objectSpread(_objectSpread({}, props), checkboxProps))), {
      "group-heading": true
    }, className)
  }, cleanProps), /*#__PURE__*/_react["default"].createElement(_CheckboxWithIndeterminate["default"], _extends({
    readOnly: true,
    type: "checkbox"
  }, checkboxProps)), children);
}
CheckboxGroupHeading.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  cx: _propTypes["default"].func.isRequired,
  getStyles: _propTypes["default"].func.isRequired,
  checkboxProps: _propTypes["default"].shape({
    checked: _propTypes["default"].bool,
    indeterminate: _propTypes["default"].bool
  }).isRequired
};
CheckboxGroupHeading.defaultProps = {
  children: null,
  className: undefined
};
var _default = CheckboxGroup;
exports["default"] = _default;