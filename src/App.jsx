import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'

function App() {
  

  return (
    <div className='bg-[#050414]'>
      <div className='absolute inset-0 bg-white dark:bg-gradient-to-r dark:from-[#0d0d23] dark:to-[#002147]  transition-colors duration-500'>

      </div>
      <div className='relative pt-20'>
        <Navbar/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
