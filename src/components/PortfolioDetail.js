import React from 'react'
import { Link, useParams } from 'react-router-dom'

import projectsData from '../data/projectsData'

// Imported svgs
import { ReactComponent as ArrowLeft } from '../assets/icons/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../assets/icons/arrow-right.svg'

import './PortfolioDetail.css'

const PortfolioDetail = () => {
  let params = useParams()

  const project = projectsData.find(
    (pd) => pd.name.toLowerCase() === params.projectName.toLowerCase()
  )

  return (
    <div className='PortfolioDetail'>
      <img
        className='PortfolioDetail__hero--mobile'
        src={project.images.mobile.hero}
        alt=''
      />
      <img
        className='PortfolioDetail__hero--tablet'
        src={project.images.tablet.hero}
        alt=''
      />
      <img
        className='PortfolioDetail__hero--desktop'
        src={project.images.desktop.hero}
        alt=''
      />

      <div className='portfolio__info'>
        <h2 className='title title--lg'>{project.name}</h2>
        <p className='text'>{project.description}</p>
        <div className='tag-area'>
          <p className='tags'>Interaction Design / Front End Development</p>
          <p className='tags'>HTML / CSS / JS</p>
        </div>
        <Link to='#' className='btn btn--alt'>
          Visit Website
        </Link>
      </div>

      <div className='portfolio-background'>
        <div className='title-and-text'>
          <h3 className='title title--md'>Project Background</h3>
          <p className='text'>{project.background}</p>
        </div>
        <div className='previews'>
          <h3 className='title title--md'>Static Previews</h3>
          <div className='previews__images'>
            <img
              className='preview__images__mobile'
              src={project.images.mobile.preview1}
              alt=''
            />
            <img
              className='preview__images__tablet'
              src={project.images.tablet.preview1}
              alt=''
            />
            <img
              className='preview__images__desktop'
              src={project.images.desktop.preview1}
              alt=''
            />
            <img
              className='preview__images__mobile'
              src={project.images.mobile.preview2}
              alt=''
            />
            <img
              className='preview__images__tablet'
              src={project.images.tablet.preview2}
              alt=''
            />
            <img
              className='preview__images__desktop'
              src={project.images.desktop.preview2}
              alt=''
            />
          </div>
        </div>
      </div>

      <div className='other-projects'>
        <Link className='other-projects__left' to={`/portfolio/${project.previous}`}>
          <ArrowLeft />
          <div className='other-projects__copy'>
            <h3 className='title title--md'>{project.previous}</h3>
            <p className='subtitle'>Previous Project</p>
          </div>
        </Link>
        <Link className='other-projects__right' to={`/portfolio/${project.next}`}>
          <ArrowRight />
          <div className='other-projects__copy'>
            <h3 className='title title--md'>{project.next}</h3>
            <p className='subtitle'>Next Project</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default PortfolioDetail
