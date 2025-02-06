import React, { useEffect, useState } from 'react'

const resolutions = {
  xs: { minWidth: 0, maxWidth: 599 },
  sm: { minWidth: 600, maxWidth: 899 },
  md: { minWidth: 900, maxWidth: 1199 },
  lg: { minWidth: 1200, maxWidth: 1535 },
  xl: { minWidth: 1536 }
}

const useResize = () => {
  const [windowSize, setWindowSize] = useState({
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  })

  const [breakpoints, setBreakpoints] = useState({
    isMobile: window.innerWidth <= 576,
    isTablet: window.innerWidth < 992 && window.innerWidth > 576,
    isDesktop: window.innerWidth >= 992
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      })

      setBreakpoints({
        isMobile: window.innerWidth <= 576,
        isTablet: window.innerWidth < 992 && window.innerWidth > 576,
        isDesktop: window.innerWidth >= 992
      })
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return breakpoints
}

export default useResize
