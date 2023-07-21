import datas from "../components/content.json"
import { useState } from "react"

const CancelBtn = () => {
  const [cancel, setCancel] = useState(false)
  return (
    <button
      className="bg-transparent border-none"
      onClick={() => {
        setTimeout(() => {
          setCancel(!cancel)
        },500)
      }}
    >
      <p className="text-secondary-darkBlue capitalize font-bold font-RedHat cursor-pointer">
        {cancel ? <p className="text-red-500">Are you sure?</p> : datas.cancel_btn}
      </p>
    </button>
  )
}

export default CancelBtn
