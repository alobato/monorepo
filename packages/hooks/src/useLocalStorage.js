// https://gist.github.com/jamesfulford/a7f1fcead386e76bfd9d36136e0da6da
// https://usehooks.com/useLocalStorage/
// https://github.com/rehooks/local-storage
import { useEffect, useState } from 'react'

function useLocalStorage(key, initialValue) {
  const [items, setItems] = useState(() => (window.localStorage.getItem(key) ? JSON.parse(window.localStorage.getItem(key)) : initialValue))

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(items))
  }, [items, key])

  return [items, setItems]
}

export default useLocalStorage
