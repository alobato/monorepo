import React from 'react'
import { css as transformStyleObject, get } from '@theme-ui/css' // https://theme-ui.com/packages/css/
import { useTheme } from '@emotion/react'
import { css as createClassName } from '@emotion/css'

const Button = React.forwardRef(({ __themeKey = 'buttons', __css, variant = 'primary', sx, style, children, ...rest }, ref) => {
  const theme = useTheme()

  const baseStyles = {
    padding: 0,
    border: 0,
    appearance: 'none',
    cursor: 'pointer',
    position: 'relative',
    userSelect: 'none',
    // outline: 'none',
    lineHeight: 1,
    whiteSpace: 'nowrap',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    background: get(theme, `${__themeKey}.${variant}.bg`) || get(theme, `colors.${variant}`) || 'transparent',
    color: get(theme, `${__themeKey}.${variant}.color`) || get(theme, `colors.${variant}Contrast`) || 'inherit',
  }

  const __cssStyles = transformStyleObject(__css)(theme)

  const variantInTheme = get(theme, `${__themeKey}.${variant}`) || get(theme, variant)

  const variantStyles = variantInTheme && transformStyleObject(variantInTheme)(theme)

  const sxPropStyles = transformStyleObject(sx)(theme)

  const emotionStyle = {
    ...baseStyles,
    ...__cssStyles,
    ...variantStyles,
    ...sxPropStyles
  }

  const className = createClassName(emotionStyle)

  return (
    <button className={className} style={style} {...rest} ref={ref}>{children}</button>
  )
})

Button.displayName = 'Button'

export default Button
