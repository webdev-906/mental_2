import React from 'react'
import About from '../components/AboutUs'
import Content from '../components/Content'
import Header from '../components/Header'
import { Footer } from '../components/Footer'
function HomePage() {
  return (
    <div>
      <Header/>
        <About/>
        <Content/>   
       <Footer/>
    </div>
  )
}

export default HomePage
