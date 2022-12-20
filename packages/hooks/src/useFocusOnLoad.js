import React from 'react'

function useFocusOnLoad(elementName, select = false) {
  React.useEffect(() => {
    const isMobile = Boolean(navigator.userAgent.match(/Android/i)) || Boolean(navigator.userAgent.match(/iPhone|iPad|iPod/i))
    if (!isMobile) {
      setTimeout(() => {
        const firstElement = document.querySelector(`[name="${elementName}"]`)
        if (firstElement) {
          firstElement.focus()
          if (select) firstElement.select()
        }
      }, 100)
    }
  }, [elementName, select])
}

export default useFocusOnLoad
