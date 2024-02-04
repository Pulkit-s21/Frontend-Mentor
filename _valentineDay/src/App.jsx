import { createContext, useState } from "react"
import { Yess } from "./components/Yess"
import { Noo } from "./components/Noo"
export const Context = createContext()

function App() {
  const [noCount, setNoCount] = useState(0)
  const [yesPressed, setYesPressed] = useState(false)
  const yesBtnSize = noCount * 25 + 16

  const noPhrases = [
    "No",
    "Are you sre",
    "Really sure?",
    "Realy really sure?",
    "Please",
    "Don't do this to me",
    "I'm gonna crying....",
    "You are breaking my heart 🥺",
  ]

  const gotRejected = () => {
    setNoCount(noCount + 1)
  }

  const getPhrase = () => {
    return noPhrases[Math.min(noCount, noPhrases.length - 1)]
  }

  return (
    <Context.Provider
      value={{ noPhrases, gotRejected, getPhrase, setYesPressed, yesBtnSize }}
    >
      <div className="flex flex-col items-center justify-center h-[100vh]">
        {yesPressed ? (
          <Yess />
        ) : (
          <>
            <Noo />
          </>
        )}
      </div>
    </Context.Provider>
  )
}

export default App
