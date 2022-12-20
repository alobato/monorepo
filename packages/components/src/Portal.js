import { createPortal } from 'react-dom'

function Portal({ children, elementId = 'portal-root' }) {
  return createPortal(children, document.getElementById(elementId))
}

export default Portal
