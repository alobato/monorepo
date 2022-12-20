import React from 'react'

function useCallOnVisible(func) {

  React.useEffect(() => {
    const handleVisibilityChange = e => {
      if (typeof document.hidden !== 'undefined' && !document.hidden) {
        func()
      }
    }
    if (typeof document.addEventListener !== 'undefined' && typeof document.hidden !== 'undefined') {
      document.addEventListener('visibilitychange', handleVisibilityChange, false)
      return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange)
      }
    }
  }, [func])

}

export default useCallOnVisible
