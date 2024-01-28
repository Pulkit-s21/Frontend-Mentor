import { useContext } from "react"
import { Context } from "../App"

export const SearchBox = () => {
  const { country, setCountry, searchCountry } = useContext(Context)
  return (
    <div className="flex items-center shadow-md w-fit bg-white p-2 px-4">
      <input
        className="bg-white p-2 text-black outline-none"
        placeholder="Search the country..."
        type="text"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      Search
    </div>
  )
}
