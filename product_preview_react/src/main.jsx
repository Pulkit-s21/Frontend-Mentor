import React from "react"
import { useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import datas from "../components/content.json"
import mobilejpg from "../assets/images/image-product-mobile.jpg"
import cartsvg from "../assets/images/icon-cart.svg"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

const Main = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <>
      {loading ? (
        <h1 className="text-primary-dcyan font-Montserrat">Loading</h1>
      ) : (
        <div
          className="
          rounded-xl
          overflow-hidden
          grid
          grid-cols-1
          max-w-[25em]
          md:grid-cols-2
          md:max-w-[40em]
        "
        >
          <div className="img-container">
            <img className="h-full" src={mobilejpg} alt="Perfume Image" />
          </div>

          <div
            className="
              p-[1.5em]
              content-container
            bg-white
            text-black
              text-left
              flex
              flex-col
              gap-4
              justify-evenly
            "
          >
            <p
              className="
                uppercase
                text-secondary-gblue
                tracking-widest
                md:text-lg
                font-Montserrat
                "
            >
              {datas.preview}
            </p>
            <h2 className="font-bold font-Fraunces text-secondary-dblue text-2xl">
              {datas.name}
            </h2>
            <p className="text-sm md:text-base font-Montserrat text-gray-500">
              {datas.description}{" "}
              <span className="uppercase text-primary-dcyan font-bold">
                {datas.company}
              </span>
              .
            </p>

            <div className="flex items-center gap-4 price-container">
              <p className="text-3xl font-Fraunces text-primary-dcyan">
                {datas.price}
              </p>
              <p
                className="
                font-Montserrat
                text-secondary-gblue
                line-through
                text-sm
                "
              >
                {datas.beforeprice}
              </p>
            </div>

            <button
              className="
              bg-primary-dcyan
              text-primary-cream
              transition-all
              font-Montserrat
              flex
              justify-center
              gap-4
              "
            >
              <img className="w-5" src={cartsvg} alt="Cart svg" />
              {datas.cart}
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Main
