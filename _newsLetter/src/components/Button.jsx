/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { Context } from "../App"

export const Button = (props) => {
  const navigate = useNavigate()
  let { email, setErrorMsg } = useContext(Context)

  let email_REGEX = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
  const emailValidator = () => {
    if (email.match(email_REGEX)) {
      navigate(`/${props.url}`)
    } else {
      setErrorMsg("Please enter a valid address")
      setTimeout(() => {
        setErrorMsg("")
      }, 2000)
    }
  }
  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault()
          emailValidator()
        }}
        className="text-sm md:text-lg p-4 bg-Btn text-white hover:bg-gradient-to-r  from-red-500 to-orange-600 outline-none border-none"
      >
        {props.text}
      </button>
    </>
  )
}
