import { useEffect, useState } from "react"

export const useDimensions = (myRef: any) => {
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 })

  useEffect(() => {
    const getDimensions = () => ({
      height: myRef.current.offsetHeight,
      width: myRef.current.offsetWidth,
    })

    const handleResize = () => {
      setDimensions(getDimensions())
    }

    if (myRef.current) {
      setDimensions(getDimensions())
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [myRef])

  return dimensions
}
