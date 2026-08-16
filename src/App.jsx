import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Services from './Pages/Services'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Hero from './Pages/Hero'
import TechButtons from './Component/TechButtons'
import Blog from './Pages/Blog'

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/hero' element={<Hero/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='techButtons' element={<TechButtons/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
