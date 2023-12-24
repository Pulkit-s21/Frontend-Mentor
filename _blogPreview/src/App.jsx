import { Image } from "./components/Image"
import "./App.css"
import { Category } from "./components/Category"
import { Content } from "./components/Content"
import { Profile } from "./components/Profile"

function App() {
  return (
    <main className=" font-FigTree w-80 sm:w-96 md:max-w-md flex flex-col gap-3 border-2 border-black bg-white p-6 rounded-2xl shadow-back">
      <Image />
      <Category />
      <Content />
      <Profile />
    </main>
  )
}

export default App
