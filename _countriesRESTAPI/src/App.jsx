// import "./App.css"
import { useState, createContext } from "react"
import { Navbar } from "./components/Navbar"
import { SearchBox } from "./components/SearchBox"
import { FilterDropdown } from "./components/FilterDropdown"
import { CountryCard } from "./components/CountryCard"
export const Context = createContext()

function App() {
  let [country, setCountry] = useState("")
  let [err, setErr] = useState("")
  let [allCountries, setAllCountries] = useState([])
  let [searchedCountry, setSearchedCountry] = useState("")
  let [filterRegion, setFilterRegion] = useState("Filter by region")

  const fetchCountries = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all")
    const data = await res.json()
    setAllCountries(data)
  }
  fetchCountries()

  const searchCountry = async () => {
    if (!country) {
      setErr("Please enter a country !!")
      setTimeout(() => {
        setErr("")
      }, 2000)
    } else {
      setErr("")
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${country}?fullText=true`
      )
      const data = await res.json()
      if (data.status == 404) {
        setErr("Country Not Found !!")
        setTimeout(() => {
          setErr("")
        }, 2000)
      } else {
        setSearchedCountry(data)
      }
    }
  }

  return (
    <Context.Provider
      value={{
        country,
        setCountry,
        filterRegion,
        setFilterRegion,
        searchedCountry,
        searchCountry,
      }}
    >
      <div className="flex flex-col">
        <Navbar />

        <div className="flex flex-col items-center lg:items-stretch p-4 gap-4">
          <div className="flex flex-col gap-4 md:flex-row justify-between">
            <SearchBox />

            <FilterDropdown />
          </div>

          {err && <div className="text-red-500">{err}</div>}

          {!searchedCountry ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {allCountries.map((country, idx) => {
                return (
                  <CountryCard
                    key={idx}
                    img={country.flags.svg}
                    name={country.name.common}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                  />
                )
              })}
            </div>
          ) : (
            <>
              {searchedCountry &&
                searchedCountry.map((country, idx) => {
                  return (
                    <CountryCard
                      key={idx}
                      img={country.flags.svg}
                      name={country.name.common}
                      population={country.population}
                      region={country.region}
                      capital={country.capital}
                    />
                  )
                })}
            </>
          )}

          {!filterRegion ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {allCountries.map((country, idx) => {
                return (
                  <CountryCard
                    key={idx}
                    img={country.flags.svg}
                    name={country.name.common}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                  />
                )
              })}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {allCountries
                .filter(
                  (fileredCountry) => fileredCountry.region === filterRegion
                )
                .map((newCountry, idx) => {
                  return (
                    <CountryCard
                      key={idx}
                      img={newCountry.flags.svg}
                      name={newCountry.name.common}
                      population={newCountry.population}
                      region={newCountry.region}
                      capital={newCountry.capital}
                    />
                  )
                })}
            </div>
          )}
        </div>
      </div>
    </Context.Provider>
  )
}

export default App
