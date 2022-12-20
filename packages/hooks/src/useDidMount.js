import React from 'react'

const useDidMount = (callback) => {
  const fn = React.useCallback(callback, [])
  React.useEffect(() => {
    fn()
  }, [fn])
}

export default useDidMount
