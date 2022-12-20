import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from 'theme-ui'

function LoginLayout() {
  return (
    <Box>
      <Outlet />
    </Box>
  )
}

export default LoginLayout
