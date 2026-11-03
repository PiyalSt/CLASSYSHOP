import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomeLayout from './layouts/HomeLayout'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home routes */}
        <Route path='/' element={<HomeLayout />} >
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App