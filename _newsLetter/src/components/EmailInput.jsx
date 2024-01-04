import { useContext } from "react"
import { Context } from "../App"

export const EmailInput = () => {
  const { email, setEmail, errorMsg } = useContext(Context)
  return (
    <div className="flex flex-col gap-2 text-left">
      <label
        className="cursor-pointer md:text-xl font-semibold text-gray-500"
        htmlFor="Email"
      >
        Email address
      </label>
      <p className="text-sm text-red-400">{errorMsg}</p>

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        id="Email"
        autoComplete="off"
        placeholder="email@company.com"
        className=" placeholder:text-gray-400 bg-transparent border-2 px-4 p-2 md:text-lg focus:outline-none focus:border-red-500"
      />
    </div>
  )
}
