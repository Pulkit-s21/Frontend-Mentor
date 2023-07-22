/* eslint-disable react/prop-types */

import { useState } from "react"

const Card = (props) => {
  const [learning, setLearning] = useState(false)
  return (
    <div
      className={`
    bg-${props.clr}
    grid
    grid-cols-1
    gap-10
    md:gap-14
    text-left
    p-8
    max-w-[20em]
    ${props.border}
    
    `}
    >
      <img src={props.cartype} alt={props.cartype} />
      <h1 className="font-Big_Shoulder uppercase">{props.title}</h1>
      <p className="font-Lexend">{props.description}</p>
      <button
        className={`bg-secondary-vlGray border-none text-${props.clr} font-Lexend`}
        onClick={() => {
          setTimeout(() => {
            setLearning(!learning)
          }, 500)
        }}
      >
        {learning ? <p>Redirecting</p> : <p>Learn More</p>}
      </button>
    </div>
  )
}

export default Card
