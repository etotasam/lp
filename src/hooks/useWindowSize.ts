import React from "react"

export const useWindowSize = (): { width: number, height: number } => {

  const [width, setWidth] = React.useState(0)
  const [height, setHeight] = React.useState(0)

  const getWindowSize = (): void => {
    const windowX = window.innerWidth
    const windowY = window.innerHeight
    setWidth(windowX)
    setHeight(windowY)
  }

  React.useEffect(() => {
    getWindowSize()
    window.addEventListener("resize", getWindowSize)
    return () => {
      window.removeEventListener("resize", getWindowSize)
    }
  }, [])

  return { width, height }
}