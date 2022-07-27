import React from 'react'
import { Link } from 'react-router-dom'

import Pair from './Pair'
import Together from './Together'

import './HomePage.css'

// Imported images and data
import HeroMobileImg from '../assets/images/homepage/mobile/image-homepage-hero@2x.jpg'
import HeroTabletImg from '../assets/images/homepage/tablet/image-homepage-hero@2x.jpg'
import HeroDesktopImg from '../assets/images/homepage/desktop/image-homepage-hero@2x.jpg'
import ProfileMobileImg from '../assets/images/homepage/mobile/image-homepage-profile@2x.jpg'
import ProfileTabletImg from '../assets/images/homepage/tablet/image-homepage-profile@2x.jpg'
import ProfileDesktopImg from '../assets/images/homepage/desktop/image-homepage-profile@2x.jpg'
import aboutMeData from '../data/aboutMeData'

// Imported svgs
import { ReactComponent as DownArrows } from '../assets/icons/down-arrows.svg'

const HomePage = () => {
  return (
    <div className='HomePage'>
      <section className='hero'>
        <div className='hero__copy'>
          <h1 className='title title--lg'>
            Hey, I'm Xavi Guasch and I love building beautiful websites
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
        <div className='hero__tablet-img'>
          <img src={HeroTabletImg} alt='computer monitor showing webiste' />
        </div>
        <div className='hero__desktop-img'>
          <img src={HeroDesktopImg} alt='computer monitor showing webiste' />
        </div>
      </section>

      <section className='about-me' id='about-me'>
        <Pair
          imgMobile={ProfileMobileImg}
          imgTablet={ProfileTabletImg}
          imgDesktop={ProfileDesktopImg}
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
