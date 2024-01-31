"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _reactSelect = _interopRequireDefault(require("react-select"));
var _CheckboxGroup = _interopRequireWildcard(require("../lib/CheckboxGroup"));
var _CheckboxOption = _interopRequireDefault(require("../lib/CheckboxOption"));
var _ChevronDown = _interopRequireDefault(require("../lib/ChevronDown"));
var _Dropdown = _interopRequireDefault(require("../lib/Dropdown"));
var _DropdownButton = _interopRequireWildcard(require("../lib/DropdownButton"));
var _DropdownIndicator = _interopRequireDefault(require("../lib/DropdownIndicator"));
var _excluded = ["getDropdownButtonLabel", "placeholderButtonLabel", "components", "styles", "menuIsOpen", "rightAligned", "onChange", "width", "minWidth", "maxWidth", "value", "hideSearch", "minItemsForSearch", "options", "resetInputOnSelect", "onInputChange"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
var countOptions = function countOptions(opts) {
  if (!opts || !Array.isArray(opts)) return 0;
  return opts.reduce(function (acc, o) {
    return acc + (o.options ? countOptions(o.options) : 1);
  }, 0);
};
var augmentOptionsWithGroupLabel = function augmentOptionsWithGroupLabel(opts) {
  return opts.map(function (o) {
    if (!o.options) {
      return o;
    }
  });
};
var defaultStyles = {
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
  },
  groupHeading: function groupHeading(def, opts) {
    var provided = _objectSpread(_objectSpread({}, def), {}, {
      marginBottom: 0,
      padding: "8px 12px 4px",
      fontSize: "110%",
      display: "flex",
      alignItems: "center"
    });
    if (opts.checked) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        backgroundColor: '#ffffff',
        color: '000000'
      });
    }
    if (opts.indeterminate) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        backgroundColor: '#ffffff'
      });
    }
    return _objectSpread(_objectSpread({}, provided), {}, {
      ":hover": {
        backgroundColor: '#ececec'
      }
    });
  },
  group: function group(provided) {
    return _objectSpread(_objectSpread({}, provided), {}, {
      padding: 0
    });
  },
  dropdownButton: function dropdownButton(baseProvided, opts) {
    var provided = _objectSpread({}, baseProvided);
    ["width", "maxWidth", "minWidth"].forEach(function (widthProp) {
      if (opts[widthProp]) {
        provided[widthProp] = opts[widthProp];
      }
    });
    if (opts.isOpen) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        background: '#ffffff'
      });
    }
    return provided;
  },
  option: function option(provided, opts) {
    if (opts.isSelected) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        color: "#000",
        backgroundColor: '#ffffff',
        fontWeight: "bold",
        minWidth: 240
      });
    }
    return _objectSpread(_objectSpread({}, provided), {}, {
      backgroundColor: "transparent",
      minWidth: 240,
      ":hover": {
        backgroundColor: '#ffffff'
      }
    });
  }
};
var defaultComponents = {
  // these three components pertain to react-multiselect-checkboxes
  Dropdown: _Dropdown["default"],
  DropdownButton: _DropdownButton["default"],
  DropdownButtonIcon: _ChevronDown["default"],
  // these are react-select components, with sane defaults for react-multiselect-checkboxes
  DropdownIndicator: _DropdownIndicator["default"],
  IndicatorSeparator: null,
  Option: _CheckboxOption["default"],
  GroupHeading: _CheckboxGroup.CheckboxGroupHeading,
  Group: _CheckboxGroup["default"]
};
var valueShape = _propTypes["default"].shape({
  value: _propTypes["default"].any,
  label: _propTypes["default"].string,
  options: _propTypes["default"].array
});
var ReactMultiselectCheckboxes = /*#__PURE__*/function (_Component) {
  _inherits(ReactMultiselectCheckboxes, _Component);
  var _super = _createSuper(ReactMultiselectCheckboxes);
  function ReactMultiselectCheckboxes() {
    var _this;
    _classCallCheck(this, ReactMultiselectCheckboxes);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpen: false,
      value: undefined,
      inputValue: ""
    });
    _defineProperty(_assertThisInitialized(_this), "onSelectChange", function (value) {
      var _this$props;
      // this.toggleOpen();
      _this.setState({
        value: value
      });
      for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        rest[_key2 - 1] = arguments[_key2];
      }
      (_this$props = _this.props).onChange.apply(_this$props, [value].concat(rest));
    });
    _defineProperty(_assertThisInitialized(_this), "onInputChange", function (inputValue, event) {
      if (_this.props.onInputChange) {
        var _this$props2;
        for (var _len3 = arguments.length, restArgs = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
          restArgs[_key3 - 2] = arguments[_key3];
        }
        (_this$props2 = _this.props).onInputChange.apply(_this$props2, [inputValue, event].concat(restArgs));
      }
      switch (event.action) {
        case "input-change":
          _this.setState({
            inputValue: inputValue
          });
          break;
        case "menu-close":
          _this.setState({
            inputValue: ""
          });
          break;
        default:
          break;
      }
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
  _createClass(ReactMultiselectCheckboxes, [{
    key: "calcStyles",
    value: function calcStyles() {
      // This is messy, but conceptually simple. We're just replacing react-select's defaults
      // with the defaults from defaultStyles for user-provided style functions.
      var propsStyles = _objectSpread({}, this.props.styles);
      Object.entries(defaultStyles).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          k = _ref2[0],
          defaultFunc = _ref2[1];
        if (propsStyles[k]) {
          var passedInStyleFunc = propsStyles[k];
          propsStyles[k] = function (provided, selectState) {
            return passedInStyleFunc(defaultFunc(provided, selectState), selectState);
          };
        } else {
          propsStyles[k] = defaultFunc;
        }
      });
      return propsStyles;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
        getDropdownButtonLabel = _this$props3.getDropdownButtonLabel,
        placeholderButtonLabel = _this$props3.placeholderButtonLabel,
        propsComponents = _this$props3.components,
        propsStyles = _this$props3.styles,
        menuIsOpen = _this$props3.menuIsOpen,
        rightAligned = _this$props3.rightAligned,
        onChange = _this$props3.onChange,
        width = _this$props3.width,
        minWidth = _this$props3.minWidth,
        maxWidth = _this$props3.maxWidth,
        propsValue = _this$props3.value,
        hideSearch = _this$props3.hideSearch,
        minItemsForSearch = _this$props3.minItemsForSearch,
        options = _this$props3.options,
        resetInputOnSelect = _this$props3.resetInputOnSelect,
        onInputChange = _this$props3.onInputChange,
        rest = _objectWithoutProperties(_this$props3, _excluded);
      // Values can be duplicated between groups; how to disambiguate? Need to augment grouped options
      // with the group label.
      var components = _objectSpread(_objectSpread({}, defaultComponents), propsComponents);
      if (hideSearch || countOptions(options) < minItemsForSearch) {
        components.Control = function () {
          return null;
        };
      }
      var styles = this.calcStyles();
      var isOpen = typeof menuIsOpen === "boolean" ? menuIsOpen : this.state.isOpen;
      var value = propsValue || this.state.value;
      var inputValueIfDefined = resetInputOnSelect ? {} : {
        inputValue: this.state.inputValue
      };
      return /*#__PURE__*/_react["default"].createElement(components.Dropdown, {
        isOpen: isOpen,
        rightAligned: rightAligned,
        onClose: this.toggleOpen,
        target: /*#__PURE__*/_react["default"].createElement(components.DropdownButton, {
          iconAfter: /*#__PURE__*/_react["default"].createElement(components.DropdownButtonIcon, null),
          onPress: this.toggleOpen,
          isSelected: isOpen,
          style: styles.dropdownButton(_DropdownButton.defaultDropdownButtonStyle, {
            value: value,
            isOpen: isOpen,
            width: width,
            minWidth: minWidth,
            maxWidth: maxWidth
          })
        }, getDropdownButtonLabel({
          placeholderButtonLabel: placeholderButtonLabel,
          value: value
        }))
      }, /*#__PURE__*/_react["default"].createElement(_reactSelect["default"], _extends({
        autoFocus: true,
        isMulti: true,
        closeMenuOnSelect: false,
        backspaceRemovesValue: false,
        components: components,
        controlShouldRenderValue: false,
        hideSelectedOptions: false,
        isClearable: false,
        menuIsOpen: true,
        onChange: this.onSelectChange,
        placeholder: "Search...",
        styles: styles,
        tabSelectsValue: false,
        value: value,
        options: options,
        onInputChange: this.onInputChange,
        inputValue: this.state.inputValue,
        isSearchable: true
      }, rest)));
    }
  }]);
  return ReactMultiselectCheckboxes;
}(_react.Component);
exports["default"] = ReactMultiselectCheckboxes;
_defineProperty(ReactMultiselectCheckboxes, "propTypes", {
  components: _propTypes["default"].shape({
    Dropdown: _propTypes["default"].func,
    DropdownButton: _propTypes["default"].func,
    DropdownButtonIcon: _propTypes["default"].func
  }),
  options: _propTypes["default"].arrayOf(valueShape).isRequired,
  styles: _propTypes["default"].objectOf(_propTypes["default"].func),
  placeholderButtonLabel: _propTypes["default"].string,
  getDropdownButtonLabel: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  menuIsOpen: _propTypes["default"].bool,
  rightAligned: _propTypes["default"].bool,
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  minWidth: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  maxWidth: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  value: _propTypes["default"].oneOfType([valueShape, _propTypes["default"].arrayOf(valueShape)]),
  hideSearch: _propTypes["default"].bool,
  minItemsForSearch: _propTypes["default"].number,
  resetInputOnSelect: _propTypes["default"].bool,
  onInputChange: _propTypes["default"].func
});
_defineProperty(ReactMultiselectCheckboxes, "defaultProps", {
  menuIsOpen: undefined,
  components: {},
  styles: {},
  placeholderButtonLabel: "Select...",
  onChange: function onChange() {},
  getDropdownButtonLabel: function getDropdownButtonLabel(_ref3) {
    var placeholderButtonLabel = _ref3.placeholderButtonLabel,
      value = _ref3.value;
    if (!value) {
      return placeholderButtonLabel;
    }
    if (Array.isArray(value)) {
      if (value.length === 0) {
        return placeholderButtonLabel;
      }
      if (value.length === 1) {
        return value[0].label;
      }
      return "".concat(value.length, " selected");
    }
    return value.label;
  },
  rightAligned: false,
  width: null,
  minWidth: null,
  maxWidth: null,
  value: null,
  hideSearch: false,
  minItemsForSearch: 0,
  resetInputOnSelect: false,
  onInputChange: function onInputChange() {}
});