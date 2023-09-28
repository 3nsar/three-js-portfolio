import React from 'react'
import Hero from './components/Hero'
import "./App.css"
import About from './components/About'
import Projects from './components/Projects'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Hero/>
      <About/>
      <Projects/>
    </div>
  )
}

export default App