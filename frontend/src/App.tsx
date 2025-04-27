import { useState } from 'react'
import './App.css'
import Routers from './routers/Routers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='border border-black'>
      <Routers/>
    </div>
  )
}

export default App
