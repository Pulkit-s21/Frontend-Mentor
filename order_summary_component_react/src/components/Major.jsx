import { useState, useEffect } from "react"
import mobilejpg from "../assets/images/illustration-hero.svg"
import datas from "../components/content.json"
import PlanBtn from "./PlanBtn"
import PaymentBtn from "./PaymentBtn"
import CancelBtn from "./CancelBtn"

const Major = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <div className="overflow-hidden rounded-xl max-w-[25em]">
            {/* image container */}
            <div>
              <img className="h-full w-full" src={mobilejpg} alt="Hero" />
            </div>

            {/* content container */}
            <div className="bg-white p-4 flex flex-col gap-4">
              <h2
                className="
              text-secondary-darkBlue 
              font-RedHat 
              font-bold
              text-2xl
              capitalize
              "
              >
                {datas.title}
              </h2>

              <p className="text-secondary-dblue text-lg">
                {datas.description}
              </p>

              <PlanBtn />

              <PaymentBtn />

              <CancelBtn/>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Major
