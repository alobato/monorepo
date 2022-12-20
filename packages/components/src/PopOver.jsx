import React from 'react'
import { createPortal } from 'react-dom'
import { usePopper } from 'react-popper'
import { useSpring, a } from '@react-spring/web'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { useMergeRefs } from 'use-callback-ref'

const Portal = ({ children, rootElementId }) => createPortal(children, document.getElementById(rootElementId))

const PopperContainer = styled.div`
  font-size: 13px;
  padding-top: 0.5em;
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 8px;
  z-index: 1;
  ${(props) => (props?.theme?.colors?.elevated ? css`background-color: ${props.theme.colors.elevated};` : css`background-color: lightgray;`)}

  #arrow {
    position: absolute;
    width: 10px;
    height: 10px;
    &:after {
      content: ' ';
      background-color: ${(props) => (props?.theme?.colors?.elevated ? props.theme.colors.elevated : 'lightgray')};
      position: absolute;
      top: -13px; /* padding + popper height */
      left: 0;
      transform: rotate(45deg);
      width: 10px;
      height: 10px;
    }
  }

  &[data-popper-placement^='top'] > #arrow {
    bottom: -18px;
  }
`

const PopOver = ({ children, render, withArrow = true, rootElementId = 'portal-root' }) => {
  const ref = React.useRef()

  const [open, setOpen] = React.useState(false)

  const [referenceElement, setReferenceElement] = React.useState(null)
  const [popperElement, setPopperElement] = React.useState(null)
  const [arrowElement, setArrowElement] = React.useState(null)

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      { name: 'arrow', options: { element: arrowElement } },
      { name: 'offset', options: { offset: [0, 4] } }
    ]
  })

  const springStyle = useSpring(open ? { opacity: 1, immediate: true } : { opacity: 0, immediate: true })

  const wrapperRef = React.useRef(null)

  const handleClick = (e) => {
    if (e.button === 2) return false
    if (e.target.id === 'MenuItem') {
      return setTimeout(() => {
        setOpen(false)
      }, 100)
    }
    if (ref.current && ref.current.contains(e.target)) return setOpen((current) => !current)
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) return setOpen(false)
  }

  React.useEffect(() => {
    // https://codesandbox.io/s/outside-alerter-hooks-lmr2y
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <>
      <span ref={useMergeRefs([ref, setReferenceElement])}>{children}</span>
      {open && (
        <Portal rootElementId={rootElementId}>
          <a.div style={springStyle}>
            <div ref={wrapperRef}>
              <PopperContainer ref={setPopperElement} style={styles.popper} {...attributes.popper}>
                {withArrow && <div ref={setArrowElement} style={styles.arrow} id='arrow' />}
                {render({ onRequestClose: () => setOpen(false) })}
              </PopperContainer>
            </div>
          </a.div>
        </Portal>
      )}
    </>
  )
}

export default PopOver
