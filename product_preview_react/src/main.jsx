import React from "react"
import { useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import datas from "../components/content.json"
import mobilejpg from "../assets/images/image-product-mobile.jpg"

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
        <h1>...</h1>
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
            <img className="h-[100%]" src={mobilejpg} alt="Perfume Image" />
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
              gap-2
              justify-evenly
            "
          >
            <p
              className="
                uppercase
                text-secondary-gblue
                tracking-widest
                "
            >
              {datas.preview}
            </p>
            <h2 className="font-bold font-Fraunces text-secondary-dblue text-2xl">{datas.name}</h2>
            <p className="text-sm font-Montserrat text-gray-500">
              {datas.description}{" "}
              <span className="uppercase text-primary-dcyan font-bold">{datas.company}</span>.
            </p>

            <div className="flex items-center gap-4 price-container">
              <p className="text-2xl font-Fraunces text-primary-dcyan">
                {datas.price}
              </p>
              <p
                className="
                font-Montserrat
                text-secondary-gblue
                line-through
                "
              >
                {datas.beforeprice}
              </p>
            </div>

            <button
              className="
              bg-primary-dcyan
              text-white
              transition-all
              font-Montserrat
              "
            >
              {datas.cart}
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Main
