"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Blanket;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function Blanket(props) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      bottom: 0,
      left: 0,
      top: 0,
      right: 0,
      position: "fixed",
      zIndex: 1
    }
  }, props));
}