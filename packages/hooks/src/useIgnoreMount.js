import React from 'react'
import isEqual from 'lodash.isequal'
import usePrevious from './usePrevious'

function useIgnoreMount(state, callback) {
  const didMountRef = React.useRef(false)
  const previousState = usePrevious(state)
  const fn = React.useCallback(callback, [callback])

  React.useEffect(() => {
    if (didMountRef.current && !isEqual(previousState, state)) {
      fn(state)
    } else {
      didMountRef.current = true
    }
  }, [state, fn, previousState])
}

export default useIgnoreMount
