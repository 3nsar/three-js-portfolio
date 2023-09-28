import React from 'react'
import Hero from './components/Hero'
import "./App.css"
import About from './components/About'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className='App'>
      <Hero/>
      <About/>
      <Projects/>
    </div>
  )
}

export default App