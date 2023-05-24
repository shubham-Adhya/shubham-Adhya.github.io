import React from 'react'
import Header from './components/header/Header';
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Skill from './components/skill/Skill'
import Stats from './components/stats/Stats'
import Projects from './components/projects/Projects'
// import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Skill/>
        <Projects/>
        <Stats/>
        {/* <Testimonials/> */}
        <Contact/>
        <Footer/>
    </>
  )
}

export default App