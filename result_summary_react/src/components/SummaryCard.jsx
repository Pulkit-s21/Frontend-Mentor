import datas from "./content.json"
import { RatingCard } from "./RatingCard"
import reaction from "../assets/images/icon-reaction.svg"
import memory from "../assets/images/icon-memory.svg"
import verbal from "../assets/images/icon-verbal.svg"
import visual from "../assets/images/icon-visual.svg"
import { useState } from "react"

export const SummaryCard = () => {
  const [clicked, setClicked] = useState(false)
  return (
    <div className="text-left p-6 grid grid-cols-1 gap-4">
      <p className="font-Hanken text-secondary-grayBlue capitalize font-bold text-lg md:text-xl">
        {datas.summary}
      </p>
      <RatingCard
        bgclr="bg-primary-bglightRed"
        textclr="text-primary-lightRed"
        icon={reaction}
        name={datas.box1}
        ratingScore={datas.score1}
      />
      <RatingCard
        bgclr="bg-primary-bgorangeyYellow"
        textclr="text-primary-orangeyYellow"
        icon={memory}
        name={datas.box2}
        ratingScore={datas.score2}
      />
      <RatingCard
        bgclr="bg-primary-bgteal"
        textclr="text-primary-teal"
        icon={verbal}
        name={datas.box3}
        ratingScore={datas.score3}
      />
      <RatingCard
        bgclr="bg-primary-bgcobaltBlue"
        textclr="text-primary-cobaltBlue"
        icon={visual}
        name={datas.box4}
        ratingScore={datas.score4}
      />

      <button
        className="bg-secondary-grayBlue border-none rounded-full text-secondary-paleBlue font-Hanken text-lg md:text-xl"
        onClick={() => {
          setTimeout(() => {
            setClicked(!clicked)
          }, 500)
        }}
      >
        {clicked ? <p>Redirecting</p> : <p>Continue</p>}
      </button>
    </div>
  )
}
