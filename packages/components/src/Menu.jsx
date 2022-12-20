import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from 'theme-ui'
import styled from '@emotion/styled'

export const Menu = styled(({ children, className, ...rest }) => (
  <Box sx={{ pb: 2, minWidth: 100 }} className={className} {...rest}>
    {children}
  </Box>
))``

export const MenuItem = ({ children, className, to, ...rest }) => {
  if (to) {
    return (
      <Link to={to}>
        <Box sx={{ cursor: 'pointer', py: 2, px: 3 }} className={className} {...rest}>
          {children}
        </Box>
      </Link>
    )
  }
  return (
    <Box sx={{ cursor: 'pointer', py: 2, px: 3 }} className={className} {...rest}>
      {children}
    </Box>
  )
}
