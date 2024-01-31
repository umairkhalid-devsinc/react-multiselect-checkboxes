"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactSelect = _interopRequireDefault(require("react-select"));
var _CheckboxOption = _interopRequireDefault(require("../lib/CheckboxOption"));
var _CheckboxGroup = _interopRequireWildcard(require("../lib/CheckboxGroup"));
var _data = require("../lib/data");
var _DropdownButton = _interopRequireDefault(require("../lib/DropdownButton"));
var _Dropdown = _interopRequireDefault(require("../lib/Dropdown"));
var _DropdownIndicator = _interopRequireDefault(require("../lib/DropdownIndicator"));
var _ChevronDown = _interopRequireDefault(require("../lib/ChevronDown"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var selectStyles = {
  control: function control(provided) {
    return _objectSpread(_objectSpread({}, provided), {}, {
      minWidth: 240,
      margin: 8
    });
  },
  menu: function menu() {
    return {
      boxShadow: "inset 0 1px 0 rgba(0, 0, 0, 0.1)"
    };
  }
};
var defaultComponents = {
  Dropdown: _Dropdown["default"],
  DropdownButton: _DropdownButton["default"],
  DropdownButtonIcon: _ChevronDown["default"]
};
var PopoutExample = /*#__PURE__*/function (_Component) {
  _inherits(PopoutExample, _Component);
  var _super = _createSuper(PopoutExample);
  function PopoutExample() {
    var _this;
    _classCallCheck(this, PopoutExample);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpen: false,
      value: undefined
    });
    _defineProperty(_assertThisInitialized(_this), "onSelectChange", function (value) {
      // this.toggleOpen();
      _this.setState({
        value: value
      });
    });
    _defineProperty(_assertThisInitialized(_this), "toggleOpen", function () {
      _this.setState(function (state) {
        return {
          isOpen: !state.isOpen
        };
      });
    });
    return _this;
  }
  _createClass(PopoutExample, [{
    key: "render",
    value: function render() {
      var components = _objectSpread(_objectSpread({}, defaultComponents), this.props.components);
      var _this$state = this.state,
        isOpen = _this$state.isOpen,
        value = _this$state.value;
      return /*#__PURE__*/_react["default"].createElement(components.Dropdown, {
        isOpen: isOpen,
        onClose: this.toggleOpen,
        target: /*#__PURE__*/_react["default"].createElement(components.DropdownButton, {
          iconAfter: /*#__PURE__*/_react["default"].createElement(components.ChevronDown, null),
          onPress: this.toggleOpen,
          isSelected: isOpen
        }, value ? "State: ".concat(value.label) : "Select a State")
      }, /*#__PURE__*/_react["default"].createElement(_reactSelect["default"], {
        autoFocus: true,
        isMulti: true,
        closeMenuOnSelect: false,
        backspaceRemovesValue: false,
        components: {
          DropdownIndicator: _DropdownIndicator["default"],
          IndicatorSeparator: null,
          Option: _CheckboxOption["default"],
          GroupHeading: _CheckboxGroup.CheckboxGroupHeading,
          Group: _CheckboxGroup["default"]
        },
        controlShouldRenderValue: false,
        hideSelectedOptions: false,
        isClearable: false,
        menuIsOpen: true,
        classNamePrefix: "react-select",
        onChange: this.onSelectChange,
        options: _data.groupedOptions,
        placeholder: "Search...",
        styles: selectStyles,
        tabSelectsValue: false,
        value: value
      }));
    }
  }]);
  return PopoutExample;
}(_react.Component);
exports["default"] = PopoutExample;
_defineProperty(PopoutExample, "propTypes", {
  components: _propTypes["default"].shape({
    Dropdown: _propTypes["default"].func,
    DropdownButton: _propTypes["default"].func,
    DropdownButtonIcon: _propTypes["default"].func
  })
});
_defineProperty(PopoutExample, "defaultProps", {
  components: {}
});