/* eslint-disable react/prop-types */
export const CountryCard = (props) => {
  return (
    <div className="flex group flex-col text-black rounded-xl shadow-lg overflow-hidden w-fit">
      <img
        className="group-hover:scale-110 duration-200 transition-all cursor-pointer w-96"
        src={props.img}
        alt="Country Flag"
      />
      <div className="flex flex-col gap-2 p-4">
        <h2 className="font-bold text-2xl max-w-[20ch]">{props.name}</h2>
        <p>Population: {props.population}</p>
        <p>Region: {props.region}</p>
        <p>Capital: {props.capital}</p>
      </div>
    </div>
  )
}
