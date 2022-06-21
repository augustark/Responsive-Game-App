import { useEffect, useRef, useState } from 'react'

function useClickOutside() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen && setOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return [open, setOpen, ref]
}

export default useClickOutside