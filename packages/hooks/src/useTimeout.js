import React from 'react'

function useTimeout(callback, timeout = 0) {
  const timeoutId = React.useRef()
  const handler = React.useMemo(() => {
    return {
      start(overrideTimeout) {
        handler.stop()
        timeoutId.current = setTimeout(callback, overrideTimeout === undefined ? timeout : overrideTimeout)
      },

      stop() {
        if (timeoutId.current) {
          clearTimeout(timeoutId.current)
        }
      },

      restart() {
        handler.stop()
        handler.start()
      }
    }
  }, [callback, timeout])

  React.useEffect(() => {
    return () => {
      handler.stop()
    }
  }, [handler])

  return handler
}

export default useTimeout
