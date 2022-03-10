import React from 'react'

import './Header.css'

import HeroMobileImg from '../assets/homepage/mobile/image-homepage-hero@2x.jpg'
import ProfileMobileImg from '../assets/homepage/mobile/image-homepage-profile@2x.jpg'

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
        <div className='pair'>
          <img src={ProfileMobileImg} className='pair__img' alt='headshot' />
          <div className='pair__copy'>
            <h2 className='title title--md'>About Me</h2>
            <p className='text'>
              I’m a fullstack developer looking for a new role in an exciting company. I
              focus on writing accessible HTML, using modern CSS practices and writing
              clean JavaScript. When writing JavaScript code, I mostly use React, but I
              can adapt to whatever tools are required. I’m based in Spain, but I’m happy
              working remotely and have experience in remote teams. When I’m not coding,
              you’ll find me outdoors and exercising. I’d love you to check out my work.
            </p>

            <a href='#' className='btn btn--alt'>
              Go To Portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
