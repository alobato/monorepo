var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.js
var src_exports = {};
__export(src_exports, {
  AnimatedTHSticky: () => AnimatedTHSticky,
  Button: () => Button_default,
  ButtonIcon: () => ButtonIcon_default,
  ButtonWithLoading: () => ButtonWithLoading_default,
  Checkbox: () => Checkbox_default,
  CircularProgress: () => CircularProgress,
  CircularProgressWithBg: () => CircularProgressWithBg,
  CircularProgressWithLabel: () => CircularProgressWithLabel,
  Close: () => Close_default,
  FieldCheckbox: () => FieldCheckbox_default,
  FieldInput: () => FieldInput_default,
  FieldInputPassword: () => FieldInputPassword_default,
  FieldSelect: () => FieldSelect_default,
  FieldTextarea: () => FieldTextarea_default,
  Floating: () => Floating_default,
  FormErrorBox: () => FormErrorBox_default,
  Icon: () => Icon_default,
  Input: () => Input_default,
  InputMasked: () => InputMasked_default,
  InputPassword: () => InputPassword_default,
  InputSearch: () => InputSearch_default,
  LinkButton: () => LinkButton_default,
  Menu: () => Menu,
  MenuItem: () => MenuItem,
  Modal: () => Modal_default,
  MultiCheck: () => MultiCheck_default,
  MultiCheckLabelValue: () => MultiCheckLabelValue_default,
  NoWrap: () => NoWrap,
  OptimisticCheckbox: () => OptimisticCheckbox_default,
  Pagination: () => Pagination_default,
  PopOver: () => PopOver_default,
  Portal: () => Portal_default,
  Radio: () => Radio_default,
  ResizableTH: () => ResizableTH,
  Select: () => Select_default,
  SortLabel: () => SortLabel,
  SpinnerWithDelay: () => SpinnerWithDelay_default,
  Stepper: () => Stepper_default,
  Switch: () => Switch_default,
  TBody: () => TBody,
  TD: () => TD,
  TDSticky: () => TDSticky,
  TH: () => TH,
  THSticky: () => THSticky,
  THead: () => THead,
  TR: () => TR,
  Table: () => Table,
  TableContainer: () => TableContainer,
  TableDiv: () => TableDiv,
  Tabs: () => Tabs_default,
  Textarea: () => Textarea_default,
  Tooltip: () => Tooltip_default,
  Truncate: () => Truncate
});
module.exports = __toCommonJS(src_exports);

// src/Icon.jsx
var import_react = __toESM(require("react"));
function Icon({ className, path, height = 24, color = "currentColor", viewBox = "0 0 24 24" }) {
  return /* @__PURE__ */ import_react.default.createElement("svg", { className, viewBox, height, fill: color }, /* @__PURE__ */ import_react.default.createElement("path", { d: path }));
}
var Icon_default = Icon;

// src/FieldCheckbox.jsx
var import_react5 = __toESM(require("react"));

// src/Checkbox.jsx
var import_react2 = __toESM(require("react"));
var import_theme_ui = require("theme-ui");
function Checkbox({ checked = false, onChange, label, labelSx = {} }) {
  const content = /* @__PURE__ */ import_react2.default.createElement(import_theme_ui.Box, { onKeyPress: (e) => ["Enter", " "].includes(e.key) && onChange(!checked), onClick: () => onChange(!checked), sx: { display: "inline-block", position: "relative", cursor: "pointer", width: 18, minWidth: 18, height: 18, bg: "transparent", borderRadius: 2, borderWidth: 2, borderStyle: "solid", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" } }, /* @__PURE__ */ import_react2.default.createElement(import_theme_ui.Box, { sx: { position: "absolute", top: "1px", left: "4px", width: 6, height: 10, pointerEvents: "none", transform: "rotate(45deg)", borderTop: "none", borderRightColor: "text", borderRightStyle: "solid", borderRightWidth: 2, borderBottomColor: "text", borderBottomStyle: "solid", borderBottomWidth: 2, borderLeft: "none", opacity: checked ? 1 : 0 } }));
  if (label)
    return /* @__PURE__ */ import_react2.default.createElement(import_theme_ui.Flex, { sx: { alignItems: "center" } }, content, /* @__PURE__ */ import_react2.default.createElement(import_theme_ui.Label, { sx: { ml: 2, ...labelSx }, onClick: () => onChange(!checked) }, label));
  return content;
}
var Checkbox_default = Checkbox;

// src/FormErrorBox.jsx
var import_react3 = __toESM(require("react"));
var import_styled = __toESM(require("@emotion/styled"));
var import_react4 = require("@emotion/react");
var import_theme_ui2 = require("theme-ui");
var FormError = import_styled.default.div`
  font-size: 10px;
  line-height: 18px;
  ${(props) => {
  var _a, _b;
  return import_react4.css`color: ${((_b = (_a = props == null ? void 0 : props.theme) == null ? void 0 : _a.colors) == null ? void 0 : _b.danger) ? props.theme.colors.danger : "red"}`;
}}
  text-transform: uppercase;
  font-weight: 500;
`;
function FormErrorBox({ errors, touched, fieldName }) {
  return /* @__PURE__ */ import_react3.default.createElement(import_theme_ui2.Box, { sx: { minHeight: 18 } }, errors[fieldName] && touched[fieldName] && /* @__PURE__ */ import_react3.default.createElement(FormError, null, errors[fieldName]));
}
var FormErrorBox_default = FormErrorBox;

// src/FieldCheckbox.jsx
var FieldCheckbox = import_react5.default.forwardRef(({ form, field, ...rest }, ref) => {
  return /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement(Checkbox_default, { ...field, ...rest, checked: field.value, onChange: (checked) => form.setFieldValue(field.name, checked), ref }), /* @__PURE__ */ import_react5.default.createElement(FormErrorBox_default, { fieldName: field.name, errors: form.errors, touched: form.touched }));
});
FieldCheckbox.displayName = "FieldCheckbox";
var FieldCheckbox_default = FieldCheckbox;

// src/FieldInput.jsx
var import_react8 = __toESM(require("react"));

// src/Input.jsx
var import_react6 = __toESM(require("react"));
var import_css = require("@theme-ui/css");
var import_react7 = require("@emotion/react");
var import_css2 = require("@emotion/css");
var Input = import_react6.default.forwardRef(({ __themeKey = "forms", __css, variant = "input", sx: sx2, style, invalid, ...rest }, ref) => {
  var _a;
  const theme = (0, import_react7.useTheme)();
  const autofillStyles = {
    boxShadow: "inset 0 0 0 1000px var(--theme-ui-input-autofill-bg)",
    fontSize: "inherit",
    ":first-line": {
      fontSize: "1rem"
    }
  };
  const baseStyles = {
    display: "block",
    appearance: "none",
    fontSize: "inherit",
    lineHeight: 1,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: invalid ? ((_a = theme == null ? void 0 : theme.colors) == null ? void 0 : _a.danger) || "red" : `inherit`,
    color: "inherit",
    outline: "none",
    ":autofill, :autofill:hover, :autofill:focus": autofillStyles,
    ":-webkit-autofill, :-webkit-autofill:hover, :-webkit-autofill:focus": autofillStyles
  };
  const __cssStyles = (0, import_css.css)(__css)(theme);
  const variantInTheme = (0, import_css.get)(theme, `${__themeKey}.${variant}`) || (0, import_css.get)(theme, variant);
  const variantStyles = variantInTheme && (0, import_css.css)(variantInTheme)(theme);
  const sxPropStyles = (0, import_css.css)(sx2)(theme);
  const emotionStyle = {
    ...baseStyles,
    ...__cssStyles,
    ...variantStyles,
    ...sxPropStyles
  };
  const className = (0, import_css2.css)(emotionStyle);
  return /* @__PURE__ */ import_react6.default.createElement("input", { ref, className, style, ...rest });
});
Input.displayName = "Input";
var Input_default = Input;

// src/FieldInput.jsx
var FieldInput = import_react8.default.forwardRef(({ form, field, width, ...rest }, ref) => {
  return /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, null, /* @__PURE__ */ import_react8.default.createElement(Input_default, { ...field, ...rest, ref, invalid: form.touched[field.name] && form.errors[field.name] }), /* @__PURE__ */ import_react8.default.createElement(FormErrorBox_default, { fieldName: field.name, errors: form.errors, touched: form.touched }));
});
FieldInput.displayName = "FieldInput";
var FieldInput_default = FieldInput;

// src/FieldSelect.jsx
var import_react11 = __toESM(require("react"));

// src/Select.jsx
var import_react9 = __toESM(require("react"));
var import_css3 = require("@theme-ui/css");
var import_react10 = require("@emotion/react");
var import_css4 = require("@emotion/css");
var Select = import_react9.default.forwardRef(({ __themeKey = "forms", __css, variant = "select", sx: sx2, style, children, invalid = false, placeholder = null, multiple = false, value, ...rest }, ref) => {
  var _a;
  const theme = (0, import_react10.useTheme)();
  const baseStyles = {
    display: "inline-block",
    appearance: "none",
    fontSize: "inherit",
    lineHeight: 1,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "inherit",
    color: "inherit",
    outline: "none",
    backgroundRepeat: "no-repeat",
    backgroundImage: multiple ? "none" : `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iIzZlNzY4MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNC40MjcgOS40MjdsMy4zOTYgMy4zOTZhLjI1MS4yNTEgMCAwMC4zNTQgMGwzLjM5Ni0zLjM5NkEuMjUuMjUgMCAwMDExLjM5NiA5SDQuNjA0YS4yNS4yNSAwIDAwLS4xNzcuNDI3ek00LjQyMyA2LjQ3TDcuODIgMy4wNzJhLjI1LjI1IDAgMDEuMzU0IDBMMTEuNTcgNi40N2EuMjUuMjUgMCAwMS0uMTc3LjQyN0g0LjZhLjI1LjI1IDAgMDEtLjE3Ny0uNDI3eiIgLz48L3N2Zz4=")`,
    backgroundPosition: "right 4px center",
    backgroundSize: "16px",
    paddingRight: "24px"
  };
  const __cssStyles = (0, import_css3.css)(__css)(theme);
  const variantInTheme = (0, import_css3.get)(theme, `${__themeKey}.${variant}`) || (0, import_css3.get)(theme, variant);
  const variantStyles = variantInTheme && (0, import_css3.css)(variantInTheme)(theme);
  const sxPropStyles = (0, import_css3.css)(sx2)(theme);
  const invalidObj = invalid ? { borderColor: ((_a = theme == null ? void 0 : theme.colors) == null ? void 0 : _a.danger) || "red" } : {};
  const emotionStyle = {
    ...baseStyles,
    ...__cssStyles,
    ...variantStyles,
    ...sxPropStyles,
    ...invalidObj
  };
  const className = (0, import_css4.css)(emotionStyle);
  const defaultValue = multiple ? [] : "";
  if (!value) {
    value = defaultValue;
  }
  return /* @__PURE__ */ import_react9.default.createElement("select", { ref, className, style, multiple, value, ...rest }, placeholder !== void 0 && placeholder !== null && /* @__PURE__ */ import_react9.default.createElement("option", { value: "" }, placeholder), children);
});
var Select_default = Select;

// src/FieldSelect.jsx
var FieldSelect = import_react11.default.forwardRef(({ form, field, children, ...rest }, ref) => {
  return /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null, /* @__PURE__ */ import_react11.default.createElement(Select_default, { ...field, ...rest, ref, invalid: form.touched[field.name] && form.errors[field.name] }, children), /* @__PURE__ */ import_react11.default.createElement(FormErrorBox_default, { fieldName: field.name, errors: form.errors, touched: form.touched }));
});
FieldSelect.displayName = "FieldSelect";
var FieldSelect_default = FieldSelect;

// src/FieldInputPassword.jsx
var import_react14 = __toESM(require("react"));

// src/InputPassword.jsx
var import_react12 = __toESM(require("react"));
var import_theme_ui3 = require("theme-ui");
var import_css5 = require("@theme-ui/css");
var import_react13 = require("@emotion/react");
var InputPassword = import_react12.default.forwardRef(({ __themeKey = "forms", __css, variant = "input", sx: sx2, style, invalid, ...rest }, ref) => {
  var _a;
  const theme = (0, import_react13.useTheme)();
  const autofillStyles = {
    boxShadow: "inset 0 0 0 1000px var(--theme-ui-input-autofill-bg)",
    fontSize: "inherit",
    ":first-line": {
      fontSize: "1rem"
    }
  };
  const baseStyles = {
    fontSize: "inherit",
    lineHeight: "inherit",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: invalid ? ((_a = theme == null ? void 0 : theme.colors) == null ? void 0 : _a.danger) || "red" : `inherit`,
    color: "inherit",
    outline: "none",
    backgroundColor: "transparent",
    ":autofill, :autofill:hover, :autofill:focus": autofillStyles,
    ":-webkit-autofill, :-webkit-autofill:hover, :-webkit-autofill:focus": autofillStyles
  };
  const __cssStyles = (0, import_css5.css)(__css)(theme);
  const variantInTheme = (0, import_css5.get)(theme, `${__themeKey}.${variant}`) || (0, import_css5.get)(theme, variant);
  const variantStyles = variantInTheme && (0, import_css5.css)(variantInTheme)(theme);
  const sxPropStyles = (0, import_css5.css)(sx2)(theme);
  const emotionStyle = {
    ...baseStyles,
    ...__cssStyles,
    ...variantStyles,
    ...sxPropStyles
  };
  const [passwordShown, setPasswordShown] = import_react12.default.useState(false);
  const togglePasswordVisiblity = (e) => {
    e.preventDefault();
    setPasswordShown((currentPasswordShown) => !currentPasswordShown);
  };
  const pathIcon = passwordShown ? "M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" : "M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z";
  return /* @__PURE__ */ import_react12.default.createElement(import_theme_ui3.Flex, { sx: { ...emotionStyle, justifyContent: "space-between", position: "relative", alignItems: "center", padding: 0, paddingRight: 1 }, style }, /* @__PURE__ */ import_react12.default.createElement("input", { type: passwordShown ? "text" : "password", ...rest, style: { width: "100%", border: 0, backgroundColor: "transparent", outline: "none", padding: (emotionStyle == null ? void 0 : emotionStyle.padding) || 0, lineHeight: (emotionStyle == null ? void 0 : emotionStyle.lineHeight) || "inherit", fontSize: (emotionStyle == null ? void 0 : emotionStyle.fontSize) || "inherit", color: (emotionStyle == null ? void 0 : emotionStyle.color) || "inherit" }, ref }), /* @__PURE__ */ import_react12.default.createElement(import_theme_ui3.Box, { sx: { cursor: "pointer", display: "flex", userSelect: "none" }, onClick: togglePasswordVisiblity }, /* @__PURE__ */ import_react12.default.createElement("svg", { width: 20, height: 20, viewBox: "0 0 24 24", fill: "currentColor" }, /* @__PURE__ */ import_react12.default.createElement("path", { d: pathIcon }))));
});
InputPassword.displayName = "InputPassword";
var InputPassword_default = InputPassword;

// src/FieldInputPassword.jsx
var FieldInputPassword = import_react14.default.forwardRef(({ form, field, ...rest }, ref) => {
  return /* @__PURE__ */ import_react14.default.createElement(import_react14.default.Fragment, null, /* @__PURE__ */ import_react14.default.createElement(InputPassword_default, { ...field, ...rest, ref, invalid: form.touched[field.name] && form.errors[field.name] }), /* @__PURE__ */ import_react14.default.createElement(FormErrorBox_default, { fieldName: field.name, errors: form.errors, touched: form.touched }));
});
FieldInputPassword.displayName = "FieldInputPassword";
var FieldInputPassword_default = FieldInputPassword;

// src/FieldTextarea.jsx
var import_react17 = __toESM(require("react"));

// src/Textarea.jsx
var import_react15 = __toESM(require("react"));
var import_css6 = require("@theme-ui/css");
var import_react16 = require("@emotion/react");
var import_css7 = require("@emotion/css");
var Textarea = import_react15.default.forwardRef(({ __themeKey = "forms", __css, variant = "input", sx: sx2, style, invalid, ...rest }, ref) => {
  var _a;
  const theme = (0, import_react16.useTheme)();
  const autofillStyles = {
    boxShadow: "inset 0 0 0 1000px var(--theme-ui-input-autofill-bg)",
    fontSize: "inherit",
    ":first-line": {
      fontSize: "1rem"
    }
  };
  const baseStyles = {
    display: "block",
    appearance: "none",
    fontSize: "inherit",
    lineHeight: 1,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: invalid ? ((_a = theme == null ? void 0 : theme.colors) == null ? void 0 : _a.danger) || "red" : `inherit`,
    color: "inherit",
    outline: "none",
    ":autofill, :autofill:hover, :autofill:focus": autofillStyles,
    ":-webkit-autofill, :-webkit-autofill:hover, :-webkit-autofill:focus": autofillStyles
  };
  const __cssStyles = (0, import_css6.css)(__css)(theme);
  const variantInTheme = (0, import_css6.get)(theme, `${__themeKey}.${variant}`) || (0, import_css6.get)(theme, variant);
  const variantStyles = variantInTheme && (0, import_css6.css)(variantInTheme)(theme);
  const sxPropStyles = (0, import_css6.css)(sx2)(theme);
  const emotionStyle = {
    ...baseStyles,
    ...__cssStyles,
    ...variantStyles,
    ...sxPropStyles
  };
  const className = (0, import_css7.css)(emotionStyle);
  return /* @__PURE__ */ import_react15.default.createElement("textarea", { ref, className, style, ...rest });
});
Textarea.displayName = "Textarea";
var Textarea_default = Textarea;

// src/FieldTextarea.jsx
var FieldTextarea = import_react17.default.forwardRef(({ form, field, width, ...rest }, ref) => {
  return /* @__PURE__ */ import_react17.default.createElement(import_react17.default.Fragment, null, /* @__PURE__ */ import_react17.default.createElement(Textarea_default, { ...field, ...rest, ref, invalid: form.touched[field.name] && form.errors[field.name] }), /* @__PURE__ */ import_react17.default.createElement(FormErrorBox_default, { fieldName: field.name, errors: form.errors, touched: form.touched }));
});
FieldTextarea.displayName = "FieldTextarea";
var FieldTextarea_default = FieldTextarea;

// src/InputMasked.jsx
var import_react18 = __toESM(require("react"));
var import_css8 = require("@theme-ui/css");
var import_react19 = require("@emotion/react");
var import_css9 = require("@emotion/css");
var import_react_imask = require("react-imask");
var InputMasked = import_react18.default.forwardRef(({ __themeKey = "forms", __css, variant = "input", sx: sx2, style, invalid, ...rest }, ref) => {
  var _a;
  const theme = (0, import_react19.useTheme)();
  const autofillStyles = {
    boxShadow: "inset 0 0 0 1000px var(--theme-ui-input-autofill-bg)",
    fontSize: "inherit",
    ":first-line": {
      fontSize: "1rem"
    }
  };
  const baseStyles = {
    display: "block",
    appearance: "none",
    fontSize: "inherit",
    lineHeight: "inherit",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: invalid ? ((_a = theme == null ? void 0 : theme.colors) == null ? void 0 : _a.danger) || "red" : `inherit`,
    color: "inherit",
    outline: "none",
    ":autofill, :autofill:hover, :autofill:focus": autofillStyles,
    ":-webkit-autofill, :-webkit-autofill:hover, :-webkit-autofill:focus": autofillStyles
  };
  const __cssStyles = (0, import_css8.css)(__css)(theme);
  const variantInTheme = (0, import_css8.get)(theme, `${__themeKey}.${variant}`) || (0, import_css8.get)(theme, variant);
  const variantStyles = variantInTheme && (0, import_css8.css)(variantInTheme)(theme);
  const sxPropStyles = (0, import_css8.css)(sx2)(theme);
  const emotionStyle = {
    ...baseStyles,
    ...__cssStyles,
    ...variantStyles,
    ...sxPropStyles
  };
  const className = (0, import_css9.css)(emotionStyle);
  return /* @__PURE__ */ import_react18.default.createElement(import_react_imask.IMaskInput, { className, style, ...rest, ref });
});
InputMasked.displayName = "InputMasked";
var InputMasked_default = InputMasked;

// src/InputSearch.jsx
var import_react20 = __toESM(require("react"));
var import_theme_ui4 = require("theme-ui");
var import_css10 = require("@theme-ui/css");
var import_react21 = require("@emotion/react");
var import_use_callback_ref = require("use-callback-ref");
var InputSearch = import_react20.default.forwardRef(({ __themeKey = "forms", __css, variant = "input", sx: sx2, style, invalid, value = "", onChange, ...rest }, ref) => {
  var _a;
  const theme = (0, import_react21.useTheme)();
  const localRef = import_react20.default.useRef();
  const autofillStyles = {
    boxShadow: "inset 0 0 0 1000px var(--theme-ui-input-autofill-bg)",
    fontSize: "inherit",
    ":first-line": {
      fontSize: "1rem"
    }
  };
  const baseStyles = {
    appearance: "none",
    fontSize: "inherit",
    lineHeight: 1,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: invalid ? ((_a = theme == null ? void 0 : theme.colors) == null ? void 0 : _a.danger) || "red" : `inherit`,
    color: "inherit",
    outline: "none",
    backgroundColor: "transparent",
    "input[type=search]": {
      "WebkitAppearance": "textfield",
      "WebkitBoxSizing": "content-box"
    },
    'input[type="search"]::-webkit-search-decoration': {
      "WebkitAppearance": "none",
      appearance: "none"
    },
    'input[type="search"]::-webkit-search-cancel-button': {
      "WebkitAppearance": "none",
      appearance: "none"
    },
    'input[type="search"]::-webkit-search-results-button': {
      "WebkitAppearance": "none",
      appearance: "none"
    },
    'input[type="search"]::-webkit-search-results-decoration': {
      "WebkitAppearance": "none",
      appearance: "none"
    },
    ":autofill, :autofill:hover, :autofill:focus": autofillStyles,
    ":-webkit-autofill, :-webkit-autofill:hover, :-webkit-autofill:focus": autofillStyles
  };
  const __cssStyles = (0, import_css10.css)(__css)(theme);
  const variantInTheme = (0, import_css10.get)(theme, `${__themeKey}.${variant}`) || (0, import_css10.get)(theme, variant);
  const variantStyles = variantInTheme && (0, import_css10.css)(variantInTheme)(theme);
  const sxPropStyles = (0, import_css10.css)(sx2)(theme);
  const emotionStyle = {
    ...baseStyles,
    ...__cssStyles,
    ...variantStyles,
    ...sxPropStyles
  };
  function handleIconClick(e) {
    if (value) {
      e.target.value = "";
      onChange(e);
    } else {
      localRef.current.focus();
    }
  }
  const pathIcon = !value ? "M14.76 13.27L20.49 19 19 20.49l-5.73-5.73C12.2 15.53 10.91 16 9.5 16A6.5 6.5 0 1116 9.5c0 1.41-.47 2.7-1.24 3.77zM9.5 5C7.01 5 5 7.01 5 9.5S7.01 14 9.5 14 14 11.99 14 9.5 11.99 5 9.5 5z" : "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z";
  return /* @__PURE__ */ import_react20.default.createElement(import_theme_ui4.Flex, { sx: { ...emotionStyle, flexWrap: "nowrap", justifyContent: "space-between", alignItems: "center", p: 0 } }, /* @__PURE__ */ import_react20.default.createElement(import_theme_ui4.Box, { sx: { cursor: "pointer", userSelect: "none", p: 1, pl: 2, pr: 1, minWidth: 32 }, onClick: handleIconClick }, /* @__PURE__ */ import_react20.default.createElement("svg", { width: 20, height: 20, viewBox: "0 0 24 24", fill: "currentColor" }, /* @__PURE__ */ import_react20.default.createElement("path", { d: pathIcon }))), /* @__PURE__ */ import_react20.default.createElement(import_theme_ui4.Flex, { sx: { flexGrow: 1 } }, /* @__PURE__ */ import_react20.default.createElement("input", { type: "search", value, onChange, ...rest, style: { width: "100%", border: 0, backgroundColor: "transparent", outline: "none", padding: (emotionStyle == null ? void 0 : emotionStyle.padding) || 0, lineHeight: (emotionStyle == null ? void 0 : emotionStyle.lineHeight) || "inherit", fontSize: (emotionStyle == null ? void 0 : emotionStyle.fontSize) || "inherit", color: (emotionStyle == null ? void 0 : emotionStyle.color) || "inherit", paddingLeft: 0 }, ref: (0, import_use_callback_ref.useMergeRefs)([localRef, ref]) })));
});
InputSearch.displayName = "InputSearch";
var InputSearch_default = InputSearch;

// src/ButtonWithLoading.jsx
var import_react22 = __toESM(require("react"));
var import_css11 = require("@theme-ui/css");
var import_react23 = require("@emotion/react");
var import_theme_ui5 = require("theme-ui");
function ButtonWithLoading({ children, loading, className, __themeKey = "buttons", __css, variant = "primary", sx: sx2, ...rest }) {
  const theme = (0, import_react23.useTheme)();
  const baseStyles = {
    padding: 0,
    border: 0,
    background: "transparent",
    appearance: "none",
    cursor: "pointer",
    position: "relative",
    userSelect: "none",
    lineHeight: 1,
    whiteSpace: "nowrap",
    fontFamily: "inherit",
    fontSize: "inherit",
    pointerEvents: loading ? "none" : "auto",
    bg: (0, import_css11.get)(theme, `${__themeKey}.${variant}.bg`) || (0, import_css11.get)(theme, `colors.${variant}`),
    color: (0, import_css11.get)(theme, `${__themeKey}.${variant}.color`) || (0, import_css11.get)(theme, `colors.${variant}Contrast`),
    "& > i": {
      display: "inline-block",
      lineHeight: 0,
      pointerEvents: "none",
      verticalAlign: "-2px",
      opacity: loading ? 1 : 0,
      marginLeft: loading ? 0 : "-16px",
      marginRight: loading ? "8px" : 0,
      transition: "all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)"
    }
  };
  const __cssStyles = (0, import_css11.css)(__css)(theme);
  const variantInTheme = (0, import_css11.get)(theme, `${__themeKey}.${variant}`) || (0, import_css11.get)(theme, variant);
  const variantStyles = variantInTheme && (0, import_css11.css)(variantInTheme)(theme);
  const sxPropStyles = (0, import_css11.css)(sx2)(theme);
  const style = {
    ...baseStyles,
    ...__cssStyles,
    ...variantStyles,
    ...sxPropStyles
  };
  return /* @__PURE__ */ import_react22.default.createElement(import_theme_ui5.Box, { as: "button", className, sx: style, ...rest }, loading && /* @__PURE__ */ import_react22.default.createElement("i", null, /* @__PURE__ */ import_react22.default.createElement("svg", { height: 16, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid" }, /* @__PURE__ */ import_react22.default.createElement("circle", { cx: "50", cy: "50", fill: "none", stroke: "currentColor", strokeWidth: "10", r: "35", strokeDasharray: "164.93361431346415 56.97787143782138", transform: "rotate(305.844 50 50)" }, /* @__PURE__ */ import_react22.default.createElement("animateTransform", { attributeName: "transform", type: "rotate", calcMode: "linear", values: "0 50 50;360 50 50", keyTimes: "0;1", dur: "1s", begin: "0s", repeatCount: "indefinite" })))), /* @__PURE__ */ import_react22.default.createElement("span", { style: { display: "inline-block", pointerEvents: "none" } }, children));
}
ButtonWithLoading.displayName = "ButtonWithLoading";
var ButtonWithLoading_default = ButtonWithLoading;

// src/Button.jsx
var import_react24 = __toESM(require("react"));
var import_css12 = require("@theme-ui/css");
var import_react25 = require("@emotion/react");
var import_css13 = require("@emotion/css");
var Button = import_react24.default.forwardRef(({ __themeKey = "buttons", __css, variant = "primary", sx: sx2, style, children, ...rest }, ref) => {
  const theme = (0, import_react25.useTheme)();
  const baseStyles = {
    padding: 0,
    border: 0,
    appearance: "none",
    cursor: "pointer",
    position: "relative",
    userSelect: "none",
    lineHeight: 1,
    whiteSpace: "nowrap",
    fontFamily: "inherit",
    fontSize: "inherit",
    background: (0, import_css12.get)(theme, `${__themeKey}.${variant}.bg`) || (0, import_css12.get)(theme, `colors.${variant}`) || "transparent",
    color: (0, import_css12.get)(theme, `${__themeKey}.${variant}.color`) || (0, import_css12.get)(theme, `colors.${variant}Contrast`) || "inherit"
  };
  const __cssStyles = (0, import_css12.css)(__css)(theme);
  const variantInTheme = (0, import_css12.get)(theme, `${__themeKey}.${variant}`) || (0, import_css12.get)(theme, variant);
  const variantStyles = variantInTheme && (0, import_css12.css)(variantInTheme)(theme);
  const sxPropStyles = (0, import_css12.css)(sx2)(theme);
  const emotionStyle = {
    ...baseStyles,
    ...__cssStyles,
    ...variantStyles,
    ...sxPropStyles
  };
  const className = (0, import_css13.css)(emotionStyle);
  return /* @__PURE__ */ import_react24.default.createElement("button", { className, style, ...rest, ref }, children);
});
Button.displayName = "Button";
var Button_default = Button;

// src/ButtonIcon.jsx
var import_react26 = __toESM(require("react"));
var import_css14 = require("@theme-ui/css");
var import_react27 = require("@emotion/react");
var import_css15 = require("@emotion/css");
var ButtonIcon = import_react26.default.forwardRef(({ __themeKey = "icons", __css, variant = "primary", sx: sx2, style, path, height = 16, ...rest }, ref) => {
  const theme = (0, import_react27.useTheme)();
  const baseStyles = {
    padding: 0,
    border: 0,
    appearance: "none",
    cursor: "pointer",
    background: (0, import_css14.get)(theme, `${__themeKey}.${variant}.bg`) || "transparent",
    color: (0, import_css14.get)(theme, `${__themeKey}.${variant}.color`) || "inherit"
  };
  const __cssStyles = (0, import_css14.css)(__css)(theme);
  const variantInTheme = (0, import_css14.get)(theme, `${__themeKey}.${variant}`) || (0, import_css14.get)(theme, variant);
  const variantStyles = variantInTheme && (0, import_css14.css)(variantInTheme)(theme);
  const sxPropStyles = (0, import_css14.css)(sx2)(theme);
  const emotionStyle = {
    ...baseStyles,
    ...__cssStyles,
    ...sxPropStyles
  };
  const className = (0, import_css15.css)(emotionStyle);
  return /* @__PURE__ */ import_react26.default.createElement("button", { className, style, ...rest, ref }, /* @__PURE__ */ import_react26.default.createElement("svg", { viewBox: "0 0 24 24", height, fill: "currentColor" }, /* @__PURE__ */ import_react26.default.createElement("path", { d: path })));
});
ButtonIcon.displayName = "ButtonIcon";
var ButtonIcon_default = ButtonIcon;

// src/PopOver.jsx
var import_react28 = __toESM(require("react"));
var import_react_dom = require("react-dom");
var import_react_popper = require("react-popper");
var import_web = require("@react-spring/web");
var import_styled2 = __toESM(require("@emotion/styled"));
var import_react29 = require("@emotion/react");
var import_use_callback_ref2 = require("use-callback-ref");
var Portal = ({ children, rootElementId }) => (0, import_react_dom.createPortal)(children, document.getElementById(rootElementId));
var PopperContainer = import_styled2.default.div`
  font-size: 13px;
  padding-top: 0.5em;
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 8px;
  z-index: 1;
  ${(props) => {
  var _a, _b;
  return ((_b = (_a = props == null ? void 0 : props.theme) == null ? void 0 : _a.colors) == null ? void 0 : _b.elevated) ? import_react29.css`background-color: ${props.theme.colors.elevated};` : import_react29.css`background-color: lightgray;`;
}}

  #arrow {
    position: absolute;
    width: 10px;
    height: 10px;
    &:after {
      content: ' ';
      background-color: ${(props) => {
  var _a, _b;
  return ((_b = (_a = props == null ? void 0 : props.theme) == null ? void 0 : _a.colors) == null ? void 0 : _b.elevated) ? props.theme.colors.elevated : "lightgray";
}};
      position: absolute;
      top: -13px; /* padding + popper height */
      left: 0;
      transform: rotate(45deg);
      width: 10px;
      height: 10px;
    }
  }

  &[data-popper-placement^='top'] > #arrow {
    bottom: -18px;
  }
`;
var PopOver = ({ children, render, withArrow = true, rootElementId = "portal-root" }) => {
  const ref = import_react28.default.useRef();
  const [open, setOpen] = import_react28.default.useState(false);
  const [referenceElement, setReferenceElement] = import_react28.default.useState(null);
  const [popperElement, setPopperElement] = import_react28.default.useState(null);
  const [arrowElement, setArrowElement] = import_react28.default.useState(null);
  const { styles, attributes } = (0, import_react_popper.usePopper)(referenceElement, popperElement, {
    modifiers: [
      { name: "arrow", options: { element: arrowElement } },
      { name: "offset", options: { offset: [0, 4] } }
    ]
  });
  const springStyle = (0, import_web.useSpring)(open ? { opacity: 1, immediate: true } : { opacity: 0, immediate: true });
  const wrapperRef = import_react28.default.useRef(null);
  const handleClick = (e) => {
    if (e.button === 2)
      return false;
    if (e.target.id === "MenuItem") {
      return setTimeout(() => {
        setOpen(false);
      }, 100);
    }
    if (ref.current && ref.current.contains(e.target))
      return setOpen((current) => !current);
    if (wrapperRef.current && !wrapperRef.current.contains(e.target))
      return setOpen(false);
  };
  import_react28.default.useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
  return /* @__PURE__ */ import_react28.default.createElement(import_react28.default.Fragment, null, /* @__PURE__ */ import_react28.default.createElement("span", { ref: (0, import_use_callback_ref2.useMergeRefs)([ref, setReferenceElement]) }, children), open && /* @__PURE__ */ import_react28.default.createElement(Portal, { rootElementId }, /* @__PURE__ */ import_react28.default.createElement(import_web.a.div, { style: springStyle }, /* @__PURE__ */ import_react28.default.createElement("div", { ref: wrapperRef }, /* @__PURE__ */ import_react28.default.createElement(PopperContainer, { ref: setPopperElement, style: styles.popper, ...attributes.popper }, withArrow && /* @__PURE__ */ import_react28.default.createElement("div", { ref: setArrowElement, style: styles.arrow, id: "arrow" }), render({ onRequestClose: () => setOpen(false) }))))));
};
var PopOver_default = PopOver;

// src/Tooltip.jsx
var import_react30 = __toESM(require("react"));
var import_react_popper2 = require("react-popper");
var import_use_callback_ref3 = require("use-callback-ref");
var import_web2 = require("@react-spring/web");
var import_react_dom2 = require("react-dom");
var import_use_events = require("use-events");
var import_hooks = require("hooks");
var import_styled3 = __toESM(require("@emotion/styled"));
var import_react31 = require("@emotion/react");
var styleContent = import_react31.css`
  position: absolute;

  @media (hover: none) {
    display: none;
  }
`;
var styleArrow = import_react31.css`
  position: absolute;
  width: 16px;
  height: 16px;

  &:after {
    position: absolute;
    width: 0;
    height: 0;
    content: '';
    pointer-events: none;
  }

  &:after {
    border: 8px solid transparent;
  }
`;
var styleArrowBottom = import_react31.css`
  bottom: -8px;

  &:after {
    left: 0;
    bottom: 0;
    border-top-color: #dddddd;
    border-bottom: none;
  }
`;
var styleArrowTop = import_react31.css`
  top: -8px;

  &:after {
    top: 0;
    left: 0;
    border-bottom-color: #dddddd;
    border-top: none;
  }
`;
var styleArrowLeft = import_react31.css`
  left: -8px;

  @media (hover: none) {
    display: none;
  }

  &:after {
    left: 0;
    top: 0;
    border-right-color: #dddddd;
    border-left: none;
  }
`;
var styleArrowRight = import_react31.css`
  right: -8px;

  @media (hover: none) {
    display: none;
  }

  &:after {
    right: 0;
    top: 0;
    border-left-color: #dddddd;
    border-right: none;
  }
`;
var PopperContainer2 = import_styled3.default.div`
  background-color: #dddddd;
  border: 1px solid #dddddd;
  padding: 6px 8px 6px 8px;
  font-size: 11px;
  font-weight: 200;
  border-radius: 4px;
  pointer-events: none;
  z-index: 1002;

  @media (hover: none) {
    display: none;
  }

  #arrow {
    position: absolute;
    width: 10px;
    height: 10px;
    &:after {
      content: ' ';
      background-color: #dddddd;
      position: absolute;
      top: -13px; /* padding + popper height */
      left: 0;
      transform: rotate(45deg);
      width: 10px;
      height: 10px;
    }
  }

  &[data-popper-placement^='top'] > #arrow {
    bottom: -18px;
  }
`;
var Portal2 = ({ children, rootElementId }) => (0, import_react_dom2.createPortal)(children, document.getElementById(rootElementId));
var Tooltip = ({ children, defaultPlacement = "bottom", offset = 16, withArrow = true, delay: delay2 = 600, immediate = true, pre = false, rootElementId = "portal-root", tip = "" }) => {
  const ref = import_react30.default.useRef();
  const [active, bind] = (0, import_use_events.useHover)();
  const [shown, setShown] = import_react30.default.useState(false);
  const timeout = (0, import_hooks.useTimeout)(() => {
    setShown(active);
  }, delay2);
  const [referenceElement, setReferenceElement] = import_react30.default.useState(null);
  const [popperElement, setPopperElement] = import_react30.default.useState(null);
  const [arrowElement, setArrowElement] = import_react30.default.useState(null);
  const { styles, attributes } = (0, import_react_popper2.usePopper)(referenceElement, popperElement, {
    placement: defaultPlacement,
    modifiers: [
      { name: "arrow", options: { element: arrowElement } },
      { name: "offset", options: { offset: [0, offset] } }
    ]
  });
  import_react30.default.useEffect(() => {
    if (active) {
      if (delay2 === 0) {
        setShown(active);
      } else {
        timeout.start();
      }
    } else {
      if (delay2 === 0) {
        setShown(active);
      } else {
        timeout.stop();
        setShown(false);
      }
    }
  }, [active, timeout, delay2]);
  const transition = (0, import_web2.useTransition)(shown, {
    immediate,
    from: { opacity: 0 },
    enter: {
      opacity: 1,
      config: () => {
        return { ...import_web2.config.default, duration: 300 };
      }
    },
    leave: {
      opacity: 0,
      config: () => {
        return { ...import_web2.config.default, duration: 100 };
      }
    }
  });
  const placement = attributes && attributes.popper && attributes.popper["data-popper-placement"];
  return /* @__PURE__ */ import_react30.default.createElement(import_react30.default.Fragment, null, /* @__PURE__ */ import_react30.default.createElement("span", { ref: (0, import_use_callback_ref3.useMergeRefs)([ref, setReferenceElement]), ...bind }, children), transition((style, item) => {
    return item && /* @__PURE__ */ import_react30.default.createElement(Portal2, { rootElementId }, /* @__PURE__ */ import_react30.default.createElement(import_web2.animated.div, { style: { opacity: style.opacity } }, /* @__PURE__ */ import_react30.default.createElement(PopperContainer2, { css: styleContent, ref: setPopperElement, style: styles.popper, ...attributes.popper }, /* @__PURE__ */ import_react30.default.createElement("div", { ref: setArrowElement, style: styles.arrow, id: "arrow", css: [styleArrow, placement && placement.startsWith("top") && styleArrowBottom, placement && placement.startsWith("bottom") && styleArrowTop, placement && placement.startsWith("left") && styleArrowRight, placement && placement.startsWith("right") && styleArrowLeft] }), withArrow && /* @__PURE__ */ import_react30.default.createElement("div", { ref: setArrowElement, style: styles.arrow, id: "arrow" }), pre ? /* @__PURE__ */ import_react30.default.createElement("pre", null, tip) : /* @__PURE__ */ import_react30.default.createElement(import_react30.default.Fragment, null, tip))));
  }));
};
var Tooltip_default = Tooltip;

// src/LinkButton.jsx
var import_react32 = __toESM(require("react"));
var import_css16 = require("@theme-ui/css");
var import_react33 = require("@emotion/react");
var import_css17 = require("@emotion/css");
var import_react_router_dom = require("react-router-dom");
var LinkButton = import_react32.default.forwardRef(({ __themeKey = "buttons", __css, variant = "primary", sx: sx2, style, children, ...rest }, ref) => {
  const theme = (0, import_react33.useTheme)();
  const baseStyles = {
    display: "inline-flex",
    padding: 0,
    border: 0,
    cursor: "pointer",
    position: "relative",
    userSelect: "none",
    outline: "none",
    lineHeight: 1,
    whiteSpace: "nowrap",
    fontFamily: "inherit",
    fontSize: "inherit",
    background: (0, import_css16.get)(theme, `${__themeKey}.${variant}.bg`) || (0, import_css16.get)(theme, `colors.${variant}`) || "transparent",
    color: (0, import_css16.get)(theme, `${__themeKey}.${variant}.color`) || (0, import_css16.get)(theme, `colors.${variant}Contrast`) || "inherit"
  };
  const __cssStyles = (0, import_css16.css)(__css)(theme);
  const variantInTheme = (0, import_css16.get)(theme, `${__themeKey}.${variant}`) || (0, import_css16.get)(theme, variant);
  const variantStyles = variantInTheme && (0, import_css16.css)(variantInTheme)(theme);
  const sxPropStyles = (0, import_css16.css)(sx2)(theme);
  const emotionStyle = {
    ...baseStyles,
    ...__cssStyles,
    ...variantStyles,
    ...sxPropStyles
  };
  const className = (0, import_css17.css)(emotionStyle);
  return /* @__PURE__ */ import_react32.default.createElement(import_react_router_dom.Link, { className, style, ...rest, ref }, children);
});
LinkButton.displayName = "LinkButton";
var LinkButton_default = LinkButton;

// src/Modal.jsx
var import_react34 = __toESM(require("react"));
var import_react_dom3 = require("react-dom");
var import_web3 = require("@react-spring/web");
var import_css18 = require("@theme-ui/css");
var import_react35 = require("@emotion/react");
var import_css19 = require("@emotion/css");
var import_hooks2 = require("hooks");
function ModalContent({ __themeKey = "modals", __css, variant = "large", sx: sx2, style, ...rest }) {
  const theme = (0, import_react35.useTheme)();
  const baseStyles = {
    position: "relative",
    zIndex: "1001",
    margin: "0 auto",
    with: "calc(100% - 32px)",
    maxWidth: 1e3,
    top: 16,
    backgroundColor: "white"
  };
  const __cssStyles = (0, import_css18.css)(__css)(theme);
  const variantInTheme = (0, import_css18.get)(theme, `${__themeKey}.${variant}`) || (0, import_css18.get)(theme, variant);
  const variantStyles = variantInTheme && (0, import_css18.css)(variantInTheme)(theme);
  const sxPropStyles = (0, import_css18.css)(sx2)(theme);
  const emotionStyle = {
    ...baseStyles,
    ...__cssStyles,
    ...variantStyles,
    ...sxPropStyles
  };
  const className = (0, import_css19.css)(emotionStyle);
  return /* @__PURE__ */ import_react34.default.createElement(import_web3.animated.div, { className, style, ...rest });
}
var ModalBody = ({ children }) => {
  const mainDivRef = import_react34.default.useRef(document.createElement("div"));
  const modalRootRef = import_react34.default.useRef(document.getElementById("modal-root"));
  import_react34.default.useEffect(() => {
    const modalRoot = modalRootRef.current;
    if (!modalRoot)
      throw new Error("No modal-root exists!");
    const mainDiv = mainDivRef.current;
    modalRoot.appendChild(mainDiv);
    return () => {
      modalRoot.removeChild(mainDiv);
    };
  }, []);
  return (0, import_react_dom3.createPortal)(children, mainDivRef.current);
};
var Modal = ({ children, onCancel, closeOnClickOutside = true, shown, lockBodyScroll = true, backdrop = true, immediate = false, backdropStyle = { backgroundColor: "hsl(0deg 0% 0% / 70%)" }, sx: sx2, variant }) => {
  (0, import_hooks2.useLockBodyScroll)(shown);
  const parentDiv = import_react34.default.useRef(null);
  import_react34.default.useEffect(() => {
    if (shown && parentDiv.current)
      parentDiv.current.focus();
  }, [shown]);
  const keyHandler = (e) => {
    if (shown && e.key === "Escape") {
      e.preventDefault();
      e.stopPropagation();
      onCancel();
    }
  };
  const transition = (0, import_web3.useTransition)(shown, {
    immediate,
    from: { opacity: 0, transform: "translateY(-1000px)" },
    enter: {
      opacity: 1,
      transform: "translateY(0px)",
      config: (item) => {
        if (item === "transform")
          return { ...import_web3.config.stiff };
        return { ...import_web3.config.default, duration: 300 };
      }
    },
    leave: {
      opacity: 0,
      config: () => {
        return { ...import_web3.config.default, duration: 100 };
      }
    }
  });
  if (!shown)
    return null;
  return transition((style, item) => {
    return item && /* @__PURE__ */ import_react34.default.createElement(ModalBody, null, backdrop ? /* @__PURE__ */ import_react34.default.createElement("div", { ref: parentDiv, onKeyDown: keyHandler, tabIndex: 0, "aria-modal": "true", role: "dialog", style: { position: "fixed", top: 0, right: 0, bottom: 0, left: 0, overflow: "hidden", outline: "none" } }, /* @__PURE__ */ import_react34.default.createElement(ModalContent, { sx: sx2, variant, style: { transform: style.transform, opacity: style.opacity } }, children({ onRequestClose: onCancel })), backdrop && /* @__PURE__ */ import_react34.default.createElement(import_web3.animated.div, { onClick: () => {
      if (closeOnClickOutside) {
        onCancel();
      }
    }, style: { opacity: style.opacity, position: "fixed", zIndex: 1e3, top: 0, right: 0, bottom: 0, left: 0, outline: "none", tabIndex: -1, ...backdropStyle } })) : /* @__PURE__ */ import_react34.default.createElement("div", { ref: parentDiv, onKeyDown: keyHandler, tabIndex: 0, "aria-modal": "true", role: "dialog" }, /* @__PURE__ */ import_react34.default.createElement(ModalContent, { sx: sx2, variant, style: { transform: style.transform, opacity: style.opacity } }, children({ onRequestClose: onCancel }))));
  });
};
var Modal_default = Modal;

// src/MultiCheck.jsx
var import_react36 = __toESM(require("react"));
var import_theme_ui6 = require("theme-ui");
function MultiCheck({ options = [], value = [], onChange = () => {
}, withAll = true, withAllLabel = "Selecionar todos", labelSx = {} }) {
  const handleAll = (checked) => {
    const newValue = checked ? [...options] : [];
    onChange(newValue);
  };
  const handleChange = (option, checked) => {
    let newValue = [...value];
    if (checked) {
      newValue = value.includes(option) ? newValue : [...value, option];
    } else {
      newValue = value.includes(option) ? value.filter((v) => v !== option) : newValue;
    }
    return onChange(newValue);
  };
  return /* @__PURE__ */ import_react36.default.createElement(import_theme_ui6.Box, null, withAll && /* @__PURE__ */ import_react36.default.createElement(import_theme_ui6.Box, { sx: { mb: 1 } }, /* @__PURE__ */ import_react36.default.createElement(Checkbox_default, { checked: options.every((option) => value.includes(option)), label: withAllLabel, onChange: (checked) => handleAll(checked) })), options.map((option) => /* @__PURE__ */ import_react36.default.createElement(import_theme_ui6.Box, { key: option }, /* @__PURE__ */ import_react36.default.createElement(Checkbox_default, { labelSx, checked: value.includes(option), label: option.replace(/@/g, ""), onChange: (checked) => handleChange(option, checked) }))));
}
var MultiCheck_default = MultiCheck;

// src/MultiCheckLabelValue.jsx
var import_react37 = __toESM(require("react"));
var import_theme_ui7 = require("theme-ui");
function MultiCheckLabelValue({ options = [], value = [], onChange = () => {
}, withAll = true, withAllLabel = "Selecionar todos", labelSx = {} }) {
  const handleAll = (checked) => {
    const newValue = checked ? [...options.map((item) => item.value)] : [];
    onChange(newValue);
  };
  const handleChange = (option, checked) => {
    let newValue = [...value];
    if (checked) {
      newValue = value.includes(option) ? newValue : [...value, option];
    } else {
      newValue = value.includes(option) ? value.filter((v) => v !== option) : newValue;
    }
    return onChange(newValue);
  };
  return /* @__PURE__ */ import_react37.default.createElement(import_theme_ui7.Box, null, withAll && /* @__PURE__ */ import_react37.default.createElement(import_theme_ui7.Box, { sx: { mb: 1 } }, /* @__PURE__ */ import_react37.default.createElement(Checkbox_default, { checked: options.every((option) => value.includes(option.value)), label: withAllLabel, onChange: (checked) => handleAll(checked) })), options.map((option) => /* @__PURE__ */ import_react37.default.createElement(import_theme_ui7.Box, { key: option }, /* @__PURE__ */ import_react37.default.createElement(Checkbox_default, { labelSx, checked: value.includes(option.value), label: option.label, onChange: (checked) => handleChange(option.value, checked) }))));
}
var MultiCheckLabelValue_default = MultiCheckLabelValue;

// src/Pagination.jsx
var import_react38 = __toESM(require("react"));
var import_theme_ui8 = require("theme-ui");
var DOTS = "...";
var range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};
var usePagination = ({ totalCount, pageSize, siblingCount = 1, currentPage }) => {
  const paginationRange = import_react38.default.useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);
    const totalPageNumbers = siblingCount + 5;
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;
    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);
      return [...leftRange, DOTS, totalPageCount];
    }
    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
      return [firstPageIndex, DOTS, ...rightRange];
    }
    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);
  return paginationRange;
};
var Pagination = ({ onPageChange, totalCount, siblingCount = 1, currentPage, pageSize }) => {
  const paginationRange = usePagination({ currentPage, totalCount, siblingCount, pageSize });
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }
  const handleNext = () => {
    onPageChange(currentPage + 1);
  };
  const handlePrevious = () => {
    onPageChange(currentPage - 1);
  };
  const lastPage = paginationRange[paginationRange.length - 1];
  const baseSx = {
    flexShrink: 0,
    px: 3,
    py: 2,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "hairline"
  };
  function conditionalSx(enabled3) {
    if (enabled3) {
      return {
        pointerEvents: "none",
        cursor: "auto",
        color: "muted",
        backgroundColor: "canvas"
      };
    }
    return {
      pointerEvents: "auto",
      cursor: "pointer"
    };
  }
  function isCurrent(active) {
    return active ? { backgroundColor: "elevated", fontWeight: "heading" } : {};
  }
  return /* @__PURE__ */ import_react38.default.createElement(import_theme_ui8.Flex, { sx: { px: 2 } }, /* @__PURE__ */ import_react38.default.createElement(import_theme_ui8.Box, { onClick: handlePrevious, sx: { ...baseSx, ...conditionalSx(currentPage === 1) } }, "Anterior"), paginationRange.map((pageNumber) => {
    if (pageNumber === DOTS) {
      return /* @__PURE__ */ import_react38.default.createElement(import_theme_ui8.Flex, { key: pageNumber, sx: { px: 2, alignItems: "center", fontWeight: "heading", flexShrink: 0 } }, "\u2026");
    }
    return /* @__PURE__ */ import_react38.default.createElement(import_theme_ui8.Box, { key: pageNumber, onClick: () => onPageChange(pageNumber), sx: { ...baseSx, ...conditionalSx(currentPage === pageNumber), ...isCurrent(currentPage === pageNumber) } }, pageNumber);
  }), /* @__PURE__ */ import_react38.default.createElement(import_theme_ui8.Box, { onClick: handleNext, sx: { ...baseSx, ...conditionalSx(currentPage === lastPage) } }, "Pr\xF3ximo"));
};
var Pagination_default = Pagination;

// src/OptimisticCheckbox.jsx
var import_react39 = __toESM(require("react"));
var import_theme_ui9 = require("theme-ui");
var OptimisticCheckbox = import_react39.default.memo(import_react39.default.forwardRef(({ checked = false, onChange, className }, ref) => {
  const [checkedState, setCheckedState] = import_react39.default.useState(false);
  import_react39.default.useEffect(() => {
    setCheckedState(checked);
  }, [checked]);
  const handleClick = () => {
    const newCheckedState = !checkedState;
    setCheckedState(newCheckedState);
    setTimeout(() => {
      onChange(newCheckedState);
    }, 10);
  };
  return /* @__PURE__ */ import_react39.default.createElement(
    import_theme_ui9.Box,
    {
      sx: { display: "inline-block", position: "relative", cursor: "pointer", width: 18, height: 18, bg: "transparent", borderRadius: 2, borderWidth: 2, borderStyle: "solid", borderColor: checkedState ? "text" : "text", userSelect: "none" },
      className,
      ref,
      onKeyPress: (e) => ["Enter", " "].includes(e.key) && handleClick(),
      onClick: handleClick
    },
    /* @__PURE__ */ import_react39.default.createElement(import_theme_ui9.Box, { sx: { position: "absolute", top: "1px", left: "4px", width: 6, height: 10, pointerEvents: "none", transform: "rotate(45deg)", borderTop: "none", borderRightColor: "text", borderRightStyle: "solid", borderRightWidth: 2, borderBottomColor: "text", borderBottomStyle: "solid", borderBottomWidth: 2, borderLeft: "none", opacity: checkedState ? 1 : 0 } })
  );
}));
OptimisticCheckbox.displayName = "OptimisticCheckbox";
var OptimisticCheckbox_default = OptimisticCheckbox;

// src/Close.jsx
var import_react40 = __toESM(require("react"));
function Close({ height = 24, color = "currentColor" }) {
  return /* @__PURE__ */ import_react40.default.createElement("svg", { viewBox: "0 0 24 24", height, fill: color }, /* @__PURE__ */ import_react40.default.createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }));
}
var Close_default = Close;

// src/Portal.js
var import_react_dom4 = require("react-dom");
function Portal3({ children, elementId = "portal-root" }) {
  return (0, import_react_dom4.createPortal)(children, document.getElementById(elementId));
}
var Portal_default = Portal3;

// src/Floating.jsx
var import_react42 = __toESM(require("react"));
var import_theme_ui10 = require("theme-ui");
var import_web4 = require("@react-spring/web");

// ../../node_modules/react-use-gesture/dist/reactusegesture.esm.js
var import_react41 = __toESM(require("react"));
function addV(v1, v2) {
  return v1.map(function(v, i) {
    return v + v2[i];
  });
}
function subV(v1, v2) {
  return v1.map(function(v, i) {
    return v - v2[i];
  });
}
function calculateDistance(movement) {
  return Math.hypot.apply(Math, movement);
}
function calculateAllKinematics(movement, delta, dt) {
  var dl = calculateDistance(delta);
  var alpha = dl === 0 ? 0 : 1 / dl;
  var beta = dt === 0 ? 0 : 1 / dt;
  var velocity = beta * dl;
  var velocities = delta.map(function(v) {
    return beta * v;
  });
  var direction = delta.map(function(v) {
    return alpha * v;
  });
  var distance = calculateDistance(movement);
  return {
    velocities,
    velocity,
    distance,
    direction
  };
}
function sign(x) {
  if (Math.sign)
    return Math.sign(x);
  return Number(x > 0) - Number(x < 0) || +x;
}
function minMax(value, min, max) {
  return Math.max(min, Math.min(value, max));
}
function rubberband2(distance, constant) {
  return Math.pow(distance, constant * 5);
}
function rubberband(distance, dimension, constant) {
  if (dimension === 0 || Math.abs(dimension) === Infinity)
    return rubberband2(distance, constant);
  return distance * dimension * constant / (dimension + constant * distance);
}
function rubberbandIfOutOfBounds(position, min, max, constant) {
  if (constant === void 0) {
    constant = 0.15;
  }
  if (constant === 0)
    return minMax(position, min, max);
  if (position < min)
    return -rubberband(min - position, max - min, constant) + min;
  if (position > max)
    return +rubberband(position - max, max - min, constant) + max;
  return position;
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      return function() {
        if (i >= o.length)
          return {
            done: true
          };
        return {
          done: false,
          value: o[i++]
        };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  it = o[Symbol.iterator]();
  return it.next.bind(it);
}
function noop() {
}
function chainFns() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  if (fns.length === 0)
    return noop;
  if (fns.length === 1)
    return fns[0];
  return function() {
    var result;
    for (var _iterator = _createForOfIteratorHelperLoose(fns), _step; !(_step = _iterator()).done; ) {
      var fn = _step.value;
      result = fn.apply(this, arguments) || result;
    }
    return result;
  };
}
function ensureVector(value, fallback) {
  if (value === void 0) {
    if (fallback === void 0) {
      throw new Error("Must define fallback value if undefined is expected");
    }
    value = fallback;
  }
  if (Array.isArray(value))
    return value;
  return [value, value];
}
function valueFn(v) {
  if (typeof v === "function") {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    return v.apply(void 0, args);
  } else {
    return v;
  }
}
function resolveWith(config3, resolvers) {
  if (config3 === void 0) {
    config3 = {};
  }
  var result = {};
  for (var _i = 0, _Object$entries = Object.entries(resolvers); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _Object$entries[_i], key = _Object$entries$_i[0], resolver = _Object$entries$_i[1];
    switch (typeof resolver) {
      case "function":
        result[key] = resolver.call(result, config3[key], key, config3);
        break;
      case "object":
        result[key] = resolveWith(config3[key], resolver);
        break;
      case "boolean":
        if (resolver)
          result[key] = config3[key];
        break;
    }
  }
  return result;
}
function supportsGestureEvents() {
  try {
    return "constructor" in GestureEvent;
  } catch (e) {
    return false;
  }
}
function supportsTouchEvents() {
  return typeof window !== "undefined" && "ontouchstart" in window;
}
function supportsPointerEvents() {
  return typeof window !== "undefined" && "onpointerdown" in window;
}
function getEventTouches(event) {
  if ("pointerId" in event)
    return null;
  return event.type === "touchend" ? event.changedTouches : event.targetTouches;
}
function getTouchIds(event) {
  return Array.from(getEventTouches(event)).map(function(t) {
    return t.identifier;
  });
}
function getGenericEventData(event) {
  var buttons = "buttons" in event ? event.buttons : 0;
  var shiftKey = event.shiftKey, altKey = event.altKey, metaKey = event.metaKey, ctrlKey = event.ctrlKey;
  return {
    buttons,
    shiftKey,
    altKey,
    metaKey,
    ctrlKey
  };
}
var identity = function identity2(xy) {
  return xy;
};
function getPointerEventValues(event, transform) {
  if (transform === void 0) {
    transform = identity;
  }
  var touchEvents = getEventTouches(event);
  var _ref = touchEvents ? touchEvents[0] : event, clientX = _ref.clientX, clientY = _ref.clientY;
  return transform([clientX, clientY]);
}
var DEFAULT_DRAG_DELAY = 180;
var DEFAULT_RUBBERBAND = 0.15;
var DEFAULT_SWIPE_VELOCITY = 0.5;
var DEFAULT_SWIPE_DISTANCE = 50;
var DEFAULT_SWIPE_DURATION = 250;
var InternalGestureOptionsNormalizers = {
  threshold: function threshold(value) {
    if (value === void 0) {
      value = 0;
    }
    return ensureVector(value);
  },
  rubberband: function rubberband3(value) {
    if (value === void 0) {
      value = 0;
    }
    switch (value) {
      case true:
        return ensureVector(DEFAULT_RUBBERBAND);
      case false:
        return ensureVector(0);
      default:
        return ensureVector(value);
    }
  },
  enabled: function enabled(value) {
    if (value === void 0) {
      value = true;
    }
    return value;
  },
  triggerAllEvents: function triggerAllEvents(value) {
    if (value === void 0) {
      value = false;
    }
    return value;
  },
  initial: function initial(value) {
    if (value === void 0) {
      value = 0;
    }
    if (typeof value === "function")
      return value;
    return ensureVector(value);
  },
  transform: true
};
var InternalCoordinatesOptionsNormalizers = /* @__PURE__ */ _extends({}, InternalGestureOptionsNormalizers, {
  axis: true,
  lockDirection: function lockDirection(value) {
    if (value === void 0) {
      value = false;
    }
    return value;
  },
  bounds: function bounds(value) {
    if (value === void 0) {
      value = {};
    }
    if (typeof value === "function")
      return function(state) {
        return InternalCoordinatesOptionsNormalizers.bounds(value(state));
      };
    var _value2 = value, _value2$left = _value2.left, left = _value2$left === void 0 ? -Infinity : _value2$left, _value2$right = _value2.right, right = _value2$right === void 0 ? Infinity : _value2$right, _value2$top = _value2.top, top = _value2$top === void 0 ? -Infinity : _value2$top, _value2$bottom = _value2.bottom, bottom = _value2$bottom === void 0 ? Infinity : _value2$bottom;
    return [[left, right], [top, bottom]];
  }
});
var isBrowser = typeof window !== "undefined" && window.document && window.document.createElement;
var InternalGenericOptionsNormalizers = {
  enabled: function enabled2(value) {
    if (value === void 0) {
      value = true;
    }
    return value;
  },
  domTarget: true,
  window: /* @__PURE__ */ function(_window) {
    function window2(_x) {
      return _window.apply(this, arguments);
    }
    window2.toString = function() {
      return _window.toString();
    };
    return window2;
  }(function(value) {
    if (value === void 0) {
      value = isBrowser ? window : void 0;
    }
    return value;
  }),
  eventOptions: function eventOptions(_temp) {
    var _ref = _temp === void 0 ? {} : _temp, _ref$passive = _ref.passive, passive = _ref$passive === void 0 ? true : _ref$passive, _ref$capture = _ref.capture, capture = _ref$capture === void 0 ? false : _ref$capture;
    return {
      passive,
      capture
    };
  },
  transform: true
};
var InternalDragOptionsNormalizers = /* @__PURE__ */ _extends({}, InternalCoordinatesOptionsNormalizers, {
  useTouch: function useTouch(value) {
    if (value === void 0) {
      value = false;
    }
    var supportsTouch = supportsTouchEvents();
    var supportsPointer = supportsPointerEvents();
    if (value && supportsTouch)
      return true;
    if (supportsTouch && !supportsPointer)
      return true;
    return false;
  },
  experimental_preventWindowScrollY: function experimental_preventWindowScrollY(value) {
    if (value === void 0) {
      value = false;
    }
    return value;
  },
  threshold: function threshold2(v, _k, _ref3) {
    var _ref3$filterTaps = _ref3.filterTaps, filterTaps = _ref3$filterTaps === void 0 ? false : _ref3$filterTaps, _ref3$lockDirection = _ref3.lockDirection, lockDirection2 = _ref3$lockDirection === void 0 ? false : _ref3$lockDirection, _ref3$axis = _ref3.axis, axis = _ref3$axis === void 0 ? void 0 : _ref3$axis;
    var A = ensureVector(v, filterTaps ? 3 : lockDirection2 ? 1 : axis ? 1 : 0);
    this.filterTaps = filterTaps;
    return A;
  },
  swipeVelocity: function swipeVelocity(v) {
    if (v === void 0) {
      v = DEFAULT_SWIPE_VELOCITY;
    }
    return ensureVector(v);
  },
  swipeDistance: function swipeDistance(v) {
    if (v === void 0) {
      v = DEFAULT_SWIPE_DISTANCE;
    }
    return ensureVector(v);
  },
  swipeDuration: function swipeDuration(value) {
    if (value === void 0) {
      value = DEFAULT_SWIPE_DURATION;
    }
    return value;
  },
  delay: function delay(value) {
    if (value === void 0) {
      value = 0;
    }
    switch (value) {
      case true:
        return DEFAULT_DRAG_DELAY;
      case false:
        return 0;
      default:
        return value;
    }
  }
});
function getInternalGenericOptions(config3) {
  if (config3 === void 0) {
    config3 = {};
  }
  return resolveWith(config3, InternalGenericOptionsNormalizers);
}
function getInternalDragOptions(config3) {
  if (config3 === void 0) {
    config3 = {};
  }
  return resolveWith(config3, InternalDragOptionsNormalizers);
}
function _buildDragConfig(_ref3) {
  var domTarget = _ref3.domTarget, eventOptions2 = _ref3.eventOptions, window2 = _ref3.window, enabled3 = _ref3.enabled, rest = _objectWithoutPropertiesLoose(_ref3, ["domTarget", "eventOptions", "window", "enabled"]);
  var opts = getInternalGenericOptions({
    domTarget,
    eventOptions: eventOptions2,
    window: window2,
    enabled: enabled3
  });
  opts.drag = getInternalDragOptions(rest);
  return opts;
}
function getInitial(mixed) {
  return _extends({
    _active: false,
    _blocked: false,
    _intentional: [false, false],
    _movement: [0, 0],
    _initial: [0, 0],
    _bounds: [[-Infinity, Infinity], [-Infinity, Infinity]],
    _threshold: [0, 0],
    _lastEventType: void 0,
    _dragStarted: false,
    _dragPreventScroll: false,
    _dragIsTap: true,
    _dragDelayed: false,
    event: void 0,
    intentional: false,
    values: [0, 0],
    velocities: [0, 0],
    delta: [0, 0],
    movement: [0, 0],
    offset: [0, 0],
    lastOffset: [0, 0],
    direction: [0, 0],
    initial: [0, 0],
    previous: [0, 0],
    first: false,
    last: false,
    active: false,
    timeStamp: 0,
    startTime: 0,
    elapsedTime: 0,
    cancel: noop,
    canceled: false,
    memo: void 0,
    args: void 0
  }, mixed);
}
function getInitialState() {
  var shared = {
    hovering: false,
    scrolling: false,
    wheeling: false,
    dragging: false,
    moving: false,
    pinching: false,
    touches: 0,
    buttons: 0,
    down: false,
    shiftKey: false,
    altKey: false,
    metaKey: false,
    ctrlKey: false,
    locked: false
  };
  var drag = getInitial({
    _pointerId: void 0,
    axis: void 0,
    xy: [0, 0],
    vxvy: [0, 0],
    velocity: 0,
    distance: 0,
    tap: false,
    swipe: [0, 0]
  });
  var pinch = getInitial({
    _pointerIds: [],
    da: [0, 0],
    vdva: [0, 0],
    origin: void 0,
    turns: 0
  });
  var wheel = getInitial({
    axis: void 0,
    xy: [0, 0],
    vxvy: [0, 0],
    velocity: 0,
    distance: 0
  });
  var move = getInitial({
    axis: void 0,
    xy: [0, 0],
    vxvy: [0, 0],
    velocity: 0,
    distance: 0
  });
  var scroll = getInitial({
    axis: void 0,
    xy: [0, 0],
    vxvy: [0, 0],
    velocity: 0,
    distance: 0
  });
  return {
    shared,
    drag,
    pinch,
    wheel,
    move,
    scroll
  };
}
var RecognizersMap = /* @__PURE__ */ new Map();
var identity$1 = function identity3(xy) {
  return xy;
};
var Recognizer = /* @__PURE__ */ function() {
  function Recognizer2(controller, args) {
    var _this = this;
    if (args === void 0) {
      args = [];
    }
    this.controller = controller;
    this.args = args;
    this.debounced = true;
    this.setTimeout = function(callback, ms) {
      var _window;
      if (ms === void 0) {
        ms = 140;
      }
      clearTimeout(_this.controller.timeouts[_this.stateKey]);
      for (var _len = arguments.length, args2 = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args2[_key - 2] = arguments[_key];
      }
      _this.controller.timeouts[_this.stateKey] = (_window = window).setTimeout.apply(_window, [callback, ms].concat(args2));
    };
    this.clearTimeout = function() {
      clearTimeout(_this.controller.timeouts[_this.stateKey]);
    };
    this.fireGestureHandler = function(forceFlag) {
      if (forceFlag === void 0) {
        forceFlag = false;
      }
      if (_this.state._blocked) {
        if (!_this.debounced) {
          _this.state._active = false;
          _this.clean();
        }
        return null;
      }
      if (!forceFlag && !_this.state.intentional && !_this.config.triggerAllEvents)
        return null;
      if (_this.state.intentional) {
        var prev_active = _this.state.active;
        var next_active = _this.state._active;
        _this.state.active = next_active;
        _this.state.first = next_active && !prev_active;
        _this.state.last = prev_active && !next_active;
        _this.controller.state.shared[_this.ingKey] = next_active;
      }
      var touches = _this.controller.pointerIds.size || _this.controller.touchIds.size;
      var down = _this.controller.state.shared.buttons > 0 || touches > 0;
      var state = _extends({}, _this.controller.state.shared, _this.state, _this.mapStateValues(_this.state), {
        locked: !!document.pointerLockElement,
        touches,
        down
      });
      var newMemo = _this.handler(state);
      _this.state.memo = newMemo !== void 0 ? newMemo : _this.state.memo;
      return state;
    };
    this.controller = controller;
    this.args = args;
  }
  var _proto = Recognizer2.prototype;
  _proto.updateSharedState = function updateSharedState(sharedState) {
    Object.assign(this.controller.state.shared, sharedState);
  };
  _proto.updateGestureState = function updateGestureState(gestureState) {
    Object.assign(this.state, gestureState);
  };
  _proto.checkIntentionality = function checkIntentionality(_intentional, _movement) {
    return {
      _intentional,
      _blocked: false
    };
  };
  _proto.getMovement = function getMovement(values) {
    var rubberband4 = this.config.rubberband;
    var _this$state = this.state, _bounds = _this$state._bounds, _initial = _this$state._initial, _active = _this$state._active, wasIntentional = _this$state._intentional, lastOffset = _this$state.lastOffset, prevMovement = _this$state.movement, _T = _this$state._threshold;
    var M = this.getInternalMovement(values, this.state);
    var i0 = wasIntentional[0] === false ? getIntentionalDisplacement(M[0], _T[0]) : wasIntentional[0];
    var i1 = wasIntentional[1] === false ? getIntentionalDisplacement(M[1], _T[1]) : wasIntentional[1];
    var intentionalityCheck = this.checkIntentionality([i0, i1], M);
    if (intentionalityCheck._blocked) {
      return _extends({}, intentionalityCheck, {
        _movement: M,
        delta: [0, 0]
      });
    }
    var _intentional = intentionalityCheck._intentional;
    var _movement = M;
    var movement = [_intentional[0] !== false ? M[0] - _intentional[0] : 0, _intentional[1] !== false ? M[1] - _intentional[1] : 0];
    var offset = addV(movement, lastOffset);
    var _rubberband = _active ? rubberband4 : [0, 0];
    movement = computeRubberband(_bounds, addV(movement, _initial), _rubberband);
    return _extends({}, intentionalityCheck, {
      intentional: _intentional[0] !== false || _intentional[1] !== false,
      _initial,
      _movement,
      movement,
      values,
      offset: computeRubberband(_bounds, offset, _rubberband),
      delta: subV(movement, prevMovement)
    });
  };
  _proto.clean = function clean() {
    this.clearTimeout();
  };
  _createClass(Recognizer2, [{
    key: "config",
    get: function get12() {
      return this.controller.config[this.stateKey];
    }
  }, {
    key: "enabled",
    get: function get12() {
      return this.controller.config.enabled && this.config.enabled;
    }
  }, {
    key: "state",
    get: function get12() {
      return this.controller.state[this.stateKey];
    }
  }, {
    key: "handler",
    get: function get12() {
      return this.controller.handlers[this.stateKey];
    }
  }, {
    key: "transform",
    get: function get12() {
      return this.config.transform || this.controller.config.transform || identity$1;
    }
  }]);
  return Recognizer2;
}();
function getIntentionalDisplacement(movement, threshold3) {
  if (Math.abs(movement) >= threshold3) {
    return sign(movement) * threshold3;
  } else {
    return false;
  }
}
function computeRubberband(bounds2, _ref, _ref2) {
  var Vx = _ref[0], Vy = _ref[1];
  var Rx = _ref2[0], Ry = _ref2[1];
  var _bounds$ = bounds2[0], X1 = _bounds$[0], X2 = _bounds$[1], _bounds$2 = bounds2[1], Y1 = _bounds$2[0], Y2 = _bounds$2[1];
  return [rubberbandIfOutOfBounds(Vx, X1, X2, Rx), rubberbandIfOutOfBounds(Vy, Y1, Y2, Ry)];
}
function getGenericPayload(_ref3, event, isStartEvent) {
  var state = _ref3.state;
  var timeStamp = event.timeStamp, _lastEventType = event.type;
  var previous = state.values;
  var elapsedTime = isStartEvent ? 0 : timeStamp - state.startTime;
  return {
    _lastEventType,
    event,
    timeStamp,
    elapsedTime,
    previous
  };
}
function getStartGestureState(_ref4, values, event, initial2) {
  var state = _ref4.state, config3 = _ref4.config, stateKey = _ref4.stateKey, args = _ref4.args, transform = _ref4.transform;
  var offset = state.offset;
  var startTime = event.timeStamp;
  var initialFn = config3.initial, bounds2 = config3.bounds, threshold3 = config3.threshold;
  var _threshold = subV(transform(threshold3), transform([0, 0])).map(Math.abs);
  var _state = _extends({}, getInitialState()[stateKey], {
    _active: true,
    args,
    values,
    initial: initial2 != null ? initial2 : values,
    _threshold,
    offset,
    lastOffset: offset,
    startTime
  });
  return _extends({}, _state, {
    _initial: valueFn(initialFn, _state),
    _bounds: valueFn(bounds2, _state)
  });
}
var Controller = function Controller2(classes) {
  var _this = this;
  this.classes = classes;
  this.pointerIds = /* @__PURE__ */ new Set();
  this.touchIds = /* @__PURE__ */ new Set();
  this.supportsTouchEvents = supportsTouchEvents();
  this.supportsGestureEvents = supportsGestureEvents();
  this.bind = function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var bindings = {};
    for (var _iterator = _createForOfIteratorHelperLoose(_this.classes), _step; !(_step = _iterator()).done; ) {
      var RecognizerClass = _step.value;
      new RecognizerClass(_this, args).addBindings(bindings);
    }
    var _loop = function _loop2(eventKey2) {
      addBindings(bindings, eventKey2, function(event) {
        return _this.nativeRefs[eventKey2](_extends({}, _this.state.shared, {
          event,
          args
        }));
      });
    };
    for (var eventKey in _this.nativeRefs) {
      _loop(eventKey);
    }
    if (_this.config.domTarget) {
      return updateDomListeners(_this, bindings);
    } else {
      return getPropsListener(_this, bindings);
    }
  };
  this.effect = function() {
    if (_this.config.domTarget)
      _this.bind();
    return _this.clean;
  };
  this.clean = function() {
    var domTarget = getDomTargetFromConfig(_this.config);
    var eventOptions2 = _this.config.eventOptions;
    if (domTarget)
      removeListeners(domTarget, takeAll(_this.domListeners), eventOptions2);
    Object.values(_this.timeouts).forEach(clearTimeout);
    clearAllWindowListeners(_this);
  };
  this.classes = classes;
  this.state = getInitialState();
  this.timeouts = {};
  this.domListeners = [];
  this.windowListeners = {};
};
function addEventIds(controller, event) {
  if ("pointerId" in event) {
    controller.pointerIds.add(event.pointerId);
  } else {
    controller.touchIds = new Set(getTouchIds(event));
  }
}
function removeEventIds(controller, event) {
  if ("pointerId" in event) {
    controller.pointerIds["delete"](event.pointerId);
  } else {
    getTouchIds(event).forEach(function(id) {
      return controller.touchIds["delete"](id);
    });
  }
}
function clearAllWindowListeners(controller) {
  var _controller$config = controller.config, el = _controller$config.window, eventOptions2 = _controller$config.eventOptions, windowListeners = controller.windowListeners;
  if (!el)
    return;
  for (var stateKey in windowListeners) {
    var handlers = windowListeners[stateKey];
    removeListeners(el, handlers, eventOptions2);
  }
  controller.windowListeners = {};
}
function clearWindowListeners(_ref, stateKey, options) {
  var config3 = _ref.config, windowListeners = _ref.windowListeners;
  if (options === void 0) {
    options = config3.eventOptions;
  }
  if (!config3.window)
    return;
  removeListeners(config3.window, windowListeners[stateKey], options);
  delete windowListeners[stateKey];
}
function updateWindowListeners(_ref2, stateKey, listeners, options) {
  var config3 = _ref2.config, windowListeners = _ref2.windowListeners;
  if (listeners === void 0) {
    listeners = [];
  }
  if (options === void 0) {
    options = config3.eventOptions;
  }
  if (!config3.window)
    return;
  removeListeners(config3.window, windowListeners[stateKey], options);
  addListeners(config3.window, windowListeners[stateKey] = listeners, options);
}
function updateDomListeners(_ref3, bindings) {
  var config3 = _ref3.config, domListeners = _ref3.domListeners;
  var domTarget = getDomTargetFromConfig(config3);
  if (!domTarget)
    throw new Error("domTarget must be defined");
  var eventOptions2 = config3.eventOptions;
  removeListeners(domTarget, takeAll(domListeners), eventOptions2);
  for (var _i = 0, _Object$entries = Object.entries(bindings); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _Object$entries[_i], key = _Object$entries$_i[0], fns = _Object$entries$_i[1];
    var name = key.slice(2).toLowerCase();
    domListeners.push([name, chainFns.apply(void 0, fns)]);
  }
  addListeners(domTarget, domListeners, eventOptions2);
}
function getPropsListener(_ref4, bindings) {
  var config3 = _ref4.config;
  var props = {};
  var captureString = config3.eventOptions.capture ? "Capture" : "";
  for (var _i2 = 0, _Object$entries2 = Object.entries(bindings); _i2 < _Object$entries2.length; _i2++) {
    var _Object$entries2$_i = _Object$entries2[_i2], event = _Object$entries2$_i[0], fns = _Object$entries2$_i[1];
    var fnsArray = Array.isArray(fns) ? fns : [fns];
    var key = event + captureString;
    props[key] = chainFns.apply(void 0, fnsArray);
  }
  return props;
}
function takeAll(array) {
  if (array === void 0) {
    array = [];
  }
  return array.splice(0, array.length);
}
function getDomTargetFromConfig(_ref5) {
  var domTarget = _ref5.domTarget;
  return domTarget && "current" in domTarget ? domTarget.current : domTarget;
}
function addBindings(bindings, name, fn) {
  if (!bindings[name])
    bindings[name] = [];
  bindings[name].push(fn);
}
function addListeners(el, listeners, options) {
  if (listeners === void 0) {
    listeners = [];
  }
  if (options === void 0) {
    options = {};
  }
  for (var _iterator2 = _createForOfIteratorHelperLoose(listeners), _step2; !(_step2 = _iterator2()).done; ) {
    var _step2$value = _step2.value, eventName = _step2$value[0], eventHandler = _step2$value[1];
    el.addEventListener(eventName, eventHandler, options);
  }
}
function removeListeners(el, listeners, options) {
  if (listeners === void 0) {
    listeners = [];
  }
  if (options === void 0) {
    options = {};
  }
  for (var _iterator3 = _createForOfIteratorHelperLoose(listeners), _step3; !(_step3 = _iterator3()).done; ) {
    var _step3$value = _step3.value, eventName = _step3$value[0], eventHandler = _step3$value[1];
    el.removeEventListener(eventName, eventHandler, options);
  }
}
function useRecognizers(handlers, config3, nativeHandlers) {
  if (nativeHandlers === void 0) {
    nativeHandlers = {};
  }
  var classes = resolveClasses(handlers);
  var controller = import_react41.default.useMemo(function() {
    return new Controller(classes);
  }, []);
  controller.config = config3;
  controller.handlers = handlers;
  controller.nativeRefs = nativeHandlers;
  import_react41.default.useEffect(controller.effect, []);
  if (controller.config.domTarget)
    return deprecationNoticeForDomTarget;
  return controller.bind;
}
function deprecationNoticeForDomTarget() {
  if (process.env.NODE_ENV === "development") {
    console.warn("Deprecation notice: When the `domTarget` option is specified, you don't need to write `useEffect(bind, [bind])` anymore: event binding is now made handled internally to this lib.\n\nNext version won't return anything when `domTarget` is provided, therefore your code will break if you try to call `useEffect`.");
  }
}
function resolveClasses(internalHandlers) {
  var classes = /* @__PURE__ */ new Set();
  if (internalHandlers.drag)
    classes.add(RecognizersMap.get("drag"));
  if (internalHandlers.wheel)
    classes.add(RecognizersMap.get("wheel"));
  if (internalHandlers.scroll)
    classes.add(RecognizersMap.get("scroll"));
  if (internalHandlers.move)
    classes.add(RecognizersMap.get("move"));
  if (internalHandlers.pinch)
    classes.add(RecognizersMap.get("pinch"));
  if (internalHandlers.hover)
    classes.add(RecognizersMap.get("hover"));
  return classes;
}
var CoordinatesRecognizer = /* @__PURE__ */ function(_Recognizer) {
  _inheritsLoose(CoordinatesRecognizer2, _Recognizer);
  function CoordinatesRecognizer2() {
    return _Recognizer.apply(this, arguments) || this;
  }
  var _proto = CoordinatesRecognizer2.prototype;
  _proto.getInternalMovement = function getInternalMovement(values, state) {
    return subV(values, state.initial);
  };
  _proto.checkIntentionality = function checkIntentionality(_intentional, _movement) {
    if (_intentional[0] === false && _intentional[1] === false) {
      return {
        _intentional,
        axis: this.state.axis
      };
    }
    var _movement$map = _movement.map(Math.abs), absX = _movement$map[0], absY = _movement$map[1];
    var axis = this.state.axis || (absX > absY ? "x" : absX < absY ? "y" : void 0);
    if (!this.config.axis && !this.config.lockDirection)
      return {
        _intentional,
        _blocked: false,
        axis
      };
    if (!axis)
      return {
        _intentional: [false, false],
        _blocked: false,
        axis
      };
    if (!!this.config.axis && axis !== this.config.axis)
      return {
        _intentional,
        _blocked: true,
        axis
      };
    _intentional[axis === "x" ? 1 : 0] = false;
    return {
      _intentional,
      _blocked: false,
      axis
    };
  };
  _proto.getKinematics = function getKinematics(values, event) {
    var state = this.getMovement(values);
    if (!state._blocked) {
      var dt = event.timeStamp - this.state.timeStamp;
      Object.assign(state, calculateAllKinematics(state.movement, state.delta, dt));
    }
    return state;
  };
  _proto.mapStateValues = function mapStateValues(state) {
    return {
      xy: state.values,
      vxvy: state.velocities
    };
  };
  return CoordinatesRecognizer2;
}(Recognizer);
var TAP_DISTANCE_THRESHOLD = 3;
function persistEvent(event) {
  "persist" in event && typeof event.persist === "function" && event.persist();
}
var DragRecognizer = /* @__PURE__ */ function(_CoordinatesRecognize) {
  _inheritsLoose(DragRecognizer2, _CoordinatesRecognize);
  function DragRecognizer2() {
    var _this;
    _this = _CoordinatesRecognize.apply(this, arguments) || this;
    _this.ingKey = "dragging";
    _this.stateKey = "drag";
    _this.setPointerCapture = function(event) {
      if (_this.config.useTouch || document.pointerLockElement)
        return;
      var target = event.target, pointerId = event.pointerId;
      if (target && "setPointerCapture" in target) {
        target.setPointerCapture(pointerId);
      }
      _this.updateGestureState({
        _dragTarget: target,
        _dragPointerId: pointerId
      });
    };
    _this.releasePointerCapture = function() {
      if (_this.config.useTouch || document.pointerLockElement)
        return;
      var _this$state = _this.state, _dragTarget = _this$state._dragTarget, _dragPointerId = _this$state._dragPointerId;
      if (_dragPointerId && _dragTarget && "releasePointerCapture" in _dragTarget) {
        if (!("hasPointerCapture" in _dragTarget) || _dragTarget.hasPointerCapture(_dragPointerId))
          try {
            _dragTarget.releasePointerCapture(_dragPointerId);
          } catch (e) {
          }
      }
    };
    _this.preventScroll = function(event) {
      if (_this.state._dragPreventScroll && event.cancelable) {
        event.preventDefault();
      }
    };
    _this.getEventId = function(event) {
      if (_this.config.useTouch)
        return event.changedTouches[0].identifier;
      return event.pointerId;
    };
    _this.isValidEvent = function(event) {
      return _this.state._pointerId === _this.getEventId(event);
    };
    _this.shouldPreventWindowScrollY = _this.config.experimental_preventWindowScrollY && _this.controller.supportsTouchEvents;
    _this.setUpWindowScrollDetection = function(event) {
      persistEvent(event);
      updateWindowListeners(_this.controller, _this.stateKey, [["touchmove", _this.preventScroll], ["touchend", _this.clean.bind(_assertThisInitialized(_this))], ["touchcancel", _this.clean.bind(_assertThisInitialized(_this))]], {
        passive: false
      });
      _this.setTimeout(_this.startDrag.bind(_assertThisInitialized(_this)), 250, event);
    };
    _this.setUpDelayedDragTrigger = function(event) {
      _this.state._dragDelayed = true;
      persistEvent(event);
      _this.setTimeout(_this.startDrag.bind(_assertThisInitialized(_this)), _this.config.delay, event);
    };
    _this.setStartState = function(event) {
      var values = getPointerEventValues(event, _this.transform);
      _this.updateSharedState(getGenericEventData(event));
      _this.updateGestureState(_extends({}, getStartGestureState(_assertThisInitialized(_this), values, event), getGenericPayload(_assertThisInitialized(_this), event, true), {
        _pointerId: _this.getEventId(event)
      }));
      _this.updateGestureState(_this.getMovement(values));
    };
    _this.onDragStart = function(event) {
      addEventIds(_this.controller, event);
      if (!_this.enabled || _this.state._active)
        return;
      _this.setStartState(event);
      _this.setPointerCapture(event);
      if (_this.shouldPreventWindowScrollY)
        _this.setUpWindowScrollDetection(event);
      else if (_this.config.delay > 0)
        _this.setUpDelayedDragTrigger(event);
      else
        _this.startDrag(event, true);
    };
    _this.onDragChange = function(event) {
      if (_this.state.canceled || !_this.state._active || !_this.isValidEvent(event) || _this.state._lastEventType === event.type && event.timeStamp === _this.state.timeStamp)
        return;
      var values;
      if (document.pointerLockElement) {
        var movementX = event.movementX, movementY = event.movementY;
        values = addV(_this.transform([movementX, movementY]), _this.state.values);
      } else
        values = getPointerEventValues(event, _this.transform);
      var kinematics = _this.getKinematics(values, event);
      if (!_this.state._dragStarted) {
        if (_this.state._dragDelayed) {
          _this.startDrag(event);
          return;
        }
        if (_this.shouldPreventWindowScrollY) {
          if (!_this.state._dragPreventScroll && kinematics.axis) {
            if (kinematics.axis === "x") {
              _this.startDrag(event);
            } else {
              _this.state._active = false;
              return;
            }
          } else
            return;
        } else
          return;
      }
      var genericEventData = getGenericEventData(event);
      _this.updateSharedState(genericEventData);
      var genericPayload = getGenericPayload(_assertThisInitialized(_this), event);
      var realDistance = calculateDistance(kinematics._movement);
      var _dragIsTap = _this.state._dragIsTap;
      if (_dragIsTap && realDistance >= TAP_DISTANCE_THRESHOLD)
        _dragIsTap = false;
      _this.updateGestureState(_extends({}, genericPayload, kinematics, {
        _dragIsTap
      }));
      _this.fireGestureHandler();
    };
    _this.onDragEnd = function(event) {
      removeEventIds(_this.controller, event);
      if (!_this.isValidEvent(event))
        return;
      _this.clean();
      if (!_this.state._active)
        return;
      _this.state._active = false;
      var tap = _this.state._dragIsTap;
      var _this$state$velocitie = _this.state.velocities, vx = _this$state$velocitie[0], vy = _this$state$velocitie[1];
      var _this$state$movement = _this.state.movement, mx = _this$state$movement[0], my = _this$state$movement[1];
      var _this$state$_intentio = _this.state._intentional, ix = _this$state$_intentio[0], iy = _this$state$_intentio[1];
      var _this$config$swipeVel = _this.config.swipeVelocity, svx = _this$config$swipeVel[0], svy = _this$config$swipeVel[1];
      var _this$config$swipeDis = _this.config.swipeDistance, sx2 = _this$config$swipeDis[0], sy = _this$config$swipeDis[1];
      var sd = _this.config.swipeDuration;
      var endState = _extends({}, getGenericPayload(_assertThisInitialized(_this), event), _this.getMovement(_this.state.values));
      var swipe = [0, 0];
      if (endState.elapsedTime < sd) {
        if (ix !== false && Math.abs(vx) > svx && Math.abs(mx) > sx2)
          swipe[0] = sign(vx);
        if (iy !== false && Math.abs(vy) > svy && Math.abs(my) > sy)
          swipe[1] = sign(vy);
      }
      _this.updateSharedState({
        buttons: 0
      });
      _this.updateGestureState(_extends({}, endState, {
        tap,
        swipe
      }));
      _this.fireGestureHandler(_this.config.filterTaps && tap === true);
    };
    _this.clean = function() {
      _CoordinatesRecognize.prototype.clean.call(_assertThisInitialized(_this));
      _this.state._dragStarted = false;
      _this.releasePointerCapture();
      clearWindowListeners(_this.controller, _this.stateKey);
    };
    _this.onCancel = function() {
      if (_this.state.canceled)
        return;
      _this.updateGestureState({
        canceled: true,
        _active: false
      });
      _this.updateSharedState({
        buttons: 0
      });
      setTimeout(function() {
        return _this.fireGestureHandler();
      }, 0);
    };
    _this.onClick = function(event) {
      if (!_this.state._dragIsTap)
        event.stopPropagation();
    };
    return _this;
  }
  var _proto = DragRecognizer2.prototype;
  _proto.startDrag = function startDrag(event, onDragIsStart) {
    if (onDragIsStart === void 0) {
      onDragIsStart = false;
    }
    if (!this.state._active || this.state._dragStarted)
      return;
    if (!onDragIsStart)
      this.setStartState(event);
    this.updateGestureState({
      _dragStarted: true,
      _dragPreventScroll: true,
      cancel: this.onCancel
    });
    this.clearTimeout();
    this.fireGestureHandler();
  };
  _proto.addBindings = function addBindings$1(bindings) {
    if (this.config.useTouch) {
      addBindings(bindings, "onTouchStart", this.onDragStart);
      addBindings(bindings, "onTouchMove", this.onDragChange);
      addBindings(bindings, "onTouchEnd", this.onDragEnd);
      addBindings(bindings, "onTouchCancel", this.onDragEnd);
    } else {
      addBindings(bindings, "onPointerDown", this.onDragStart);
      addBindings(bindings, "onPointerMove", this.onDragChange);
      addBindings(bindings, "onPointerUp", this.onDragEnd);
      addBindings(bindings, "onPointerCancel", this.onDragEnd);
    }
    if (this.config.filterTaps) {
      var handler = this.controller.config.eventOptions.capture ? "onClick" : "onClickCapture";
      addBindings(bindings, handler, this.onClick);
    }
  };
  return DragRecognizer2;
}(CoordinatesRecognizer);
function memoizeOne(resultFn, isEqual2) {
  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;
  function memoized() {
    for (var _len = arguments.length, newArgs = new Array(_len), _key = 0; _key < _len; _key++) {
      newArgs[_key] = arguments[_key];
    }
    if (calledOnce && lastThis === this && isEqual2(newArgs, lastArgs)) {
      return lastResult;
    }
    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  }
  return memoized;
}
function equal(a2, b) {
  if (a2 === b)
    return true;
  if (a2 && b && typeof a2 == "object" && typeof b == "object") {
    if (a2.constructor !== b.constructor)
      return false;
    var length, i, keys;
    if (Array.isArray(a2)) {
      length = a2.length;
      if (length !== b.length)
        return false;
      for (i = length; i-- !== 0; ) {
        if (!equal(a2[i], b[i]))
          return false;
      }
      return true;
    }
    var it;
    if (typeof Map === "function" && a2 instanceof Map && b instanceof Map) {
      if (a2.size !== b.size)
        return false;
      it = a2.entries();
      while (!(i = it.next()).done) {
        if (!b.has(i.value[0]))
          return false;
      }
      it = a2.entries();
      while (!(i = it.next()).done) {
        if (!equal(i.value[1], b.get(i.value[0])))
          return false;
      }
      return true;
    }
    if (typeof Set === "function" && a2 instanceof Set && b instanceof Set) {
      if (a2.size !== b.size)
        return false;
      it = a2.entries();
      while (!(i = it.next()).done) {
        if (!b.has(i.value[0]))
          return false;
      }
      return true;
    }
    if (a2.constructor === RegExp)
      return a2.source === b.source && a2.flags === b.flags;
    if (a2.valueOf !== Object.prototype.valueOf)
      return a2.valueOf() === b.valueOf();
    if (a2.toString !== Object.prototype.toString)
      return a2.toString() === b.toString();
    keys = Object.keys(a2);
    length = keys.length;
    if (length !== Object.keys(b).length)
      return false;
    for (i = length; i-- !== 0; ) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
        return false;
    }
    if (typeof Element !== "undefined" && a2 instanceof Element)
      return false;
    for (i = length; i-- !== 0; ) {
      if (keys[i] === "_owner" && a2.$$typeof)
        continue;
      if (!equal(a2[keys[i]], b[keys[i]]))
        return false;
    }
    return true;
  }
  return a2 !== a2 && b !== b;
}
function isEqual(a2, b) {
  try {
    return equal(a2, b);
  } catch (error) {
    if ((error.message || "").match(/stack|recursion/i)) {
      console.warn("react-fast-compare cannot handle circular refs");
      return false;
    }
    throw error;
  }
}
function useDrag(handler, config3) {
  if (config3 === void 0) {
    config3 = {};
  }
  RecognizersMap.set("drag", DragRecognizer);
  var buildDragConfig = (0, import_react41.useRef)();
  if (!buildDragConfig.current) {
    buildDragConfig.current = memoizeOne(_buildDragConfig, isEqual);
  }
  return useRecognizers({
    drag: handler
  }, buildDragConfig.current(config3));
}

// src/Floating.jsx
var import_hooks3 = require("hooks");
function Floating({ localStorageKey, shown = false, width = 300, height = 270, sx: sx2, onCancel, children }) {
  const [position, setPosition] = (0, import_hooks3.useLocalStorage)(localStorageKey, { x: 800, y: 70 });
  const [{ x, y }, api] = (0, import_web4.useSpring)(() => ({ x: position.x, y: position.y }));
  const bind = useDrag(
    ({ movement: [mx, my], last }) => {
      if (my === 0 && mx === 0)
        mx = 1;
      api.start({ x: mx, y: my, immediate: true });
      if (last) {
        setPosition({ x, y });
      }
    },
    {
      initial: () => [x.get(), y.get()],
      bounds: {
        left: 0,
        top: 0,
        right: window.innerWidth - width,
        bottom: window.innerHeight - height
      }
    }
  );
  return /* @__PURE__ */ import_react42.default.createElement(Portal_default, { elementId: "over-root" }, /* @__PURE__ */ import_react42.default.createElement(import_web4.animated.div, { ...bind(), style: { x, y, display: shown ? "block" : "none", width } }, /* @__PURE__ */ import_react42.default.createElement(import_theme_ui10.Flex, { sx: { ...sx2, width, height } }, children({ onRequestClose: onCancel }))));
}
var Floating_default = Floating;

// src/Tabs.jsx
var import_react43 = __toESM(require("react"));
var tabs = __toESM(require("@zag-js/tabs"));
var import_react44 = require("@zag-js/react");
function Tabs({ data }) {
  const [state, send] = (0, import_react44.useMachine)(tabs.machine({ id: "1", value: "item-1" }));
  const api = tabs.connect(state, send, import_react44.normalizeProps);
  return /* @__PURE__ */ import_react43.default.createElement("div", { ...api.rootProps }, /* @__PURE__ */ import_react43.default.createElement("div", { ...api.triggerGroupProps }, data.map((item) => /* @__PURE__ */ import_react43.default.createElement(
    "button",
    {
      ...api.getTriggerProps({ value: item.value }),
      key: item.value
    },
    item.label
  )), /* @__PURE__ */ import_react43.default.createElement("div", { ...api.indicatorProps })), data.map((item) => /* @__PURE__ */ import_react43.default.createElement("div", { ...api.getContentProps({ value: item.value }), key: item.value }, /* @__PURE__ */ import_react43.default.createElement("p", null, item.content))));
}
var Tabs_default = Tabs;

// src/Radio.jsx
var import_react45 = __toESM(require("react"));
var import_theme_ui11 = require("theme-ui");
var Radio = ({ disabled = false, checked, label, tabIndex = 0, onChange = () => {
}, labelStyle = { marginLeft: 8 }, labelSx = {}, ...rest }) => {
  const checkboxRef = import_react45.default.useRef();
  const checkRef = import_react45.default.useRef();
  const handleClick = () => {
    if (disabled)
      return false;
    if (checked) {
      onChange(false);
    } else {
      onChange(true);
    }
  };
  const content = /* @__PURE__ */ import_react45.default.createElement(import_theme_ui11.Flex, { onKeyPress: (e) => ["Enter", " "].includes(e.key) && handleClick(), ref: checkboxRef, onClick: handleClick, sx: { position: "relative", justifyContent: "center", alignItems: "center", cursor: "pointer", width: 18, height: 18, backgroundColor: "transparent", borderRadius: "50%", transition: "background-color 500ms, border-color 500ms", borderStyle: "solid", borderWidth: 2, borderColor: "text" }, ...rest }, /* @__PURE__ */ import_react45.default.createElement(import_theme_ui11.Box, { ref: checkRef, style: { opacity: checked ? 1 : 0 }, sx: { width: 10, height: 10, borderRadius: "50%", bg: "text", pointerEvents: "none" } }));
  if (label)
    return /* @__PURE__ */ import_react45.default.createElement(import_theme_ui11.Flex, { sx: { alignItems: "center", cursor: "pointer", userSelect: "none" } }, content, /* @__PURE__ */ import_react45.default.createElement(import_theme_ui11.Label, { onClick: handleClick, sx: { ml: 2, ...labelSx } }, label));
  return content;
};
var Radio_default = Radio;

// src/Stepper.jsx
var import_react46 = __toESM(require("react"));
var import_theme_ui12 = require("theme-ui");
function Stepper({ steps, current }) {
  return /* @__PURE__ */ import_react46.default.createElement(import_theme_ui12.Flex, { sx: { alignItems: "center", justifyContent: "space-between" } }, steps.map((item, index) => /* @__PURE__ */ import_react46.default.createElement(import_theme_ui12.Flex, { key: item, sx: { flexDirection: "column", alignItems: "center" } }, current >= index ? /* @__PURE__ */ import_react46.default.createElement(import_react46.default.Fragment, null, /* @__PURE__ */ import_react46.default.createElement(import_theme_ui12.Box, null, /* @__PURE__ */ import_react46.default.createElement(import_theme_ui12.Text, { variant: "heading" }, index + 1)), /* @__PURE__ */ import_react46.default.createElement(import_theme_ui12.Box, null, /* @__PURE__ */ import_react46.default.createElement(import_theme_ui12.Text, { variant: "heading" }, item))) : /* @__PURE__ */ import_react46.default.createElement(import_react46.default.Fragment, null, /* @__PURE__ */ import_react46.default.createElement(import_theme_ui12.Box, null, index + 1), /* @__PURE__ */ import_react46.default.createElement(import_theme_ui12.Box, null, item)))));
}
var Stepper_default = Stepper;

// src/Switch.jsx
var import_react47 = __toESM(require("react"));
var import_theme_ui13 = require("theme-ui");
var sx = {
  display: "inline-block",
  position: "relative",
  width: "3rem",
  height: "1.5rem",
  backgroundColor: "#dee2e6",
  zIndex: 1,
  borderRadius: "2.125rem",
  overflow: "hidden",
  cursor: "pointer",
  borderWidth: "0.0625rem",
  borderColor: "#ced4da",
  borderStyle: "solid",
  fontSize: "0.5625rem",
  fontWeight: 800,
  transition: "300ms ease",
  transitionProperty: "color,border-style,border-color,visibility, background,background-color,text-decoration,box-shadow,transform, opacity",
  outline: "none",
  userSelect: "none",
  "&:focus": {
    boxShadow: "0 0 0 3px hsla(202,81%,86%,1)",
    border: "1px solid hsla(205,79%,66%,1)"
  },
  "&[aria-checked='true']": {
    backgroundColor: "#91b9e4",
    borderColor: "transparent",
    "& > div": {
      transform: "translateX(calc(3rem - 1.125rem - 12%))",
      "& > div": {
        backgroundColor: "hsla(211,61%,43%,1)"
      }
    }
  },
  "& > div": {
    display: "flex",
    alignItems: "center",
    height: "100%",
    pointerEvents: "none",
    transition: "300ms ease",
    transitionProperty: "color,border-style,border-color,visibility, background,background-color,text-decoration,box-shadow,transform, opacity",
    userSelect: "none"
  },
  "& > div > div": {
    flexShrink: 0,
    backgroundColor: "#adb5bd",
    borderRadius: "50%",
    width: "1.125rem",
    height: "1.125rem",
    margin: "0 6%",
    transition: "300ms ease",
    transitionProperty: "color,border-style,border-color,visibility, background,background-color,text-decoration,box-shadow,transform, opacity",
    userSelect: "none"
  }
};
var Switch = ({ checked, label, onChange, ...rest }) => {
  const handleClick = () => {
    onChange(!checked);
  };
  return /* @__PURE__ */ import_react47.default.createElement(import_theme_ui13.Box, { sx, ...rest, onKeyPress: (e) => ["Enter", " "].includes(e.key) && handleClick(), onClick: handleClick, "aria-checked": checked }, /* @__PURE__ */ import_react47.default.createElement("div", null, /* @__PURE__ */ import_react47.default.createElement("div", null)));
};
Switch.defaultProps = {
  tabIndex: 0,
  onChange: () => {
  }
};
var Switch_default = Switch;

// src/SpinnerWithDelay.jsx
var import_react48 = __toESM(require("react"));
var import_theme_ui14 = require("theme-ui");
function SpinnerWithDelay({ delay: delay2 = 500 }) {
  const [show, setShow] = import_react48.default.useState(false);
  import_react48.default.useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, delay2);
    return () => clearTimeout(timeout);
  }, []);
  return show ? /* @__PURE__ */ import_react48.default.createElement(import_theme_ui14.Spinner, null) : null;
}
var SpinnerWithDelay_default = SpinnerWithDelay;

// src/CircularProgress.jsx
var import_react49 = __toESM(require("react"));
var import_theme_ui15 = require("theme-ui");
function CircularProgress({ value = 0, height = 48, color = "currentColor", style, ...rest }) {
  if (value > 100)
    value = 100;
  if (value < 0)
    value = 0;
  const diff = 100 - value;
  const strokeDashoffset = value && value <= 100 ? 126.92 * diff / 100 : 126.92;
  return /* @__PURE__ */ import_react49.default.createElement("svg", { viewBox: "22 22 44 44", height, fill: color, style: { transform: "rotate(-90deg)", ...style }, ...rest }, /* @__PURE__ */ import_react49.default.createElement("circle", { style: { transition: "stroke-dashoffset 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms", stroke: "currentcolor", strokeDasharray: "126.920", strokeDashoffset: `${strokeDashoffset}px` }, cx: "44", cy: "44", r: "20.2", fill: "none", strokeWidth: "3.6" }));
}
function CircularProgressWithBg({ value = 0, height = 48, color = "currentColor", style, ...rest }) {
  return /* @__PURE__ */ import_react49.default.createElement(import_theme_ui15.Box, { sx: { display: "inline-flex", position: "relative" } }, /* @__PURE__ */ import_react49.default.createElement("svg", { viewBox: "22 22 44 44", height, style: { position: "absolute" } }, /* @__PURE__ */ import_react49.default.createElement("circle", { style: { stroke: "lightgray" }, cx: "44", cy: "44", r: "20.2", fill: "none", strokeWidth: "3.6" })), /* @__PURE__ */ import_react49.default.createElement(CircularProgress, { value, height, color, style: { ...style, position: "absolute" }, ...rest }));
}
function CircularProgressWithLabel({ value = 0, height = 48, color = "currentColor", hideLabel = false, style, ...rest }) {
  return /* @__PURE__ */ import_react49.default.createElement(import_theme_ui15.Box, { sx: { display: "inline-flex", position: "relative" } }, /* @__PURE__ */ import_react49.default.createElement(import_theme_ui15.Box, { sx: { display: "inline-block", width: height, height } }, /* @__PURE__ */ import_react49.default.createElement("svg", { viewBox: "22 22 44 44", height, style: { position: "absolute" } }, /* @__PURE__ */ import_react49.default.createElement("circle", { style: { stroke: "lightgray" }, cx: "44", cy: "44", r: "20.2", fill: "none", strokeWidth: "3.6" }))), /* @__PURE__ */ import_react49.default.createElement(CircularProgress, { value, height, color, style: { ...style, position: "absolute" }, ...rest }), !hideLabel && /* @__PURE__ */ import_react49.default.createElement(import_theme_ui15.Box, { sx: { top: 0, left: 0, bottom: 0, right: 0, position: "absolute", display: "flex", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ import_react49.default.createElement(import_theme_ui15.Text, { sx: { fontSize: 1 } }, `${Math.round(value)}%`)));
}

// src/Menu.jsx
var import_react50 = __toESM(require("react"));
var import_react_router_dom2 = require("react-router-dom");
var import_theme_ui16 = require("theme-ui");
var import_styled4 = __toESM(require("@emotion/styled"));
var Menu = (0, import_styled4.default)(({ children, className, ...rest }) => /* @__PURE__ */ import_react50.default.createElement(import_theme_ui16.Box, { sx: { pb: 2, minWidth: 100 }, className, ...rest }, children))``;
var MenuItem = ({ children, className, to, ...rest }) => {
  if (to) {
    return /* @__PURE__ */ import_react50.default.createElement(import_react_router_dom2.Link, { to }, /* @__PURE__ */ import_react50.default.createElement(import_theme_ui16.Box, { sx: { cursor: "pointer", py: 2, px: 3 }, className, ...rest }, children));
  }
  return /* @__PURE__ */ import_react50.default.createElement(import_theme_ui16.Box, { sx: { cursor: "pointer", py: 2, px: 3 }, className, ...rest }, children);
};

// src/Table.jsx
var import_react51 = __toESM(require("react"));
var import_styled5 = __toESM(require("@emotion/styled"));
var import_theme_ui17 = require("theme-ui");
var import_use_double_tap = require("use-double-tap");
var import_hooks4 = require("hooks");
var import_theme_ui18 = require("theme-ui");
var import_hooks5 = require("hooks");
var Input2 = import_styled5.default.input`
  font: inherit;
  color: inherit;
  border: none;
  width: 100%;
  height: calc(36px);
  padding: 0 10px;
  background: transparent;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:focus {
    outline: rgb(6, 29, 224) solid 2px;
    outline-offset: -2px;
  }
`;
function TableCellDiv({ children, options = [], onChange = () => {
}, ...rest }) {
  const [originalValue, setOriginalValue] = import_react51.default.useState(children);
  const [isEditing, setIsEditing] = import_react51.default.useState(false);
  const [value, setValue] = import_react51.default.useState(children || "");
  const inputRef = import_react51.default.useRef(null);
  (0, import_hooks4.useIgnoreMount)(children, (newValue) => {
    setValue(newValue);
  });
  const bind = (0, import_use_double_tap.useDoubleTap)(() => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current.focus();
    }, 10);
  });
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleFocus = (event) => {
    event.target.select();
  };
  const handleBlur = () => {
    setIsEditing(false);
    if (value !== originalValue) {
      setOriginalValue(value);
      onChange(value);
    }
  };
  const handleDivKeyPress = (event) => {
    if (event.key === "Enter") {
      setIsEditing(true);
      setTimeout(() => {
        inputRef.current.focus();
      }, 10);
    } else if (event.key === "Escape") {
      setValue(children);
      setIsEditing(false);
    }
  };
  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);
    } else if (event.key === "Escape") {
      setValue(children);
      setIsEditing(false);
    }
  };
  return /* @__PURE__ */ import_react51.default.createElement(import_react51.default.Fragment, null, !isEditing && /* @__PURE__ */ import_react51.default.createElement(import_theme_ui17.Box, { onKeyPress: handleDivKeyPress, tabIndex: 0, ...rest, ...bind }, value), /* @__PURE__ */ import_react51.default.createElement(import_theme_ui17.Box, { sx: { display: isEditing ? "block" : "none" } }, /* @__PURE__ */ import_react51.default.createElement(Input2, { list: "data", onKeyDown: handleInputKeyDown, ref: inputRef, value, onChange: handleChange, onFocus: handleFocus, onBlur: handleBlur }), /* @__PURE__ */ import_react51.default.createElement("datalist", { id: "data" }, options.map((option) => /* @__PURE__ */ import_react51.default.createElement("option", { key: option, value: option })))));
}
var ArrowUpIcon = () => /* @__PURE__ */ import_react51.default.createElement("svg", { viewBox: "0 0 24 24", height: 16, fill: "currentColor" }, /* @__PURE__ */ import_react51.default.createElement("path", { d: "M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z" }));
var ArrowDownIcon = () => /* @__PURE__ */ import_react51.default.createElement("svg", { viewBox: "0 0 24 24", height: 16, fill: "currentColor" }, /* @__PURE__ */ import_react51.default.createElement("path", { d: "M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z" }));
function SortLabel({ headerField, currentField, label, currentAscOrDesc, onChange }) {
  if (headerField === currentField) {
    return /* @__PURE__ */ import_react51.default.createElement(import_theme_ui17.Box, { onClick: () => onChange(`${headerField} ${currentAscOrDesc === "asc" ? "desc" : "asc"}`), sx: { display: "inline-flex", alignItems: "center", cursor: "pointer", textDecoration: "underline", textUnderlinePosition: "under" } }, /* @__PURE__ */ import_react51.default.createElement(import_theme_ui17.Box, { sx: { userSelect: "none" } }, label), /* @__PURE__ */ import_react51.default.createElement(import_theme_ui17.Box, { sx: { display: "inline-flex" } }, currentAscOrDesc.toLowerCase() === "desc" ? /* @__PURE__ */ import_react51.default.createElement(ArrowUpIcon, null) : /* @__PURE__ */ import_react51.default.createElement(ArrowDownIcon, null)));
  }
  return /* @__PURE__ */ import_react51.default.createElement(import_theme_ui17.Box, { onClick: () => onChange(`${headerField} asc`), sx: { display: "inline-flex", cursor: "pointer", textDecoration: "underline", textUnderlinePosition: "under" } }, label);
}
var TableContainer = (0, import_styled5.default)(import_theme_ui17.Box)`
  flex-grow: 1;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: hsl(0, 0%, 0%, 0.38);
  }
`;
var Table = (0, import_styled5.default)(import_theme_ui18.Themed.table)`
  width: fit-content;
  min-width: 100%;
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0;
`;
var THead = import_styled5.default.thead``;
var TBody = import_styled5.default.tbody``;
var TR = (0, import_styled5.default)(import_theme_ui18.Themed.tr)`
  height: ${(props) => (props == null ? void 0 : props.height) || "40px"};
  &:hover td {
    background: ${(props) => {
  var _a, _b;
  return ((_b = (_a = props == null ? void 0 : props.theme) == null ? void 0 : _a.colors) == null ? void 0 : _b.elevated) || "hsl(0deg 0% 97%)";
}};
  }
  ${(props) => (props == null ? void 0 : props.selected) && "& td { background-color: var(--theme-ui-colors-hairline); !important; }"}
  &.open > td {
    background-color: hsl(218deg 66% 94%) !important;
  }
  ${(props) => (props == null ? void 0 : props.contextMenuOpen) && "& td { background-color: hsl(223deg 47% 97%) !important; }"}
`;
var TH = (0, import_styled5.default)(import_theme_ui18.Themed.th)`
  position: sticky;
  top: 0px;
  text-align: left;
  user-select: none;
  white-space: nowrap;
  font-weight: ${(props) => {
  var _a, _b;
  return ((_b = (_a = props == null ? void 0 : props.theme) == null ? void 0 : _a.fontWeights) == null ? void 0 : _b.bold) || "500";
}};
  z-index: 1;
  user-select: none;

  background-color: ${(props) => {
  var _a, _b;
  return ((_b = (_a = props == null ? void 0 : props.theme) == null ? void 0 : _a.colors) == null ? void 0 : _b.elevated) || "hsl(0deg 0% 97%)";
}};
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${(props) => {
  var _a, _b;
  return ((_b = (_a = props == null ? void 0 : props.theme) == null ? void 0 : _a.colors) == null ? void 0 : _b.hairline) || "hsl(0deg 0% 80%)";
}};

  &.right {
    text-align: right;
  }
`;
var THSticky = (0, import_styled5.default)(TH)`
  left: 0;
  z-index: 3;
  user-select: none;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: -1px;
    right: 0;
    width: 30px;
    pointer-events: none;
    transition: box-shadow 0.3s;
    box-shadow: ${(props) => props.showShadow ? "inset 10px 0 8px -8px hsl(0deg 0% 85%)" : "none"};
    transform: translateX(100%);
  }
`;
var AnimatedTHSticky = import_styled5.default.th`
  position: sticky;
  top: 0;
  height: 3rem;
  text-align: left;
  text-transform: uppercase;
  font-size: 0.8rem;
  padding: 0.7rem 0.9rem;
  background-color: #fafafa;
  font-weight: 500;
  /* z-index: 2; */

  left: 0px;
  /* z-index: 3; */
  &.shadow:after {
    box-shadow: inset 10px 0 8px -8px hsl(0deg 0% 85%);
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: -1px;
    right: 0;
    width: 30px;
    pointer-events: none;
    transition: box-shadow 0.3s;
    transform: translateX(100%);
  }
  display: none;

  @media (min-width: 40em) {
    display: table-cell;
  }
`;
var TD = (0, import_styled5.default)(import_theme_ui18.Themed.td)`
  line-height: 1em;

  background-color: ${(props) => {
  var _a, _b;
  return ((_b = (_a = props == null ? void 0 : props.theme) == null ? void 0 : _a.colors) == null ? void 0 : _b.canvas) || "white";
}};
  border-bottom: 1px solid ${(props) => {
  var _a, _b;
  return ((_b = (_a = props == null ? void 0 : props.theme) == null ? void 0 : _a.colors) == null ? void 0 : _b.hairline) || "hsl(0deg 0% 80%)";
}};

  &.number {
    font-feature-settings: "tnum";
    text-align: right;
  }
`;
var TDSticky = (0, import_styled5.default)(TD)`
  position: sticky;
  left: 0;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: -1px;
    right: 0;
    width: 30px;
    pointer-events: none;
    transition: box-shadow 0.3s;
    box-shadow: ${(props) => props.showShadow ? "inset 10px 0 8px -8px hsl(0deg 0% 85%)" : "none"};
    transform: translateX(100%);
  }
`;
var Truncate = (0, import_styled5.default)(import_theme_ui17.Box)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
var NoWrap = import_styled5.default.span`
  white-space: nowrap;
`;
var TableDiv = (0, import_styled5.default)(TableCellDiv)`
  width: 100%;
  height: calc(36px);
  line-height: 24px;
  padding: 6px 10px;
  font-weight: 400;
  background: transparent;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  cursor: default;
`;
function ResizableTH({ children, initialWidth = 200, minWidth = 100, maxWidth = 400, style = {}, onChange = () => {
}, ...rest }) {
  const [col1Width, setCol1Width] = import_react51.default.useState(initialWidth);
  const { bind, styles, animated: animated4 } = (0, import_hooks5.useResize)({ initialWidth: col1Width, minWidth, maxWidth, immediate: true, onChange: (value) => {
    setCol1Width(value);
    onChange(value);
  } });
  return /* @__PURE__ */ import_react51.default.createElement(animated4.th, { style: { userSelect: "none", position: "sticky", top: 0, height: "3rem", backgroundColor: "var(--theme-ui-colors-elevated)", borderBottom: "1px solid var(--theme-ui-colors-hairline)", textAlign: "left", fontWeight: 500, ...style, ...styles }, ...rest }, children, /* @__PURE__ */ import_react51.default.createElement("div", { ...bind(), style: { position: "absolute", right: 0, top: 10, userSelect: "none", cursor: "col-resize" } }, /* @__PURE__ */ import_react51.default.createElement(Icon_default, { height: 20, path: "M9,3H11V5H9V3M13,3H15V5H13V3M9,7H11V9H9V7M13,7H15V9H13V7M9,11H11V13H9V11M13,11H15V13H13V11M9,15H11V17H9V15M13,15H15V17H13V15M9,19H11V21H9V19M13,19H15V21H13V19Z" })));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AnimatedTHSticky,
  Button,
  ButtonIcon,
  ButtonWithLoading,
  Checkbox,
  CircularProgress,
  CircularProgressWithBg,
  CircularProgressWithLabel,
  Close,
  FieldCheckbox,
  FieldInput,
  FieldInputPassword,
  FieldSelect,
  FieldTextarea,
  Floating,
  FormErrorBox,
  Icon,
  Input,
  InputMasked,
  InputPassword,
  InputSearch,
  LinkButton,
  Menu,
  MenuItem,
  Modal,
  MultiCheck,
  MultiCheckLabelValue,
  NoWrap,
  OptimisticCheckbox,
  Pagination,
  PopOver,
  Portal,
  Radio,
  ResizableTH,
  Select,
  SortLabel,
  SpinnerWithDelay,
  Stepper,
  Switch,
  TBody,
  TD,
  TDSticky,
  TH,
  THSticky,
  THead,
  TR,
  Table,
  TableContainer,
  TableDiv,
  Tabs,
  Textarea,
  Tooltip,
  Truncate
});
