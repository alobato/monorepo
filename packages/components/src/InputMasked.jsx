import React from 'react'
import { css as transformStyleObject, get } from '@theme-ui/css'
import { useTheme } from '@emotion/react'
import { css as createClassName } from '@emotion/css'
import { IMaskInput } from 'react-imask'

const InputMasked = React.forwardRef(({ __themeKey = 'forms', __css, variant = 'input', sx, style, invalid, ...rest }, ref) => {
  const theme = useTheme()

  const autofillStyles = {
    boxShadow: 'inset 0 0 0 1000px var(--theme-ui-input-autofill-bg)',
    fontSize: 'inherit',
    ':first-line': {
      fontSize: '1rem',
    }
  }

  const baseStyles = {
    display: 'block',
    appearance: 'none',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: invalid ? (theme?.colors?.danger || 'red') : `inherit`,
    color: 'inherit',
    outline: 'none',

    ':autofill, :autofill:hover, :autofill:focus': autofillStyles,
    ':-webkit-autofill, :-webkit-autofill:hover, :-webkit-autofill:focus': autofillStyles
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
    <IMaskInput className={className} style={style} {...rest} ref={ref} />
  )

})

InputMasked.displayName = 'InputMasked'

export default InputMasked
