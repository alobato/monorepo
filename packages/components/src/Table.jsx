import React from 'react'
import styled from '@emotion/styled'
import { Box } from 'theme-ui'
import { useDoubleTap } from 'use-double-tap'
import { useIgnoreMount } from 'hooks'
import { Themed } from 'theme-ui'
import Icon from './Icon'
import { useResize } from 'hooks'

const Input = styled.input`
  font: inherit;
  color: inherit;
  border: none;
  width: 100%;
  height: calc(36px);
  padding: 0 10px;
  background: transparent;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:focus {
    outline: rgb(6, 29, 224) solid 2px;
    outline-offset: -2px;
  }
`

function TableCellDiv({ children, options = [], onChange = () => {}, ...rest }) {
  const [originalValue, setOriginalValue] = React.useState(children)
  const [isEditing, setIsEditing] = React.useState(false)
  const [value, setValue] = React.useState(children || '')
  const inputRef = React.useRef(null)

  useIgnoreMount(children, (newValue) => {
    setValue(newValue)
  })

  const bind = useDoubleTap(() => {
    setIsEditing(true)
    setTimeout(() => { inputRef.current.focus() }, 10)
  })

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleFocus = (event) => {
    event.target.select()
  }

  const handleBlur = () => {
    setIsEditing(false)
    if (value !== originalValue) {
      setOriginalValue(value)
      onChange(value)
    }
  }

  const handleDivKeyPress = (event) => {
    if (event.key === 'Enter') {
      setIsEditing(true)
      setTimeout(() => { inputRef.current.focus() }, 10)
    } else if (event.key === 'Escape') {
      setValue(children)
      setIsEditing(false)
    }
  }

  const handleInputKeyDown = (event) => {
    if (event.key === 'Enter') {
      setIsEditing(false)
    } else if (event.key === 'Escape') {
      setValue(children)
      setIsEditing(false)
    }
  }

  return (
    <>
      {!isEditing && (
        <Box onKeyPress={handleDivKeyPress} tabIndex={0} {...rest} {...bind}>{value}</Box>
      )}
      <Box sx={{ display: (isEditing ? 'block' : 'none') }}>
        <Input list='data' onKeyDown={handleInputKeyDown} ref={inputRef} value={value} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
        <datalist id='data'>
          {options.map((option) => (
            <option key={option} value={option} />
          ))}
        </datalist>
      </Box>
    </>
  )
}

const ArrowUpIcon = () => (
  <svg viewBox='0 0 24 24' height={16} fill='currentColor'>
    <path d='M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z' />
  </svg>
)
const ArrowDownIcon = () => (
  <svg viewBox='0 0 24 24' height={16} fill='currentColor'>
    <path d='M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z' />
  </svg>
)

export function SortLabel({ headerField, currentField, label, currentAscOrDesc, onChange }) {
  if (headerField === currentField) {
    return (
      <Box onClick={() => onChange(`${headerField} ${currentAscOrDesc === 'asc' ? 'desc' : 'asc'}`)} sx={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer', textDecoration: 'underline', textUnderlinePosition: 'under' }}>
        <Box sx={{ userSelect: 'none' }}>
          {label}
        </Box>
        <Box sx={{ display: 'inline-flex' }}>
          {currentAscOrDesc.toLowerCase() === 'desc' ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </Box>
      </Box>
    )
  }
  return (
    <Box onClick={() => onChange(`${headerField} asc`)} sx={{ display: 'inline-flex', cursor: 'pointer', textDecoration: 'underline', textUnderlinePosition: 'under' }}>
      {label}
    </Box>
  )
}

export const TableContainer = styled(Box)`
  flex-grow: 1;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: hsl(0, 0%, 0%, 0.38);
  }
`

export const Table = styled(Themed.table)`
  width: fit-content;
  min-width: 100%;
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0;
`

export const THead = styled.thead``

export const TBody = styled.tbody``

export const TR = styled(Themed.tr)`
  height: ${(props) => props?.height || '40px'};
  &:hover td {
    background: ${(props) => props?.theme?.colors?.elevated || 'hsl(0deg 0% 97%)'};
  }
  ${props => props?.selected && '& td { background-color: var(--theme-ui-colors-hairline); !important; }'}
  &.open > td {
    background-color: hsl(218deg 66% 94%) !important;
  }
  ${props => props?.contextMenuOpen && '& td { background-color: hsl(223deg 47% 97%) !important; }'}
`

export const TH = styled(Themed.th)`
  position: sticky;
  top: 0px;
  text-align: left;
  user-select: none;
  white-space: nowrap;
  font-weight: ${(props) => props?.theme?.fontWeights?.bold || '500'};
  z-index: 1;
  user-select: none;

  background-color: ${(props) => props?.theme?.colors?.elevated || 'hsl(0deg 0% 97%)'};
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${(props) => props?.theme?.colors?.hairline || 'hsl(0deg 0% 80%)'};

  &.right {
    text-align: right;
  }
`

export const THSticky = styled(TH)`
  left: 0;
  z-index: 3;
  user-select: none;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: -1px;
    right: 0;
    width: 30px;
    pointer-events: none;
    transition: box-shadow 0.3s;
    box-shadow: ${(props) => (props.showShadow ? 'inset 10px 0 8px -8px hsl(0deg 0% 85%)' : 'none')};
    transform: translateX(100%);
  }
`

export const AnimatedTHSticky = styled.th`
  position: sticky;
  top: 0;
  height: 3rem;
  text-align: left;
  text-transform: uppercase;
  font-size: 0.8rem;
  padding: 0.7rem 0.9rem;
  background-color: #fafafa;
  font-weight: 500;
  /* z-index: 2; */

  left: 0px;
  /* z-index: 3; */
  &.shadow:after {
    box-shadow: inset 10px 0 8px -8px hsl(0deg 0% 85%);
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: -1px;
    right: 0;
    width: 30px;
    pointer-events: none;
    transition: box-shadow 0.3s;
    transform: translateX(100%);
  }
  display: none;

  @media (min-width: 40em) {
    display: table-cell;
  }
`

export const TD = styled(Themed.td)`
  line-height: 1em;

  background-color: ${(props) => props?.theme?.colors?.canvas || 'white'};
  border-bottom: 1px solid ${(props) => props?.theme?.colors?.hairline || 'hsl(0deg 0% 80%)'};

  &.number {
    font-feature-settings: "tnum";
    text-align: right;
  }
`

export const TDSticky = styled(TD)`
  position: sticky;
  left: 0;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: -1px;
    right: 0;
    width: 30px;
    pointer-events: none;
    transition: box-shadow 0.3s;
    box-shadow: ${(props) => (props.showShadow ? 'inset 10px 0 8px -8px hsl(0deg 0% 85%)' : 'none')};
    transform: translateX(100%);
  }
`
export const Truncate = styled(Box)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const NoWrap = styled.span`
  white-space: nowrap;
`

export const TableDiv = styled(TableCellDiv)`
  width: 100%;
  height: calc(36px);
  line-height: 24px;
  padding: 6px 10px;
  font-weight: 400;
  background: transparent;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  cursor: default;
`

export function ResizableTH({ children, initialWidth = 200, minWidth = 100, maxWidth = 400, style = {}, onChange = () => {}, ...rest }) {
  const [col1Width, setCol1Width] = React.useState(initialWidth)

  const { bind, styles, animated } = useResize({ initialWidth: col1Width, minWidth, maxWidth, immediate: true, onChange: (value) => { setCol1Width(value); onChange(value) } })

  return (
    <animated.th style={{ userSelect: 'none', position: 'sticky', top: 0, height: '3rem', backgroundColor: 'var(--theme-ui-colors-elevated)', borderBottom: '1px solid var(--theme-ui-colors-hairline)', textAlign: 'left', fontWeight: 500, ...style, ...styles }} {...rest}>
      {children}
      <div {...bind()} style={{ position: 'absolute', right: 0, top: 10, userSelect: 'none', cursor: 'col-resize' }}>
        <Icon height={20} path='M9,3H11V5H9V3M13,3H15V5H13V3M9,7H11V9H9V7M13,7H15V9H13V7M9,11H11V13H9V11M13,11H15V13H13V11M9,15H11V17H9V15M13,15H15V17H13V15M9,19H11V21H9V19M13,19H15V21H13V19Z' />
      </div>
    </animated.th>
  )
}
