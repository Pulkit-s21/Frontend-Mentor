import "./App.css"
import { useState, createContext } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { SuccessPage } from "./pages/SuccessPage"
export const Context = createContext()

function App() {
  let [email, setEmail] = useState("")
  let [errorMsg, setErrorMsg] = useState("")

  return (
    <Context.Provider value={{ email, setEmail, errorMsg, setErrorMsg }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </Router>
    </Context.Provider>
  )
}

export default App
