import datas from "./content.json"

export const ScoreCard = () => {
  return (
    <div
      className="grid 
    grid-cols-1 
    gap-4 
    p-6 
    bg-gradient-to-b from-gradient-slateBlue to-gradient-royalBlue 
    rounded-b-3xl
    rounded-3xl
    "
    >
      <p className="capitalize text-secondary-lavender font-Hanken">
        {datas.heading}
      </p>
      <div className="
      relative
      grid 
      grid-cols-1 
      py-4 
      bg-gradient-to-b from-gradient-violetBlue to-gradient-persianBlue 
      w-[150px]
      h-[150px]
      rounded-[50%]
      left-[50%]
      translate-x-[-50%]
      ">
        <p className="text-6xl font-Hanken text-white">{datas.score}</p>
        <p className="text-secondary-lavender">of 100</p>
      </div>
      <h2 className="text-white capitalize text-2xl font-Hanken font-bold">
        {datas.review}
      </h2>
      <p className="text-secondary-lavender font-Hanken">{datas.description}</p>
    </div>
  )
}
