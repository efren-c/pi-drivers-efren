import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './views/home/home.view'
import Landing from './views/landing/landing.view'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
