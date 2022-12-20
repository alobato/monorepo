import React from 'react'
import { Flex, Box, Label } from 'theme-ui'

function Checkbox({ checked = false, onChange, label, labelSx = {} }) {
  const content =  (
    <Box onKeyPress={(e) => (['Enter', ' '].includes(e.key)) && onChange(!checked)} onClick={() => onChange(!checked)} sx={{ display: 'inline-block', position: 'relative', cursor: 'pointer', width: 18, minWidth: 18, height: 18, bg: 'transparent', borderRadius: 2, borderWidth: 2, borderStyle: 'solid', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
      <Box sx={{ position: 'absolute', top: '1px', left: '4px', width: 6, height: 10, pointerEvents: 'none', transform: 'rotate(45deg)', borderTop: 'none', borderRightColor: 'text', borderRightStyle: 'solid', borderRightWidth: 2, borderBottomColor: 'text', borderBottomStyle: 'solid', borderBottomWidth: 2, borderLeft: 'none', opacity: checked ? 1 : 0 }}></Box>
    </Box>
  )

  if (label) return (
    <Flex sx={{ alignItems: 'center' }}>
      {content}
      <Label sx={{ ml: 2, ...labelSx }} onClick={() => onChange(!checked)}>{label}</Label>
    </Flex>
  )

  return content
}

export default Checkbox
