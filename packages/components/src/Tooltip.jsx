import React from 'react'
import { usePopper } from 'react-popper'
import { useMergeRefs } from 'use-callback-ref'
import { useTransition, animated, config } from '@react-spring/web'
import { createPortal } from 'react-dom'
import { useHover } from 'use-events'
import { useTimeout } from 'hooks'

import styled from '@emotion/styled'
import { css } from '@emotion/react'

const styleContent = css`
  position: absolute;

  @media (hover: none) {
    display: none;
  }
`

const styleArrow = css`
  position: absolute;
  width: 16px;
  height: 16px;

  &:after {
    position: absolute;
    width: 0;
    height: 0;
    content: '';
    pointer-events: none;
  }

  &:after {
    border: 8px solid transparent;
  }
`

const styleArrowBottom = css`
  bottom: -8px;

  &:after {
    left: 0;
    bottom: 0;
    border-top-color: #dddddd;
    border-bottom: none;
  }
`

const styleArrowTop = css`
  top: -8px;

  &:after {
    top: 0;
    left: 0;
    border-bottom-color: #dddddd;
    border-top: none;
  }
`

const styleArrowLeft = css`
  left: -8px;

  @media (hover: none) {
    display: none;
  }

  &:after {
    left: 0;
    top: 0;
    border-right-color: #dddddd;
    border-left: none;
  }
`

const styleArrowRight = css`
  right: -8px;

  @media (hover: none) {
    display: none;
  }

  &:after {
    right: 0;
    top: 0;
    border-left-color: #dddddd;
    border-right: none;
  }
`

const PopperContainer = styled.div`
  background-color: #dddddd;
  border: 1px solid #dddddd;
  padding: 6px 8px 6px 8px;
  font-size: 11px;
  font-weight: 200;
  border-radius: 4px;
  pointer-events: none;
  z-index: 1002;

  @media (hover: none) {
    display: none;
  }

  #arrow {
    position: absolute;
    width: 10px;
    height: 10px;
    &:after {
      content: ' ';
      background-color: #dddddd;
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

const Portal = ({ children, rootElementId }) => createPortal(children, document.getElementById(rootElementId))

const Tooltip = ({ children, defaultPlacement = 'bottom', offset = 16, withArrow = true, delay = 600, immediate = true, pre = false, rootElementId = 'portal-root', tip = '' }) => {
  const ref = React.useRef()

  const [active, bind] = useHover()

  const [shown, setShown] = React.useState(false)

  const timeout = useTimeout(() => {
    setShown(active)
  }, delay)

  const [referenceElement, setReferenceElement] = React.useState(null)
  const [popperElement, setPopperElement] = React.useState(null)
  const [arrowElement, setArrowElement] = React.useState(null)

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: defaultPlacement,
    modifiers: [
      { name: 'arrow', options: { element: arrowElement } },
      { name: 'offset', options: { offset: [0, offset] } }
    ]
  })

  React.useEffect(() => {
    if (active) {
      if (delay === 0) {
        setShown(active)
      } else {
        timeout.start()
      }
    } else {
      if (delay === 0) {
        setShown(active)
      } else {
        timeout.stop()
        setShown(false)
      }
    }
  }, [active, timeout, delay])

  const transition = useTransition(shown, {
    immediate,
    from: { opacity: 0 },
    enter: {
      opacity: 1,
      config: () => {
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

  const placement = attributes && attributes.popper && attributes.popper['data-popper-placement']

  return (
    <>
      <span ref={useMergeRefs([ref, setReferenceElement])} {...bind}>{children}</span>
      {transition((style, item) => {
        return (
          item && (
            <Portal rootElementId={rootElementId}>
              <animated.div style={{ opacity: style.opacity }}>
                <PopperContainer css={styleContent} ref={setPopperElement} style={styles.popper} {...attributes.popper}>
                  <div ref={setArrowElement} style={styles.arrow} id='arrow' css={[styleArrow, placement && placement.startsWith('top') && styleArrowBottom, placement && placement.startsWith('bottom') && styleArrowTop, placement && placement.startsWith('left') && styleArrowRight, placement && placement.startsWith('right') && styleArrowLeft]} />
                  {withArrow && <div ref={setArrowElement} style={styles.arrow} id='arrow' />}
                  {pre ? (<pre>{tip}</pre>) : (<>{tip}</>)}
                </PopperContainer>
              </animated.div>
            </Portal>
          )
        )
      })}
    </>
  )
}

export default Tooltip
