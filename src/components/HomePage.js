import React from 'react'
import { Link } from 'react-router-dom'

import Pair from './Pair'
import Together from './Together'

import './HomePage.css'

// Imported images and data
import HeroMobileImg from '../assets/images/homepage/mobile/image-homepage-hero@2x.jpg'
import ProfileMobileImg from '../assets/images/homepage/mobile/image-homepage-profile@2x.jpg'
import aboutMeData from '../data/aboutMeData'

// Imported svgs
import { ReactComponent as DownArrows } from '../assets/icons/down-arrows.svg'

const HomePage = () => {
  return (
    <div className='HomePage'>
      <section className='hero'>
        <div className='hero__copy'>
          <h1 className='title title--lg'>
            Hey, I'm Xavi Guasch and I do love building beautiful websites
          </h1>

          <a href='#about-me' className='btn'>
            <div className='btn-container'>
              <div className='svg-container'>
                <DownArrows />
              </div>
              <span>About Me</span>
            </div>
          </a>
        </div>
        <div className='hero__mobile-img'>
          <img src={HeroMobileImg} alt='computer monitor showing webiste' />
        </div>
      </section>

      <section className='about-me' id='about-me'>
        <Pair
          img={ProfileMobileImg}
          text={aboutMeData.text}
          title={aboutMeData.title}
          buttonText='Go To Portfolio'
        />
      </section>
      <Together />
    </div>
  )
}

export default HomePage
