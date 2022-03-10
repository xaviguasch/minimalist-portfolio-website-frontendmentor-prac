import React from 'react'

import Pair from './Pair'

import './Header.css'

import HeroMobileImg from '../assets/homepage/mobile/image-homepage-hero@2x.jpg'
import ProfileMobileImg from '../assets/homepage/mobile/image-homepage-profile@2x.jpg'
import aboutMeData from '../data/aboutMeData'

const HomePage = () => {
  return (
    <div className='HomePage'>
      <h2>HomePage</h2>

      <section className='hero'>
        <div className='hero__copy'>
          <h1 className='title title--lg'>
            Hey, I’m Xavi Guasch and I love building beautiful websites
          </h1>

          <a href='#about-me' className='btn'>
            About Me
          </a>
        </div>
        <div className='hero__mobi'>
          <img src={HeroMobileImg} alt='computer monitor showing webiste' />
        </div>
      </section>

      <section className='about-me' id='about-me'>
        <Pair img={ProfileMobileImg} text={aboutMeData.text} />
      </section>
    </div>
  )
}

export default HomePage
