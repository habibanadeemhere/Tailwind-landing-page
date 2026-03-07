import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Parts from './components/parts'
import Awards from './components/Awards'
import Create from './components/Create'
import Testemonials from './components/Testemonials'
import Solution from './components/Solution'
import Resource from './components/Resource'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Parts/>
    <Awards/>
    <Create/>
    <Testemonials/>
    <Solution/>
    <Resource/>
    <Footer/>
    </>
  )
}

export default App
