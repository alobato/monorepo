import React from 'react'
import { css as transformStyleObject, get } from '@theme-ui/css'
import { useTheme } from '@emotion/react'
import { css as createClassName } from '@emotion/css'

const Select = React.forwardRef(({ __themeKey = 'forms', __css, variant = 'select', sx, style, children, invalid = false, placeholder = null, multiple = false, value, ...rest }, ref) => {
  const theme = useTheme()

  // const baseStyles = {
  //   display: 'block',
  //   appearance: 'none',
  //   fontSize: 'inherit',
  //   lineHeight: 'inherit',
  //   borderWidth: '1px',
  //   borderStyle: 'solid',
  //   borderColor: invalid ? (theme?.colors?.danger || 'red') : `inherit`,
  //   color: 'inherit',
  //   outline: 'none',
  //   backgroundImage: `url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cpath%20fill%3D%22inherit%22%20d%3D%22M16.59%208.59L12%2013.17%207.41%208.59%206%2010l6%206%206-6z%22%2F%3E%3C%2Fsvg%3E')`,
  //   backgroundRepeat: 'no-repeat, repeat',
  //   backgroundPosition: 'right 0.3em top 50%',
  //   backgroundSize: '1.25em auto'
  // }

  const baseStyles = {
    display: 'inline-block',
    appearance: 'none',
    fontSize: 'inherit',
    lineHeight: 1,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'inherit',//  invalid ? (theme?.colors?.danger || 'red') : `inherit`,
    color: 'inherit',
    outline: 'none',
    backgroundRepeat: 'no-repeat',
    backgroundImage: multiple ? 'none' : `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iIzZlNzY4MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNC40MjcgOS40MjdsMy4zOTYgMy4zOTZhLjI1MS4yNTEgMCAwMC4zNTQgMGwzLjM5Ni0zLjM5NkEuMjUuMjUgMCAwMDExLjM5NiA5SDQuNjA0YS4yNS4yNSAwIDAwLS4xNzcuNDI3ek00LjQyMyA2LjQ3TDcuODIgMy4wNzJhLjI1LjI1IDAgMDEuMzU0IDBMMTEuNTcgNi40N2EuMjUuMjUgMCAwMS0uMTc3LjQyN0g0LjZhLjI1LjI1IDAgMDEtLjE3Ny0uNDI3eiIgLz48L3N2Zz4=")`,
    backgroundPosition: 'right 4px center',
    backgroundSize: '16px',
    paddingRight: '24px'
  }

  const __cssStyles = transformStyleObject(__css)(theme)

  const variantInTheme = get(theme, `${__themeKey}.${variant}`) || get(theme, variant)

  const variantStyles = variantInTheme && transformStyleObject(variantInTheme)(theme)

  const sxPropStyles = transformStyleObject(sx)(theme)

  const invalidObj = invalid ? { borderColor: theme?.colors?.danger || 'red' } : {}

  const emotionStyle = {
    ...baseStyles,
    ...__cssStyles,
    ...variantStyles,
    ...sxPropStyles,
    ...invalidObj
  }

  const className = createClassName(emotionStyle)

  const defaultValue = multiple ? [] : ''
  if (!value) {
    value = defaultValue
  }

  return (
    <select ref={ref} className={className} style={style} multiple={multiple} value={value} {...rest}>
      {(placeholder !== undefined && placeholder !== null) && <option value=''>{placeholder}</option>}
      {children}
    </select>
  )

})

export default Select
