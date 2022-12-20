import React from 'react'
import { Flex } from 'theme-ui'
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'
import { useLocalStorage } from 'hooks'
import Portal from './Portal'

function Floating({ localStorageKey, shown = false, width = 300, height = 270, sx, onCancel, children }) {

  const [position, setPosition] = useLocalStorage(localStorageKey, { x: 800, y: 70 })

  const [{ x, y }, api] = useSpring(() => ({ x: position.x, y: position.y }))

  const bind = useDrag(
    ({ movement: [mx, my], last }) => {
      if (my === 0 && mx === 0) mx = 1 // Bugfix. Hide when 0 x 0
      api.start({ x: mx, y: my, immediate: true })
      if (last) {
        setPosition({ x, y })
      }
    },
    {
      initial: () => [x.get(), y.get()],
      bounds: {
        left: 0,
        top: 0,
        right: window.innerWidth - width,
        bottom: window.innerHeight - height
      }
    }
  )

  return (
    <Portal elementId='over-root'>
      <animated.div {...bind()} style={{ x, y, display: (shown ? 'block' : 'none'), width }}>
        <Flex sx={{ ...sx, width, height }}>
          {children({ onRequestClose: onCancel })}
        </Flex>
      </animated.div>
    </Portal>
  )
}

export default Floating

