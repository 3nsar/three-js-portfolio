import React from 'react'
import Hero from './components/Hero'
import "./App.css"
import About from './components/About'

const App = () => {
  return (
    <div className='App'>
      <Hero/>
      <About/>
    </div>
  )
}

export default App