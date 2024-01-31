import { useState } from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './components/Home'
import SingleProduct from './components/SingleProduct'



function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='SingleProduct/:index' element={<SingleProduct/>}/>
    </Routes>
  )
}

export default App
