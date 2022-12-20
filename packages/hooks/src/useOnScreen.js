import React from 'react'

function useOnScreen(ref) {

  const [isIntersecting, setIntersecting] = React.useState(false)

  const observer = new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  )

  React.useEffect(() => {
    if (observer && ref && ref.current && ref.current.nodeType && ref.current.nodeType === Node.ELEMENT_NODE) {
      observer.observe(ref.current)
    }
    // Remove the observer as soon as the component is unmounted
    return () => {
      if (observer) {
        observer.disconnect()
      }
    }
  }, [observer, ref])

  return isIntersecting
}

export default useOnScreen
