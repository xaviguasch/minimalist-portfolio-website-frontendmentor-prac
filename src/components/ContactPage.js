import React from 'react'

import IconGroup from './IconGroup'

import './ContactPage.css'

const ContactPage = () => {
  return (
    <div className='ContactPage'>
      <div className='touch'>
        <h2>Get In Touch</h2>
        <p>
          I’d love to hear about what you’re working on and how I could help. I’m
          currently looking for a new role and am open to a wide range of opportunities.
          My preference would be to find a position in a company in London. But I’m also
          happy to hear about opportunites that don’t fit that description. I’m a
          hard-working and positive person who will always approach each task with a sense
          of purpose and attention to detail. Please do feel free to check out my online
          profiles below and get in touch using the form.
        </p>

        <div className='icons'></div>
      </div>
      <div className='contact-me'>
        <h2>Contact Me</h2>

        <form action=''>
          <div>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' placeholder='Jane Appleseed' />
          </div>
          <div>
            <label htmlFor='email'>Email Address</label>
            <input type='email' name='email' placeholder='email@example.com' />
          </div>
          <div>
            <label htmlFor='message'>Message</label>
            <textarea
              name='message'
              id=''
              placeholder='How can I help?'
              cols='30'
              rows='10'
            ></textarea>
          </div>
          <button>Send Message</button>
        </form>

        <IconGroup />
      </div>
    </div>
  )
}

export default ContactPage
