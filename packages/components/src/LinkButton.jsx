import React from 'react'
import { css as transformStyleObject, get } from '@theme-ui/css'
import { useTheme } from '@emotion/react'
import { css as createClassName } from '@emotion/css'
import { Link } from 'react-router-dom'

const LinkButton = React.forwardRef(({ __themeKey = 'buttons', __css, variant = 'primary', sx, style, children, ...rest }, ref) => {
  const theme = useTheme()

  const baseStyles = {
    display: 'inline-flex',
    padding: 0,
    border: 0,
    cursor: 'pointer',
    position: 'relative',
    userSelect: 'none',
    outline: 'none',
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
    <Link className={className} style={style} {...rest} ref={ref}>{children}</Link>
  )
})

LinkButton.displayName = 'LinkButton'

export default LinkButton
