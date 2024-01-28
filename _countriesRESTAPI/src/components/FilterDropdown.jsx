import { useContext } from "react"
import { Context } from "../App"

export const FilterDropdown = () => {
  const { filterRegion, setFilterRegion } = useContext(Context)
  const options = [
    { label: "Africa", value: "Africa" },
    { label: "Asia", value: "Asia" },
    { label: "America", value: "America" },
    { label: "Europe", value: "Europe" },
    { label: "Oceania", value: "Oceania" },
  ]
  return (
    <select
      className="p-4 bg-white text-black shadow-md w-fit"
      name=""
      value={filterRegion}
      onChange={(e) => {
        setFilterRegion(e.target.value)
      }}
      id="filter"
    >
      <option disabled value="Filter by region">
        Filter by Region
      </option>
      {options.map((region, idx) => {
        return (
          <option key={idx} value={region.value}>
            {region.label}
          </option>
        )
      })}
    </select>
  )
}
