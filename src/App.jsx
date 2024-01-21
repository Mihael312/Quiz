import { useState } from 'react'
import Nav from './components/Nav'
import Quiz from './components/Quiz'

function App() {
  return (
    <div>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <Nav />
      <Quiz />
      <div className="d-flex justify-content-center"/>
    </div>
  )
}

export default App
