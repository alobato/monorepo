import React from 'react'
import { Flex, Box } from 'theme-ui'
import { css as transformStyleObject, get } from '@theme-ui/css'
import { useTheme } from '@emotion/react'
import { useMergeRefs } from 'use-callback-ref'

const InputSearch = React.forwardRef(({ __themeKey = 'forms', __css, variant = 'input', sx, style, invalid, value = '', onChange, ...rest }, ref) => {
  const theme = useTheme()

  const localRef = React.useRef()

  const autofillStyles = {
    boxShadow: 'inset 0 0 0 1000px var(--theme-ui-input-autofill-bg)',
    fontSize: 'inherit',
    ':first-line': {
      fontSize: '1rem',
    }
  }

  const baseStyles = {
    appearance: 'none',
    fontSize: 'inherit',
    lineHeight: 1,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: invalid ? (theme?.colors?.danger || 'red') : `inherit`,
    color: 'inherit',
    outline: 'none',

    backgroundColor: 'transparent',

    'input[type=search]': {
      'WebkitAppearance': 'textfield',
      'WebkitBoxSizing': 'content-box'
    },

    'input[type="search"]::-webkit-search-decoration': {
      'WebkitAppearance': 'none',
      appearance: 'none'
    },
    'input[type="search"]::-webkit-search-cancel-button': {
      'WebkitAppearance': 'none',
      appearance: 'none'
    },
    'input[type="search"]::-webkit-search-results-button': {
      'WebkitAppearance': 'none',
      appearance: 'none'
    },
    'input[type="search"]::-webkit-search-results-decoration': {
      'WebkitAppearance': 'none',
      appearance: 'none'
    },

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

  function handleIconClick(e) {
    if (value) {
      e.target.value = ''
      onChange(e)
    } else {
      localRef.current.focus()
    }
  }

  const pathIcon = !value ? 'M14.76 13.27L20.49 19 19 20.49l-5.73-5.73C12.2 15.53 10.91 16 9.5 16A6.5 6.5 0 1116 9.5c0 1.41-.47 2.7-1.24 3.77zM9.5 5C7.01 5 5 7.01 5 9.5S7.01 14 9.5 14 14 11.99 14 9.5 11.99 5 9.5 5z' : 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z'

  return (
    <Flex sx={{ ...emotionStyle, flexWrap: 'nowrap', justifyContent: 'space-between', alignItems: 'center', p: 0 }}>
      <Box sx={{ cursor: 'pointer', userSelect: 'none', p: 1, pl: 2, pr: 1, minWidth: 32 }} onClick={handleIconClick}>
        <svg width={20} height={20} viewBox='0 0 24 24' fill='currentColor'>
          <path d={pathIcon} />
        </svg>
      </Box>
      <Flex sx={{ flexGrow: 1 }}>
        <input type='search' value={value} onChange={onChange} {...rest} style={{ width: '100%', border: 0, backgroundColor: 'transparent', outline: 'none', padding: emotionStyle?.padding || 0, lineHeight: emotionStyle?.lineHeight || 'inherit', fontSize: emotionStyle?.fontSize || 'inherit', color: emotionStyle?.color || 'inherit', paddingLeft: 0 }} ref={useMergeRefs([localRef, ref])} />
      </Flex>
    </Flex>
  )

})

InputSearch.displayName = 'InputSearch'

export default InputSearch
