/* eslint-disable react/prop-types */
import mobileDivider from "../assets/images/pattern-divider-mobile.svg"
import dice from "../assets/images/icon-dice.svg"
import { useState } from "react"

export const Major = () => {
  const [data, setData] = useState("")
  // eslint-disable-next-line no-unused-vars
  const [url, setUrl] = useState("https://api.adviceslip.com/advice")

  const adviceFetch = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(url)
      const responseData = await response.json()
      setData(responseData.slip)
      console.log(responseData.slip)
    } catch (error) {
      console.log(`Error fetching data: ${error}`)
    }
  }

  return (
    <div className="relative bg-darkgrayBlue p-10 rounded-2xl flex flex-col place-items-center gap-8">
      <h4 className="text-neonGreen uppercase font-MonoRope">
        {data ? <>Advice # {data.id}</> : <p>Advice # 1</p>}
      </h4>
      <h2 className="max-w-md text-xl lg:text-3xl font-MonoRope">
        {data ? (
          <p>&ldquo;{data.advice}&rdquo;</p>
        ) : (
          <p>&ldquo;Roll the Dice&rdquo;</p>
        )}
      </h2>
      <img src={mobileDivider} alt={mobileDivider} />
      <form onClick={adviceFetch}>
        <button
          className="
          border-none 
          hover:rotate-180
          transition-all duration-500
          bg-neonGreen 
          p-4 
          rounded-[50%]
          absolute
          -translate-x-[50%]
      "
        >
          <img src={dice} alt={dice} />
        </button>
      </form>
    </div>
  )
}
