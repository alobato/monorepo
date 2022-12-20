import React from 'react'
import { Flex, Box, Label } from 'theme-ui'

const Radio = ({ disabled = false, checked, label, tabIndex = 0, onChange = () => {}, labelStyle = { marginLeft: 8 }, labelSx = {}, ...rest }) => {
  const checkboxRef = React.useRef()
  const checkRef = React.useRef()

  const handleClick = () => {
    if (disabled) return false
    if (checked) {
      onChange(false)
    } else {
      onChange(true)
    }
  }

  const content = (
    <Flex onKeyPress={(e) => (['Enter', ' '].includes(e.key)) && handleClick()} ref={checkboxRef} onClick={handleClick} sx={{ position: 'relative', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', width: 18, height: 18, backgroundColor: 'transparent', borderRadius: '50%', transition: 'background-color 500ms, border-color 500ms', borderStyle: 'solid', borderWidth: 2, borderColor: 'text' }} {...rest}>
      <Box ref={checkRef} style={{ opacity: checked ? 1 : 0 }} sx={{ width: 10, height: 10, borderRadius: '50%', bg: 'text', pointerEvents: 'none' }} />
    </Flex>
  )

  if (label) return (
    <Flex sx={{ alignItems: 'center', cursor: 'pointer', userSelect: 'none' }}>
      {content}
      <Label onClick={handleClick} sx={{ ml: 2, ...labelSx }}>{label}</Label>
    </Flex>
  )

  return content
}

export default Radio
