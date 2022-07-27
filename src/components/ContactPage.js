import React from 'react'

import IconGroup from './IconGroup'

import './ContactPage.css'

const ContactPage = () => {
  return (
    <div className='ContactPage'>
      <div className='portfolio__info portfolio__info--touch'>
        <h2 className='title title--lg'>Get In Touch</h2>
        <p className='text'>
          I’d love to hear about what you’re working on and how I could help. I’m
          currently looking for a new role and am open to a wide range of opportunities.
          My preference would be to find a position in a company in London. But I’m also
          happy to hear about opportunites that don’t fit that description. I’m a
          hard-working and positive person who will always approach each task with a sense
          of purpose and attention to detail. Please do feel free to check out my online
          profiles below and get in touch using the form.
        </p>

        <IconGroup position='icon-group_contact' />
      </div>

      <div className='contact-me'>
        <h2 className='title title--lg'>Contact Me</h2>

        <form className='contact-me__form' action=''>
          <div className='input-group'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' placeholder='Jane Appleseed' />
          </div>
          <div className='input-group'>
            <label htmlFor='email'>Email Address</label>
            <input type='email' name='email' placeholder='email@example.com' />
          </div>
          <div className='input-group'>
            <label htmlFor='message'>Message</label>
            <textarea
              name='message'
              id=''
              placeholder='How can I help?'
              cols='30'
              rows='10'
            ></textarea>
          </div>
          <button className='btn btn--contact'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
