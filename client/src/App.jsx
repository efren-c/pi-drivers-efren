import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './views/home/home.view'
import Landing from './views/landing/landing.view'
import Detail from './views/detail/detail.view'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </>
  )
}

export default App
