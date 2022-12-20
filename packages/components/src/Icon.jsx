import React from 'react'

function Icon({ className, path, height = 24, color = 'currentColor', viewBox = '0 0 24 24' }) {
  return (
    <svg className={className} viewBox={viewBox} height={height} fill={color}>
      <path d={path} />
    </svg>
  )
}

export default Icon
