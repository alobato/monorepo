// https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj
// https://github.com/n8tb1t/use-scroll-position
import { useEffect, useRef } from 'react'

const zeroPosition = { x: 0, y: 0 }

const getClientRect = (element) => element?.getBoundingClientRect()

const getScrollPosition = ({ element, useWindow, boundingElement }) => {
  if (useWindow) {
    return { x: window.scrollX, y: window.scrollY }
  }

  const targetPosition = getClientRect(element?.current || document.body)
  const containerPosition = getClientRect(boundingElement?.current)

  if (!targetPosition) {
    return zeroPosition
  }

  return containerPosition
    ? {
        x: (containerPosition.x || 0) - (targetPosition.x || 0),
        y: (containerPosition.y || 0) - (targetPosition.y || 0)
      }
    : { x: targetPosition.left, y: targetPosition.top }
}

const useScrollPosition = (effect, deps, element, boundingElement) => {
  const useWindow = false

  const position = useRef(getScrollPosition({ element, useWindow, boundingElement }))
  const throttleTimeout = useRef()

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow, boundingElement })
    effect({ prevPos: position.current, currPos })
    position.current = currPos
    throttleTimeout.current = null
  }

  useEffect(() => {
    const handleScroll = () => {
      throttleTimeout.current = window.setTimeout(callBack, 100)
      // callBack()
    }

    boundingElement.current?.addEventListener('scroll', handleScroll, {
      passive: true
    })

    return () => {
      // eslint-disable-next-line
      boundingElement.current?.removeEventListener('scroll', handleScroll)
    }
    // eslint-disable-next-line
  }, deps)
}

// useScrollPosition.defaultProps = {
//   deps: [],
//   element: false,
//   useWindow: false,
//   wait: null,
//   boundingElement: false,
// }

export default useScrollPosition
