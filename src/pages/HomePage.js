import React from 'react'
import Hero from '../components/Hero'
import Reserve from '../components/Reserve'
import Discover from '../components/Discover'
import FeaturedPackages from '../components/package/FeaturedPackages'
import Offers from '../components/Offers'

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Reserve/>
      <Discover/>
      <FeaturedPackages/>
      <Offers />
    </main>
  )
}

export default HomePage