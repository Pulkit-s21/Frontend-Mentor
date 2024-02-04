import { useContext } from "react"
import { Context } from "../App"
import cuteBear from "../assets/cuteBear.webp"

export const Noo = () => {
  const { gotRejected, getPhrase, setYesPressed, yesBtnSize } = useContext(
    Context
  )
  return (
    <>
      <img src={cuteBear} alt="Cute Love Bear" />
      <p className="text-3xl text-pink-400">Will you be my valentine</p>
      <div className="flex gap-4 items-center">
        <button
          className="bg-green-500 px-6 py-2 text-white rounded-md"
          style={{ fontSize: yesBtnSize }}
          onClick={() => setYesPressed(true)}
        >
          Yes
        </button>
        <button
          className="bg-red-300 text-white px-6 py-2 rounded-md"
          onClick={() => gotRejected()}
        >
          {getPhrase()}
        </button>
      </div>
    </>
  )
}
