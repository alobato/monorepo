import React from 'react'
import { createPortal } from 'react-dom'
import { useTransition, animated, config } from '@react-spring/web'
import { css as transformStyleObject, get } from '@theme-ui/css'
import { useTheme } from '@emotion/react'
import { css as createClassName } from '@emotion/css' // https://theme-ui.com/packages/css/

import { useLockBodyScroll } from 'hooks'

function ModalContent({ __themeKey = 'modals', __css, variant = 'large', sx, style, ...rest }) {
  const theme = useTheme()

  const baseStyles = {
    position: 'relative',
    zIndex: '1001',
    margin: '0 auto',

    with: 'calc(100% - 32px)',
    maxWidth: 1000,
    top: 16,
    backgroundColor: 'white'
  }

  const __cssStyles = transformStyleObject(__css)(theme)

  const variantInTheme = get(theme, `${__themeKey}.${variant}`) || get(theme, variant)

  const variantStyles = variantInTheme && transformStyleObject(variantInTheme)(theme)

  const sxPropStyles = transformStyleObject(sx)(theme)

  const emotionStyle = {
    ...baseStyles,
    ...__cssStyles,
    ...variantStyles,
    ...sxPropStyles
  }

  const className = createClassName(emotionStyle)

  return (
    <animated.div className={className} style={style} {...rest} />
  )
}

const ModalBody = ({ children }) => {
  const mainDivRef = React.useRef(document.createElement('div'))
  const modalRootRef = React.useRef(document.getElementById('modal-root'))

  React.useEffect(() => {
    const modalRoot = modalRootRef.current
    if (!modalRoot) throw new Error('No modal-root exists!')
    const mainDiv = mainDivRef.current
    modalRoot.appendChild(mainDiv)
    return () => {
      modalRoot.removeChild(mainDiv)
    }
  }, [])

  return createPortal(children, mainDivRef.current)
}

const Modal = ({ children, onCancel, closeOnClickOutside = true, shown, lockBodyScroll = true, backdrop = true, immediate = false, backdropStyle = { backgroundColor: 'hsl(0deg 0% 0% / 70%)' }, sx, variant }) => {

  useLockBodyScroll(shown)

  const parentDiv = React.useRef(null)

  React.useEffect(() => {
    if (shown && parentDiv.current) parentDiv.current.focus()
  }, [shown])

  const keyHandler = (e) => {
    if (shown && e.key === 'Escape') {
      e.preventDefault()
      e.stopPropagation()
      onCancel()
    }
  }

  const transition = useTransition(shown, {
    immediate,
    from: { opacity: 0, transform: 'translateY(-1000px)' },
    enter: {
      opacity: 1,
      // top,
      transform: 'translateY(0px)',
      config: (item) => {
        if (item === 'transform') return { ...config.stiff }
        return { ...config.default, duration: 300 }
      }
    },
    leave: {
      opacity: 0,
      config: () => {
        return { ...config.default, duration: 100 }
      }
    }
  })

  if (!shown) return null

  return transition((style, item) => {
    return (
      item && (
        <ModalBody>
          {backdrop ? (
            <div ref={parentDiv} onKeyDown={keyHandler} tabIndex={0} aria-modal='true' role='dialog' style={{ position: 'fixed', top: 0, right: 0, bottom: 0, left: 0, overflow: 'hidden', outline: 'none' }}>
              <ModalContent sx={sx} variant={variant} style={{ transform: style.transform, opacity: style.opacity }}>
                {children({ onRequestClose: onCancel })}
              </ModalContent>
              {backdrop && (
                <animated.div onClick={() => { if (closeOnClickOutside) { onCancel() } }} style={{ opacity: style.opacity, position: 'fixed', zIndex: 1000, top: 0, right: 0, bottom: 0, left: 0, outline: 'none', tabIndex: -1, ...backdropStyle }} />
              )}
            </div>
          ) : (
            <div ref={parentDiv} onKeyDown={keyHandler} tabIndex={0} aria-modal='true' role='dialog'>
              <ModalContent sx={sx} variant={variant} style={{ transform: style.transform, opacity: style.opacity }}>
                {children({ onRequestClose: onCancel })}
              </ModalContent>
            </div>
          )}

        </ModalBody>
      )
    )
  })
}

export default Modal
