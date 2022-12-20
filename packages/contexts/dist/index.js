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
  AppContext: () => AppContext,
  AppProvider: () => AppProvider,
  MessageContext: () => MessageContext,
  MessageProvider: () => MessageProvider,
  useAppContext: () => useAppContext,
  useMessageContext: () => useMessageContext
});
module.exports = __toCommonJS(src_exports);

// src/AppContext.jsx
var import_react = __toESM(require("react"));
var AppContext = import_react.default.createContext([{}, () => {
}]);
var AppProvider = ({ children, defaultValue = {} }) => {
  const [state, setState] = import_react.default.useState(defaultValue);
  const setItemState = (item) => setState((currentState) => ({ ...currentState, ...item }));
  return /* @__PURE__ */ import_react.default.createElement(AppContext.Provider, { value: { state, setState, setItemState } }, children);
};
var useAppContext = () => import_react.default.useContext(AppContext);

// src/MessageContext.jsx
var import_react2 = __toESM(require("react"));
var import_react_hot_toast = __toESM(require("react-hot-toast"));
var MessageContext = import_react2.default.createContext([{}, () => {
}]);
var MessageProvider = ({ children }) => {
  return /* @__PURE__ */ import_react2.default.createElement(MessageContext.Provider, { value: { message: import_react_hot_toast.default } }, /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement(import_react_hot_toast.Toaster, null), children));
};
var useMessageContext = () => import_react2.default.useContext(MessageContext);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppContext,
  AppProvider,
  MessageContext,
  MessageProvider,
  useAppContext,
  useMessageContext
});
