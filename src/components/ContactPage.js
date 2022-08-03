import React, { useState, useEffect } from 'react'

import IconGroup from './IconGroup'

import './ContactPage.css'

const ContactPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isNameEmpty, setIsNameEmpty] = useState(true)
  const [isEmailEmpty, setIsEmailEmpty] = useState(true)
  const [isMessageEmpty, setIsMessageEmpty] = useState(true)
  const [isEmailValid, setIsEmailValid] = useState(true)

  function emailValidator(email) {
    return /\S+@\S+\.\S+/.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    name.length > 0 ? setIsNameEmpty(true) : setIsNameEmpty(false)
    message.length > 0 ? setIsMessageEmpty(true) : setIsMessageEmpty(false)

    emailValidator(email) ? setIsEmailValid(true) : setIsEmailValid(false)
    email.length > 0 ? setIsEmailEmpty(true) : setIsEmailEmpty(false)
  }

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

        <form onSubmit={handleSubmit} className='contact-me__form' action='' novalidate>
          <div className='input-group'>
            <label htmlFor='name'>Name</label>
            <input
              className={`input input__name ${isNameEmpty ? '' : 'input-error'}`}
              type='text'
              name='name'
              placeholder='Jane Appleseed'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='input-group'>
            <label htmlFor='email'>Email Address</label>
            <input
              className={`input input__email ${isEmailEmpty ? '' : 'input-error'} ${
                isEmailValid ? '' : 'email-error'
              }`}
              type='email'
              name='email'
              placeholder='email@example.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='input-group'>
            <label htmlFor='message'>Message</label>
            <textarea
              className={`textarea ${isMessageEmpty ? '' : 'input-error'}`}
              name='message'
              id=''
              placeholder='How can I help?'
              cols='30'
              rows='10'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button className='btn btn--contact' type='submit'>
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
