import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Box } from 'theme-ui'

export const FormError = styled.div`
  font-size: 10px;
  line-height: 18px;
  ${(props) => css`color: ${props?.theme?.colors?.danger ? props.theme.colors.danger : 'red'}`}
  text-transform: uppercase;
  font-weight: 500;
`

function FormErrorBox({ errors, touched, fieldName }) {
  return <Box sx={{ minHeight: 18 }}>{errors[fieldName] && touched[fieldName] && <FormError>{errors[fieldName]}</FormError>}</Box>
}

export default FormErrorBox
