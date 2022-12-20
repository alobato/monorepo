// https://mui.com/pt/material-ui/react-progress/
import React from 'react'
import { Box, Text } from 'theme-ui'

export function CircularProgress({ value = 0, height = 48, color = 'currentColor', style, ...rest }) {
  if (value > 100) value = 100
  if (value < 0) value = 0
  const diff = 100 - value
  const strokeDashoffset = (value && value <= 100) ? ((126.92 * diff) / 100) : 126.92
  return (
    <svg viewBox='22 22 44 44' height={height} fill={color} style={{ transform: 'rotate(-90deg)', ...style }} {...rest}>
      <circle style={{ transition: 'stroke-dashoffset 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', stroke: 'currentcolor', strokeDasharray: '126.920', strokeDashoffset: `${strokeDashoffset}px`}} cx='44' cy='44' r='20.2' fill='none' strokeWidth='3.6'></circle>
    </svg>
  )
}

export function CircularProgressWithBg({ value = 0, height = 48, color = 'currentColor', style, ...rest }) {
  return (
    <Box sx={{ display: 'inline-flex', position: 'relative' }}>
      <svg viewBox='22 22 44 44' height={height} style={{ position: 'absolute' }}>
        <circle style={{ stroke: 'lightgray' }} cx='44' cy='44' r='20.2' fill='none' strokeWidth='3.6'></circle>
      </svg>
      <CircularProgress value={value} height={height} color={color} style={{ ...style, position: 'absolute' }} {...rest} />
    </Box>
  )
}

export function CircularProgressWithLabel({ value = 0, height = 48, color = 'currentColor', hideLabel = false, style, ...rest }) {
  return (
    <Box sx={{ display: 'inline-flex', position: 'relative' }}>
      <Box sx={{ display: 'inline-block', width: height, height }}>
        <svg viewBox='22 22 44 44' height={height} style={{ position: 'absolute' }}>
          <circle style={{ stroke: 'lightgray' }} cx='44' cy='44' r='20.2' fill='none' strokeWidth='3.6'></circle>
        </svg>
      </Box>
      <CircularProgress value={value} height={height} color={color} style={{ ...style, position: 'absolute' }} {...rest} />
      {!hideLabel && (
        <Box sx={{ top: 0, left: 0, bottom: 0, right: 0, position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Text sx={{ fontSize: 1 }}>{`${Math.round(value)}%`}</Text>
        </Box>
      )}
    </Box>
  )
}
