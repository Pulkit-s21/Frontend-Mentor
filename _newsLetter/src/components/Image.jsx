import { useEffect, useState } from "react"
import Desktop from "../assets/Desktop.svg"
import Mobile from "../assets/Mobile.svg"

export const Image = () => {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const innerWidth = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", innerWidth)
    return () => {
      window.removeEventListener("resize", innerWidth)
    }
  }, [])
  return (
    <div>
      {width < 768 ? (
        <img className="w-full h-full" src={Mobile}></img>
      ) : (
        <img className="w-full h-full" src={Desktop}></img>
      )}
    </div>
  )
}
