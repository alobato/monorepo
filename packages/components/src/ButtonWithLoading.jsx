import React from 'react'
import { css as transformStyleObject, get } from '@theme-ui/css' // https://theme-ui.com/packages/css/
import { useTheme } from '@emotion/react'
import { Box } from 'theme-ui'

function ButtonWithLoading({ children, loading, className, __themeKey = 'buttons', __css, variant = 'primary', sx, ...rest }) {
  const theme = useTheme()

  const baseStyles = {
    padding: 0,
    border: 0,
    background: 'transparent',
    appearance: 'none',
    cursor: 'pointer',
    position: 'relative',
    userSelect: 'none',
    // outline: 'none',
    lineHeight: 1,
    whiteSpace: 'nowrap',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    pointerEvents: loading ? 'none' : 'auto',
    bg: get(theme, `${__themeKey}.${variant}.bg`) || get(theme, `colors.${variant}`),
    color: get(theme, `${__themeKey}.${variant}.color`) || get(theme, `colors.${variant}Contrast`),
    '& > i': {
      display: 'inline-block',
      lineHeight: 0,
      pointerEvents: 'none',
      verticalAlign: '-2px',
      opacity: loading ? 1 : 0,
      marginLeft: loading ? 0 : '-16px',
      marginRight: loading ? '8px' : 0,
      transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)'
    }
  }

  const __cssStyles = transformStyleObject(__css)(theme)

  const variantInTheme = get(theme, `${__themeKey}.${variant}`) || get(theme, variant)

  const variantStyles = variantInTheme && transformStyleObject(variantInTheme)(theme)

  const sxPropStyles = transformStyleObject(sx)(theme)

  const style = {
    ...baseStyles,
    ...__cssStyles,
    ...variantStyles,
    ...sxPropStyles
  }

  return (
    <Box as='button' className={className} sx={style} {...rest}>
      {loading && (
        <i>
          <svg height={16} viewBox='0 0 100 100' preserveAspectRatio='xMidYMid'>
            <circle cx='50' cy='50' fill='none' stroke='currentColor' strokeWidth='10' r='35' strokeDasharray='164.93361431346415 56.97787143782138' transform='rotate(305.844 50 50)'>
              <animateTransform attributeName='transform' type='rotate' calcMode='linear' values='0 50 50;360 50 50' keyTimes='0;1' dur='1s' begin='0s' repeatCount='indefinite' />
            </circle>
          </svg>
        </i>
      )}
      <span style={{ display: 'inline-block', pointerEvents: 'none' }}>{children}</span>
    </Box>
  )
}

ButtonWithLoading.displayName = 'ButtonWithLoading'

export default ButtonWithLoading
