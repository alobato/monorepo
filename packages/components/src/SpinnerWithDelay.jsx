import React from 'react'
import { Spinner } from 'theme-ui'

function SpinnerWithDelay({ delay = 500 }) {
  const [show, setShow] = React.useState(false)
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true)
    }, delay)
    return () => clearTimeout(timeout)
  }, [])
  return show ? <Spinner /> : null
}

export default SpinnerWithDelay
