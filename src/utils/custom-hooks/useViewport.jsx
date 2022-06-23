import { useState, useEffect } from 'react'

function useViewport(bp) {
  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = bp.match(/(\d+)/)[0]

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { width, breakpoint };
}

export default useViewport