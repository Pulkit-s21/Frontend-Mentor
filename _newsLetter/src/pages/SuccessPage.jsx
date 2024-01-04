import { useContext } from "react"
import { Context } from "../App"
import { Button } from "../components/Button"
import icon from "../assets/icon-list.svg"

export const SuccessPage = () => {
  const { email } = useContext(Context)
  return (
    <div className="flex flex-col rounded-2xl p-6 md:p-8 gap-4 text-left bg-white text-black max-w-lg">
      <img className="w-16 md:w-20" src={icon} alt="Success Image" />
      <h2 className="text-4xl font-bold">Thanks for subscribing!</h2>
      <p className="md:text-lg">
        A confirmation email has been sent to{" "}
        <span className="md:text-xl font-semibold bg-gradient-to-r  from-red-400 to-purple-600 text-transparent bg-clip-text">
          {email}
        </span>
        . Please open it and confirm your subscription{" "}
      </p>
      <Button text="Dismiss message" url={""} />
    </div>
  )
}
