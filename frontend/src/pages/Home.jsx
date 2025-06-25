import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'

const Home = () => {
  return (
    <div className='bg-gradient-to-r from-blue-100 to-yellow-50'>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      
    </div>
  )
}

export default Home
