// src/AppContext.jsx
import React from "react";
var AppContext = React.createContext([{}, () => {
}]);
var AppProvider = ({ children, defaultValue = {} }) => {
  const [state, setState] = React.useState(defaultValue);
  const setItemState = (item) => setState((currentState) => ({ ...currentState, ...item }));
  return /* @__PURE__ */ React.createElement(AppContext.Provider, { value: { state, setState, setItemState } }, children);
};
var useAppContext = () => React.useContext(AppContext);

// src/MessageContext.jsx
import React2 from "react";
import toast, { Toaster } from "react-hot-toast";
var MessageContext = React2.createContext([{}, () => {
}]);
var MessageProvider = ({ children }) => {
  return /* @__PURE__ */ React2.createElement(MessageContext.Provider, { value: { message: toast } }, /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement(Toaster, null), children));
};
var useMessageContext = () => React2.useContext(MessageContext);
export {
  AppContext,
  AppProvider,
  MessageContext,
  MessageProvider,
  useAppContext,
  useMessageContext
};
