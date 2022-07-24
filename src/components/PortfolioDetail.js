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
      <img src={project.images.mobile.hero} alt='' />

      <div className='portfolio-info'>
        <h2 className='title title--lg'>{project.name}</h2>
        <p>{project.description}</p>
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
            <img src={project.images.mobile.preview1} alt='' />
            <img src={project.images.mobile.preview2} alt='' />
          </div>
        </div>
      </div>

      <div className='other-projects'>
        <Link className='other-projects__left' to={`/portfolio/${project.previous}`}>
          <ArrowLeft />
          <h3>{project.previous}</h3>
          <p>Previous Project</p>
        </Link>
        <Link className='other-projects__right' to={`/portfolio/${project.next}`}>
          <ArrowRight />
          <h3>{project.next}</h3>
          <p>Next Project</p>
        </Link>
      </div>
    </div>
  )
}

export default PortfolioDetail
