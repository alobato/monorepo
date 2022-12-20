import React from 'react'
import { Box } from 'theme-ui'

const OptimisticCheckbox = React.memo(React.forwardRef(({ checked = false, onChange, className }, ref) => {
  const [checkedState, setCheckedState] = React.useState(false)

  React.useEffect(() => {
    setCheckedState(checked)
  }, [checked])

  const handleClick = () => {
    const newCheckedState = !checkedState
    setCheckedState(newCheckedState)
    // onChange(newCheckedState)
    setTimeout(() => {
      onChange(newCheckedState)
    }, 10)
  }

  return (
    <Box
      sx={{ display: 'inline-block', position: 'relative', cursor: 'pointer', width: 18, height: 18, bg: 'transparent', borderRadius: 2, borderWidth: 2, borderStyle: 'solid', borderColor: checkedState ? 'text' : 'text', userSelect: 'none' }}
      className={className}
      ref={ref}
      onKeyPress={(e) => ['Enter', ' '].includes(e.key) && handleClick()}
      onClick={handleClick}
    >
      <Box sx={{ position: 'absolute', top: '1px', left: '4px', width: 6, height: 10, pointerEvents: 'none', transform: 'rotate(45deg)', borderTop: 'none', borderRightColor: 'text', borderRightStyle: 'solid', borderRightWidth: 2, borderBottomColor: 'text', borderBottomStyle: 'solid', borderBottomWidth: 2, borderLeft: 'none', opacity: checkedState ? 1 : 0 }}></Box>
    </Box>
  )
}))

OptimisticCheckbox.displayName = 'OptimisticCheckbox'

export default OptimisticCheckbox
