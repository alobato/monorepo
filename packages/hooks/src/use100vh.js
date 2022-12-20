import React from 'react'

function isClient() {
  return typeof window !== 'undefined' && typeof document !== 'undefined'
}

function measureWidth() {
  if (!isClient()) return null
  return window.innerWidth
}

function measureHeight() {
  if (!isClient()) return null
  return window.innerHeight
}

function useWasRenderedOnClientAtLeastOnce() {
  const [wasRenderedOnClientAtLeastOnce, setWasRenderedOnClientAtLeastOnce] = React.useState(false)

  React.useEffect(() => {
    if (isClient()) {
      setWasRenderedOnClientAtLeastOnce(true)
    }
  }, [])
  return wasRenderedOnClientAtLeastOnce
}

function use100vh() {
  const [height, setHeight] = React.useState(measureHeight)
  const [width, setWidth] = React.useState(measureWidth)

  const wasRenderedOnClientAtLeastOnce = useWasRenderedOnClientAtLeastOnce()

  React.useEffect(() => {
    if (!wasRenderedOnClientAtLeastOnce) return

    function handleMeasure() {
      const measuredHeight = measureHeight()
      const measuredWidth = measureWidth()
      setHeight(measuredHeight)
      setWidth(measuredWidth)
    }

    window.addEventListener('resize', handleMeasure)
    return () => window.removeEventListener('resize', handleMeasure)
  }, [wasRenderedOnClientAtLeastOnce])
  return wasRenderedOnClientAtLeastOnce ? [width, height] : [null, null]
}

export default use100vh
