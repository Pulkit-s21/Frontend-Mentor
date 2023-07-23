import { ScoreCard } from "./ScoreCard"
import { SummaryCard } from "./SummaryCard"

export const Major = () => {
  return (
    <div className="bg-white rounded-3xl text-black grid grid-cols-1 md:grid-cols-2 max-w-[20em] md:max-w-[40em]">
      <ScoreCard />
      <SummaryCard />
    </div>
  )
}
