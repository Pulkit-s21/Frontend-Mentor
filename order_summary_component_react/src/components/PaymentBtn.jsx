import datas from "../components/content.json"
import { useState } from "react"

const PaymentBtn = () => {
  const [payment, setPayment] = useState(false)

  return (
    <button
      className="p-4 rounded-xl bg-primary-bblue shadow-md shadow-secondary-dblue border-none"
      onClick={() => {
        setTimeout(() => {
          setPayment(!payment)
        }, 500)
      }}
    >
      <h2 className="font-RedHat font-bold">
        {payment ? <p>Processing Payment</p> : datas.payment_btn}
      </h2>
    </button>
  )
}

export default PaymentBtn
