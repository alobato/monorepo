import React from 'react'
import { Flex, Box, Text } from 'theme-ui'

function Stepper({ steps, current }) {
  return (
    <Flex sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
      {steps.map((item, index) => (
        <Flex key={item} sx={{ flexDirection: 'column', alignItems: 'center' }}>
          {current >= index ? (
            <>
              <Box><Text variant='heading'>{index + 1}</Text></Box>
              <Box><Text variant='heading'>{item}</Text></Box>
            </>
          ) : (
            <>
              <Box>{index + 1}</Box>
              <Box>{item}</Box>
            </>
          )}
        </Flex>
      ))}
    </Flex>
  )
}

export default Stepper
