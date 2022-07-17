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
      <h2>PortfolioDetail</h2>
      <img src={project.images.mobile.hero} alt='' />
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <div className='tags'>Interaction Design / Front End Development</div>
      <div className='tags'>HTML / CSS / JS</div>
      <a href='#'>Visit Website</a>
      <h3>Project Background</h3>
      <p>{project.background}</p>
      <h3>Static Previews</h3>
      <img src={project.images.mobile.preview1} alt='' />
      <img src={project.images.mobile.preview2} alt='' />

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
