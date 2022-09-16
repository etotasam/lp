import React, { useEffect, useState } from 'react'
import { useWindowSize } from './useWindowSize'


export const useCheckDevice = () => {
  const { width } = useWindowSize()

  const [isMobile, setIsMobile] = useState<boolean>()
  useEffect(() => {
    setIsMobile(width < 700)
  }, [width])

  return { isMobile }
}
