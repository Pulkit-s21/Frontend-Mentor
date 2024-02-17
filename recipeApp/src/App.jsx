import { useState } from "react"
import { data } from "./utilities/data"

function App() {
  const [recipe] = useState(data)

  // ! Need to implement code so that it only shows recipe for the selected
  // const [selectedFood, setSelectedFood] = useState("Simple Omelette Recipe")
  // let foodNames = []

  // recipe.forEach((food) => {
  //   foodNames.push(food.title)
  // })

  return (
    <>
      {/* <select name="" id="">
        {foodNames.map((name, idx) => {
          return (
            <option
              key={idx}
              value={name}
              onClick={(e) => {
                setSelectedFood(e.target.value)
              }}
            >
              {name}
            </option>
          )
        })}
        {console.log(selectedFood)}
      </select> */}

      {recipe.map((item, idx) => {
        const {
          img,
          title,
          para,
          prep,
          ingredients,
          instructions,
          nutrition,
        } = item

        // Fetching the object so that we can print key and value seprately
        let prepEntries = Object.entries(prep)
        // console.log(prepEntries)

        let ingredientEntries = Object.values(ingredients)

        let instructionEntries = Object.entries(instructions)

        let nutritionEntries = Object.entries(nutrition)

        return (
          <div
            key={idx}
            className="bg-white p-6 rounded-lg max-w-lg grid grid-cols-1 gap-4 place-items-center"
          >
            <img src={img} className=" rounded-lg" alt="Food Image" />
            <h1 className="text-4xl">{title}</h1>
            <p className=" text-neutral-500">{para}</p>

            <div className="bg-purple-200 flex flex-col gap-2 p-4 w-full rounded-lg hover:scale-105 transition-all duration-500">
              <h3 className="text-xl text-purple-800 font-bold">
                Preparation Time
              </h3>
              <ul className="flex flex-col gap-2 pl-4">
                {prepEntries.map(([key, value], idx) => {
                  return (
                    <li key={idx}>
                      <span className="font-bold">{key}:</span>{" "}
                      <span className="text-neutral-600">{value}</span>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="flex flex-col gap-2 border-b-2 border-neutral-200">
              <h2 className="text-2xl font-bold text-amber-700">Ingredients</h2>
              <ul>
                <ul className="flex flex-col gap-2">
                  {ingredientEntries.map((value, idx) => {
                    return (
                      <li key={idx}>
                        <span className="text-neutral-500 lg:text-lg">
                          {value}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </ul>
            </div>

            <div className="flex flex-col gap-2 border-b-2 border-neutral-200">
              <h2 className="text-2xl font-bold text-amber-700">
                Instructions
              </h2>
              <ol className="flex flex-col gap-2">
                {instructionEntries.map(([key, value], idx) => {
                  return (
                    <li key={idx}>
                      <span className="font-bold">{key}:</span>{" "}
                      <span className="text-neutral-400 lg:text-lg">
                        {value}
                      </span>
                    </li>
                  )
                })}
              </ol>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold text-amber-700">Nutrition</h2>
              <p>
                The table below shows nutritional values per serving without the
                additional fillings
              </p>
              <ul className="flex flex-col gap-2">
                {nutritionEntries.map(([key, value], idx) => {
                  return (
                    <div
                      key={idx}
                      className="flex justify-evenly border-b-2 border-neutral-200 p-2"
                    >
                      <span>{key}</span>
                      <span className="text-amber-800 font-bold">{value}</span>
                    </div>
                  )
                })}
              </ul>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default App
