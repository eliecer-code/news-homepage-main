import './App.css'
import Navbar from './components/Nav/Navbar'
import FooterCards from './components/footerCards/FooterCards'
import MainView from './components/main/MainView'
import React from 'react'

const App = () => {
  return (
    <>
      <Navbar />
      <MainView />
      <FooterCards />
    </>
  )
}

export default App