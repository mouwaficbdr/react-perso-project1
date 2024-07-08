import React from "react"
import Info from './Info'
import About from './About'
import Interests from './Interests'
import Footer from './Footer'
import "../styles.css"

export default function App() {
  return (
    <div className="container">
      <Info />
      <About />
      <Interests />
      <Footer />

    </div>
  )
}