"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _css = require("@emotion/css");
var _CheckboxWithIndeterminate = _interopRequireDefault(require("../lib/CheckboxWithIndeterminate"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function CheckboxOption(props) {
  var children = props.children,
    className = props.className,
    cx = props.cx,
    getStyles = props.getStyles,
    isDisabled = props.isDisabled,
    isFocused = props.isFocused,
    isSelected = props.isSelected,
    innerRef = props.innerRef,
    innerProps = props.innerProps;
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    ref: innerRef,
    className: cx((0, _css.css)(getStyles("option", props)), {
      option: true,
      "option--is-disabled": isDisabled,
      "option--is-focused": isFocused,
      "option--is-selected": isSelected
    }, className)
  }, innerProps), /*#__PURE__*/_react["default"].createElement(_CheckboxWithIndeterminate["default"], {
    readOnly: true,
    type: "checkbox",
    checked: isSelected
  }), children);
}
CheckboxOption.propTypes = {
  children: _propTypes["default"].node
};
CheckboxOption.defaultProps = {
  children: null
};
var _default = CheckboxOption;
exports["default"] = _default;