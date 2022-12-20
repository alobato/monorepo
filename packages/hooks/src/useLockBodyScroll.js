// https://github.com/streamich/react-use/blob/master/src/useLockBodyScroll.ts
import React from 'react'

export function getClosestBody(el) {
  if (!el) {
    return null
  } else if (el.tagName === 'BODY') {
    return el
  } else if (el.tagName === 'IFRAME') {
    const document = el.contentDocument
    return document ? document.body : null
  } else if (!el.offsetParent) {
    return null
  }

  return getClosestBody(el.offsetParent)
}

function preventDefault(rawEvent) {
  const e = rawEvent || window.event
  // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
  if (e.touches.length > 1) return true

  if (e.preventDefault) e.preventDefault()

  return false
}

const isIosDevice = typeof window !== 'undefined' && window.navigator && window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform)

const bodies = new Map()

const doc = typeof document === 'object' ? document : undefined

let documentListenerAdded = false

function useLockBody(locked = true, elementRef) {
  elementRef = React.useRef(doc.body)

  const lock = (body) => {
    const bodyInfo = bodies.get(body)
    if (!bodyInfo) {
      bodies.set(body, { counter: 1, initialOverflow: body.style.overflow })
      if (isIosDevice) {
        if (!documentListenerAdded) {
          document.addEventListener('touchmove', preventDefault, {
            passive: false
          })

          documentListenerAdded = true
        }
      } else {
        body.style.overflow = 'hidden'
      }
    } else {
      bodies.set(body, {
        counter: bodyInfo.counter + 1,
        initialOverflow: bodyInfo.initialOverflow
      })
    }
  }

  const unlock = (body) => {
    const bodyInfo = bodies.get(body)
    if (bodyInfo) {
      if (bodyInfo.counter === 1) {
        bodies.delete(body)
        if (isIosDevice) {
          body.ontouchmove = null

          if (documentListenerAdded) {
            document.removeEventListener('touchmove', preventDefault)
            documentListenerAdded = false
          }
        } else {
          body.style.overflow = bodyInfo.initialOverflow
        }
      } else {
        bodies.set(body, {
          counter: bodyInfo.counter - 1,
          initialOverflow: bodyInfo.initialOverflow
        })
      }
    }
  }

  React.useEffect(() => {
    const body = getClosestBody(elementRef.current)
    if (!body) return
    if (locked) {
      lock(body)
    } else {
      unlock(body)
    }
    // eslint-disable-next-line
  }, [locked, elementRef.current])

  // clean up, on un-mount
  React.useEffect(() => {
    const body = getClosestBody(elementRef.current)
    if (!body) return
    return () => {
      unlock(body)
    }
    // eslint-disable-next-line
  }, [])
}

export default useLockBody
