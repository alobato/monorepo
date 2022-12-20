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
  use100vh: () => use100vh_default,
  useCallOnVisible: () => useCallOnVisible_default,
  useDebounce: () => useDebounce_default,
  useDidMount: () => useDidMount_default,
  useFocusOnLoad: () => useFocusOnLoad_default,
  useIgnoreMount: () => useIgnoreMount_default,
  useLocalStorage: () => useLocalStorage_default,
  useLockBodyScroll: () => useLockBodyScroll_default,
  useOnScreen: () => useOnScreen_default,
  usePrevious: () => usePrevious_default,
  useResize: () => useResize_default,
  useScrollPosition: () => useScrollPosition_default,
  useTimeout: () => useTimeout_default
});
module.exports = __toCommonJS(src_exports);

// src/use100vh.js
var import_react = __toESM(require("react"));
function isClient() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}
function measureWidth() {
  if (!isClient())
    return null;
  return window.innerWidth;
}
function measureHeight() {
  if (!isClient())
    return null;
  return window.innerHeight;
}
function useWasRenderedOnClientAtLeastOnce() {
  const [wasRenderedOnClientAtLeastOnce, setWasRenderedOnClientAtLeastOnce] = import_react.default.useState(false);
  import_react.default.useEffect(() => {
    if (isClient()) {
      setWasRenderedOnClientAtLeastOnce(true);
    }
  }, []);
  return wasRenderedOnClientAtLeastOnce;
}
function use100vh() {
  const [height, setHeight] = import_react.default.useState(measureHeight);
  const [width, setWidth] = import_react.default.useState(measureWidth);
  const wasRenderedOnClientAtLeastOnce = useWasRenderedOnClientAtLeastOnce();
  import_react.default.useEffect(() => {
    if (!wasRenderedOnClientAtLeastOnce)
      return;
    function handleMeasure() {
      const measuredHeight = measureHeight();
      const measuredWidth = measureWidth();
      setHeight(measuredHeight);
      setWidth(measuredWidth);
    }
    window.addEventListener("resize", handleMeasure);
    return () => window.removeEventListener("resize", handleMeasure);
  }, [wasRenderedOnClientAtLeastOnce]);
  return wasRenderedOnClientAtLeastOnce ? [width, height] : [null, null];
}
var use100vh_default = use100vh;

// src/useCallOnVisible.js
var import_react2 = __toESM(require("react"));
function useCallOnVisible(func) {
  import_react2.default.useEffect(() => {
    const handleVisibilityChange = (e) => {
      if (typeof document.hidden !== "undefined" && !document.hidden) {
        func();
      }
    };
    if (typeof document.addEventListener !== "undefined" && typeof document.hidden !== "undefined") {
      document.addEventListener("visibilitychange", handleVisibilityChange, false);
      return () => {
        document.removeEventListener("visibilitychange", handleVisibilityChange);
      };
    }
  }, [func]);
}
var useCallOnVisible_default = useCallOnVisible;

// src/useDebounce.js
var import_react3 = require("react");
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = (0, import_react3.useState)(value);
  (0, import_react3.useEffect)(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}
var useDebounce_default = useDebounce;

// src/useDidMount.js
var import_react4 = __toESM(require("react"));
var useDidMount = (callback) => {
  const fn = import_react4.default.useCallback(callback, []);
  import_react4.default.useEffect(() => {
    fn();
  }, [fn]);
};
var useDidMount_default = useDidMount;

// src/useFocusOnLoad.js
var import_react5 = __toESM(require("react"));
function useFocusOnLoad(elementName, select = false) {
  import_react5.default.useEffect(() => {
    const isMobile = Boolean(navigator.userAgent.match(/Android/i)) || Boolean(navigator.userAgent.match(/iPhone|iPad|iPod/i));
    if (!isMobile) {
      setTimeout(() => {
        const firstElement = document.querySelector(`[name="${elementName}"]`);
        if (firstElement) {
          firstElement.focus();
          if (select)
            firstElement.select();
        }
      }, 100);
    }
  }, [elementName, select]);
}
var useFocusOnLoad_default = useFocusOnLoad;

// src/useIgnoreMount.js
var import_react7 = __toESM(require("react"));
var import_lodash = __toESM(require("lodash.isequal"));

// src/usePrevious.js
var import_react6 = require("react");
function usePrevious(value) {
  const ref = (0, import_react6.useRef)();
  (0, import_react6.useEffect)(() => {
    ref.current = value;
  });
  return ref.current;
}
var usePrevious_default = usePrevious;

// src/useIgnoreMount.js
function useIgnoreMount(state, callback) {
  const didMountRef = import_react7.default.useRef(false);
  const previousState = usePrevious_default(state);
  const fn = import_react7.default.useCallback(callback, [callback]);
  import_react7.default.useEffect(() => {
    if (didMountRef.current && !(0, import_lodash.default)(previousState, state)) {
      fn(state);
    } else {
      didMountRef.current = true;
    }
  }, [state, fn, previousState]);
}
var useIgnoreMount_default = useIgnoreMount;

// src/useLocalStorage.js
var import_react8 = require("react");
function useLocalStorage(key, initialValue) {
  const [items, setItems] = (0, import_react8.useState)(() => window.localStorage.getItem(key) ? JSON.parse(window.localStorage.getItem(key)) : initialValue);
  (0, import_react8.useEffect)(() => {
    window.localStorage.setItem(key, JSON.stringify(items));
  }, [items, key]);
  return [items, setItems];
}
var useLocalStorage_default = useLocalStorage;

// src/useLockBodyScroll.js
var import_react9 = __toESM(require("react"));
function getClosestBody(el) {
  if (!el) {
    return null;
  } else if (el.tagName === "BODY") {
    return el;
  } else if (el.tagName === "IFRAME") {
    const document2 = el.contentDocument;
    return document2 ? document2.body : null;
  } else if (!el.offsetParent) {
    return null;
  }
  return getClosestBody(el.offsetParent);
}
function preventDefault(rawEvent) {
  const e = rawEvent || window.event;
  if (e.touches.length > 1)
    return true;
  if (e.preventDefault)
    e.preventDefault();
  return false;
}
var isIosDevice = typeof window !== "undefined" && window.navigator && window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform);
var bodies = /* @__PURE__ */ new Map();
var doc = typeof document === "object" ? document : void 0;
var documentListenerAdded = false;
function useLockBody(locked = true, elementRef) {
  elementRef = import_react9.default.useRef(doc.body);
  const lock = (body) => {
    const bodyInfo = bodies.get(body);
    if (!bodyInfo) {
      bodies.set(body, { counter: 1, initialOverflow: body.style.overflow });
      if (isIosDevice) {
        if (!documentListenerAdded) {
          document.addEventListener("touchmove", preventDefault, {
            passive: false
          });
          documentListenerAdded = true;
        }
      } else {
        body.style.overflow = "hidden";
      }
    } else {
      bodies.set(body, {
        counter: bodyInfo.counter + 1,
        initialOverflow: bodyInfo.initialOverflow
      });
    }
  };
  const unlock = (body) => {
    const bodyInfo = bodies.get(body);
    if (bodyInfo) {
      if (bodyInfo.counter === 1) {
        bodies.delete(body);
        if (isIosDevice) {
          body.ontouchmove = null;
          if (documentListenerAdded) {
            document.removeEventListener("touchmove", preventDefault);
            documentListenerAdded = false;
          }
        } else {
          body.style.overflow = bodyInfo.initialOverflow;
        }
      } else {
        bodies.set(body, {
          counter: bodyInfo.counter - 1,
          initialOverflow: bodyInfo.initialOverflow
        });
      }
    }
  };
  import_react9.default.useEffect(() => {
    const body = getClosestBody(elementRef.current);
    if (!body)
      return;
    if (locked) {
      lock(body);
    } else {
      unlock(body);
    }
  }, [locked, elementRef.current]);
  import_react9.default.useEffect(() => {
    const body = getClosestBody(elementRef.current);
    if (!body)
      return;
    return () => {
      unlock(body);
    };
  }, []);
}
var useLockBodyScroll_default = useLockBody;

// src/useOnScreen.js
var import_react10 = __toESM(require("react"));
function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = import_react10.default.useState(false);
  const observer = new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  );
  import_react10.default.useEffect(() => {
    if (observer && ref && ref.current && ref.current.nodeType && ref.current.nodeType === Node.ELEMENT_NODE) {
      observer.observe(ref.current);
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [observer, ref]);
  return isIntersecting;
}
var useOnScreen_default = useOnScreen;

// src/useResize.js
var import_web = require("@react-spring/web");
var import_react_use_gesture = require("react-use-gesture");
function useResize({ initialWidth, minWidth = 0, maxWidth = 1e3, onChange = () => {
}, immediate = true }) {
  const [styles, api] = (0, import_web.useSpring)(() => ({ width: initialWidth }));
  let newWidth;
  const bind = (0, import_react_use_gesture.useDrag)(
    ({ last, down, movement: [x] }) => {
      if (down) {
        newWidth = initialWidth + x;
        if (newWidth < minWidth)
          newWidth = minWidth;
        if (newWidth > maxWidth)
          newWidth = maxWidth;
        api.start({ width: newWidth, immediate });
      }
      if (last) {
        onChange(newWidth);
      }
    },
    {}
  );
  return { styles, bind, animated: import_web.animated };
}
var useResize_default = useResize;

// src/useScrollPosition.js
var import_react11 = require("react");
var zeroPosition = { x: 0, y: 0 };
var getClientRect = (element) => element == null ? void 0 : element.getBoundingClientRect();
var getScrollPosition = ({ element, useWindow, boundingElement }) => {
  if (useWindow) {
    return { x: window.scrollX, y: window.scrollY };
  }
  const targetPosition = getClientRect((element == null ? void 0 : element.current) || document.body);
  const containerPosition = getClientRect(boundingElement == null ? void 0 : boundingElement.current);
  if (!targetPosition) {
    return zeroPosition;
  }
  return containerPosition ? {
    x: (containerPosition.x || 0) - (targetPosition.x || 0),
    y: (containerPosition.y || 0) - (targetPosition.y || 0)
  } : { x: targetPosition.left, y: targetPosition.top };
};
var useScrollPosition = (effect, deps, element, boundingElement) => {
  const useWindow = false;
  const position = (0, import_react11.useRef)(getScrollPosition({ element, useWindow, boundingElement }));
  const throttleTimeout = (0, import_react11.useRef)();
  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow, boundingElement });
    effect({ prevPos: position.current, currPos });
    position.current = currPos;
    throttleTimeout.current = null;
  };
  (0, import_react11.useEffect)(() => {
    var _a;
    const handleScroll = () => {
      throttleTimeout.current = window.setTimeout(callBack, 100);
    };
    (_a = boundingElement.current) == null ? void 0 : _a.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => {
      var _a2;
      (_a2 = boundingElement.current) == null ? void 0 : _a2.removeEventListener("scroll", handleScroll);
    };
  }, deps);
};
var useScrollPosition_default = useScrollPosition;

// src/useTimeout.js
var import_react12 = __toESM(require("react"));
function useTimeout(callback, timeout = 0) {
  const timeoutId = import_react12.default.useRef();
  const handler = import_react12.default.useMemo(() => {
    return {
      start(overrideTimeout) {
        handler.stop();
        timeoutId.current = setTimeout(callback, overrideTimeout === void 0 ? timeout : overrideTimeout);
      },
      stop() {
        if (timeoutId.current) {
          clearTimeout(timeoutId.current);
        }
      },
      restart() {
        handler.stop();
        handler.start();
      }
    };
  }, [callback, timeout]);
  import_react12.default.useEffect(() => {
    return () => {
      handler.stop();
    };
  }, [handler]);
  return handler;
}
var useTimeout_default = useTimeout;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  use100vh,
  useCallOnVisible,
  useDebounce,
  useDidMount,
  useFocusOnLoad,
  useIgnoreMount,
  useLocalStorage,
  useLockBodyScroll,
  useOnScreen,
  usePrevious,
  useResize,
  useScrollPosition,
  useTimeout
});
