import React from 'react'
import { css as transformStyleObject, get } from '@theme-ui/css' // https://theme-ui.com/packages/css/
import { useTheme } from '@emotion/react'
import { css as createClassName } from '@emotion/css'

const ButtonIcon = React.forwardRef(({ __themeKey = 'icons', __css, variant = 'primary', sx, style, path, height = 16, ...rest }, ref) => {
  const theme = useTheme()

  const baseStyles = {
    padding: 0,
    border: 0,
    appearance: 'none',
    cursor: 'pointer',
    background: get(theme, `${__themeKey}.${variant}.bg`) || 'transparent',
    color: get(theme, `${__themeKey}.${variant}.color`) || 'inherit',
  }

  const __cssStyles = transformStyleObject(__css)(theme)

  const variantInTheme = get(theme, `${__themeKey}.${variant}`) || get(theme, variant)

  const variantStyles = variantInTheme && transformStyleObject(variantInTheme)(theme)

  const sxPropStyles = transformStyleObject(sx)(theme)

  const emotionStyle = {
    ...baseStyles,
    ...__cssStyles,
    ...sxPropStyles
  }

  const className = createClassName(emotionStyle)

  return (
    <button className={className} style={style} {...rest} ref={ref}>
      <svg viewBox='0 0 24 24' height={height} fill='currentColor'>
        <path d={path} />
      </svg>
    </button>
  )
})

ButtonIcon.displayName = 'ButtonIcon'

export default ButtonIcon
