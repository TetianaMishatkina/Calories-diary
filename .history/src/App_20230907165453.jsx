import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import { Main } from './pages/main'
import { StartPage } from './pages/startPage'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartPage />} >
          <Route path="/main" element={<Main />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
