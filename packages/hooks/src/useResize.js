import { useSpring, animated } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'

function useResize({ initialWidth, minWidth = 0, maxWidth = 1000, onChange = () => {}, immediate = true }) {
  const [styles, api] = useSpring(() => ({ width: initialWidth }))

  let newWidth
  const bind = useDrag(
    ({ last, down, movement: [x] }) => {
      if (down) {
        newWidth = initialWidth + x
        if (newWidth < minWidth) newWidth = minWidth
        if (newWidth > maxWidth) newWidth = maxWidth
        api.start({ width: newWidth, immediate })
      }
      if (last) {
        onChange(newWidth)
      }
    },
    {
      // bounds: { left: -100, right: 100, top: -50, bottom: 50 },
      // rubberband: true
    }
  )

  return { styles, bind, animated }
}

export default useResize
