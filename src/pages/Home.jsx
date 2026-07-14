import React from 'react'
import HeroSliderBanner from '../components/slider/HeroSliderBanner'
import ProductSlider from '../components/slider/ProductSlider'

const Home = () => {
  return (
    <div className='max-w-7xl mx-auto'>
        <HeroSliderBanner/>
        <ProductSlider/>
    </div>
  )
}

export default Home