// src/use100vh.js
import React from "react";
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
  const [wasRenderedOnClientAtLeastOnce, setWasRenderedOnClientAtLeastOnce] = React.useState(false);
  React.useEffect(() => {
    if (isClient()) {
      setWasRenderedOnClientAtLeastOnce(true);
    }
  }, []);
  return wasRenderedOnClientAtLeastOnce;
}
function use100vh() {
  const [height, setHeight] = React.useState(measureHeight);
  const [width, setWidth] = React.useState(measureWidth);
  const wasRenderedOnClientAtLeastOnce = useWasRenderedOnClientAtLeastOnce();
  React.useEffect(() => {
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
import React2 from "react";
function useCallOnVisible(func) {
  React2.useEffect(() => {
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
import { useState, useEffect } from "react";
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
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
import React3 from "react";
var useDidMount = (callback) => {
  const fn = React3.useCallback(callback, []);
  React3.useEffect(() => {
    fn();
  }, [fn]);
};
var useDidMount_default = useDidMount;

// src/useFocusOnLoad.js
import React4 from "react";
function useFocusOnLoad(elementName, select = false) {
  React4.useEffect(() => {
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
import React5 from "react";
import isEqual from "lodash.isequal";

// src/usePrevious.js
import { useEffect as useEffect2, useRef } from "react";
function usePrevious(value) {
  const ref = useRef();
  useEffect2(() => {
    ref.current = value;
  });
  return ref.current;
}
var usePrevious_default = usePrevious;

// src/useIgnoreMount.js
function useIgnoreMount(state, callback) {
  const didMountRef = React5.useRef(false);
  const previousState = usePrevious_default(state);
  const fn = React5.useCallback(callback, [callback]);
  React5.useEffect(() => {
    if (didMountRef.current && !isEqual(previousState, state)) {
      fn(state);
    } else {
      didMountRef.current = true;
    }
  }, [state, fn, previousState]);
}
var useIgnoreMount_default = useIgnoreMount;

// src/useLocalStorage.js
import { useEffect as useEffect3, useState as useState2 } from "react";
function useLocalStorage(key, initialValue) {
  const [items, setItems] = useState2(() => window.localStorage.getItem(key) ? JSON.parse(window.localStorage.getItem(key)) : initialValue);
  useEffect3(() => {
    window.localStorage.setItem(key, JSON.stringify(items));
  }, [items, key]);
  return [items, setItems];
}
var useLocalStorage_default = useLocalStorage;

// src/useLockBodyScroll.js
import React6 from "react";
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
  elementRef = React6.useRef(doc.body);
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
  React6.useEffect(() => {
    const body = getClosestBody(elementRef.current);
    if (!body)
      return;
    if (locked) {
      lock(body);
    } else {
      unlock(body);
    }
  }, [locked, elementRef.current]);
  React6.useEffect(() => {
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
import React7 from "react";
function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = React7.useState(false);
  const observer = new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  );
  React7.useEffect(() => {
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
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
function useResize({ initialWidth, minWidth = 0, maxWidth = 1e3, onChange = () => {
}, immediate = true }) {
  const [styles, api] = useSpring(() => ({ width: initialWidth }));
  let newWidth;
  const bind = useDrag(
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
  return { styles, bind, animated };
}
var useResize_default = useResize;

// src/useScrollPosition.js
import { useEffect as useEffect4, useRef as useRef2 } from "react";
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
  const position = useRef2(getScrollPosition({ element, useWindow, boundingElement }));
  const throttleTimeout = useRef2();
  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow, boundingElement });
    effect({ prevPos: position.current, currPos });
    position.current = currPos;
    throttleTimeout.current = null;
  };
  useEffect4(() => {
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
import React8 from "react";
function useTimeout(callback, timeout = 0) {
  const timeoutId = React8.useRef();
  const handler = React8.useMemo(() => {
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
  React8.useEffect(() => {
    return () => {
      handler.stop();
    };
  }, [handler]);
  return handler;
}
var useTimeout_default = useTimeout;
export {
  use100vh_default as use100vh,
  useCallOnVisible_default as useCallOnVisible,
  useDebounce_default as useDebounce,
  useDidMount_default as useDidMount,
  useFocusOnLoad_default as useFocusOnLoad,
  useIgnoreMount_default as useIgnoreMount,
  useLocalStorage_default as useLocalStorage,
  useLockBodyScroll_default as useLockBodyScroll,
  useOnScreen_default as useOnScreen,
  usePrevious_default as usePrevious,
  useResize_default as useResize,
  useScrollPosition_default as useScrollPosition,
  useTimeout_default as useTimeout
};
