import { useState } from 'react'

import './App.css'

import Card from './components/Card'
import Ratings from './components/Ratings'
import Thankyou from './components/Thankyou'

function App() {
  const [count, setCount] = useState(0)

  return(
      <Ratings />
  )
}

export default App
