import React from 'react'
import { Box } from 'theme-ui'

const sx = {
  display: 'inline-block',
  position: 'relative',
  width: '3rem',
  height: '1.5rem',
  backgroundColor: '#dee2e6',
  zIndex: 1,
  borderRadius: '2.125rem',
  overflow: 'hidden',
  cursor: 'pointer',
  borderWidth: '0.0625rem',
  borderColor: '#ced4da',
  borderStyle: 'solid',
  fontSize: '0.5625rem',
  fontWeight: 800,
  transition: '300ms ease',
  transitionProperty: 'color,border-style,border-color,visibility, background,background-color,text-decoration,box-shadow,transform, opacity',
  outline: 'none',
  userSelect: 'none',
  '&:focus': {
    boxShadow: '0 0 0 3px hsla(202,81%,86%,1)',
    border: '1px solid hsla(205,79%,66%,1)'
  },
  "&[aria-checked='true']": {
    backgroundColor: '#91b9e4',
    borderColor: 'transparent',
    '& > div': {
      transform: 'translateX(calc(3rem - 1.125rem - 12%))',
      '& > div': {
        backgroundColor: 'hsla(211,61%,43%,1)'
      }
    }
  },
  '& > div': { // switch
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    pointerEvents: 'none',
    transition: '300ms ease',
    transitionProperty: 'color,border-style,border-color,visibility, background,background-color,text-decoration,box-shadow,transform, opacity',
    userSelect: 'none'
  },
  '& > div > div': { // ball
    flexShrink: 0,
    backgroundColor: '#adb5bd',
    borderRadius: '50%',
    width: '1.125rem',
    height: '1.125rem',
    margin: '0 6%',
    transition: '300ms ease',
    transitionProperty: 'color,border-style,border-color,visibility, background,background-color,text-decoration,box-shadow,transform, opacity',
    userSelect: 'none'
  }
}

const Switch = ({ checked, label, onChange, ...rest }) => {

  const handleClick = () => {
    onChange(!checked)
  }

  return (
    <Box sx={sx} {...rest} onKeyPress={e => (['Enter', ' '].includes(e.key)) && handleClick()} onClick={handleClick} aria-checked={checked}><div><div></div></div></Box>
  )
}

// const StyledSwitch = styled(Switch)`
// /* wrapper */
// display: inline-block;
// position: relative;
// z-index: 1;
// font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
// border-radius: 2.125rem;
// width: 3rem;
// height: 1.5rem;
// background-color: #dee2e6;
// overflow: hidden;
// cursor: pointer;
// border-width: 0.0625rem;
// border-color: #ced4da;
// border-style: solid;
// font-size: 0.5625rem;
// font-weight: 800;
// transition: 300ms ease;
// transition-property: color,border-style,border-color,visibility, background,background-color,text-decoration,box-shadow,transform, opacity;
// outline: none;
// user-select: none;
// &:focus {
//   box-shadow: 0 0 0 3px hsla(202,81%,86%,1);
//   border: 1px solid hsla(205,79%,66%,1);
// }

// &[aria-checked='true'] {
//   background-color: #91b9e4;
//   border-color: transparent;
//   & > div {
//     transform: translateX(calc(3rem - 1.125rem - 12%));
//     & > div {
//       background-color: hsla(211,61%,43%,1);
//     }
//   }
// }

// /* switch */
// & > div {
//   display: flex;
//   align-items: center;
//   height: 100%;
//   pointer-events: none;
//   transition: 300ms ease;
//   transition-property: color,border-style,border-color,visibility, background,background-color,text-decoration,box-shadow,transform, opacity;
//   user-select: none;
// }

// /* ball */
// & > div > div {
//   flex-shrink: 0;
//   background-color: #adb5bd;
//   border-radius: 50%;
//   width: 1.125rem;
//   height: 1.125rem;
//   margin: 0 6%;
//   transition: 300ms ease;
//   transition-property: color,border-style,border-color,visibility, background,background-color,text-decoration,box-shadow,transform, opacity;
//   user-select: none;
// }
// `

Switch.defaultProps = {
  tabIndex: 0,
  onChange: () => {},
}

export default Switch
