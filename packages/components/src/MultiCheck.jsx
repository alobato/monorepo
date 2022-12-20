import React from 'react'
import { Box } from 'theme-ui'
import Checkbox from './Checkbox'

function MultiCheck({ options = [], value = [], onChange = () => {}, withAll = true, withAllLabel = 'Selecionar todos', labelSx = {} }) {

  const handleAll = (checked) => {
    const newValue = checked ? [...options] : []
    onChange(newValue)
  }

  const handleChange = (option, checked) => {
    let newValue = [...value]
    if (checked) {
      newValue = value.includes(option) ? newValue : [...value, option]
    } else {
      newValue = value.includes(option) ? value.filter((v) => v !== option) : newValue
    }
    return onChange(newValue)
  }

  return (
    <Box>
      {withAll && <Box sx={{ mb: 1 }}><Checkbox checked={options.every((option) => value.includes(option))} label={withAllLabel} onChange={(checked) => handleAll(checked)} /></Box>}
      {options.map((option) => (
        <Box key={option}>
          <Checkbox labelSx={labelSx} checked={value.includes(option)} label={option.replace(/@/g, '')} onChange={(checked) => handleChange(option, checked)} />
        </Box>
      ))}
    </Box>
  )

}

export default MultiCheck
