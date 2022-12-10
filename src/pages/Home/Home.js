import React from 'react'
import Header from '../../components/Header'
import './HomeStyles.css'
import Hero from '../../components/Hero'
import Pricing from '../Pricing'

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Pricing/>
    </div>

  )
}

export default Home