import React, { useState } from 'react'

const ContactFormSection = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [comments, setComments] = useState('')
  const [formErrors, setFormErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [failedSubmit, setFailedSubmit] = useState(false)

  const submitData = async (url, method, data, contentType = 'application/json') => {
    const res = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': contentType
      },
      body: data
    })
    console.log('fetch status: ' + res.status)
    if (res.status === 200)
      return true
    return false
  }

  const validate = (e, form = null) => {
    const errors = {}

    if (e.type === 'submit') {
      errors.name = validate_name(form.name)
      errors.email = validate_email(form.email)
      errors.comments = validate_comments(form.comments)

      return errors;

      // If not submit   
    } else {
      const { id, value } = e.target

      switch (id) {
        case 'name':
          return validate_name(value)
        case 'email':
          return validate_email(value)
        case 'comments':
          return validate_comments(value)
      }
    }
  }

  const validate_name = (value) => {
    if (!value)
      return "Please write your name to be qualified for this form"
    else if (value.length < 2)
      return "Your name is less than 2 characters? Be serious now"
    else
      return null
  }

  const validate_email = (value) => {
    const regex_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!value)
      return "Please use a correct email to be qualified for this form"
    else if (!regex_email.test(value))
      return "Please use a correct email. Like name@namesson.com"
    else
      return null
  }

  const validate_comments = (value) => {
    if (!value)
      return "You need to add some data to send data"
    else if (value.length < 5)
      return "Maybe you should add some more content?"
    else
      return null
  }

  // Handle change
  const handleChange = (e) => {
    const { id, value } = e.target

    switch (id) {
      case 'name':
        setName(value)
        break
      case 'email':
        setEmail(value)
        break
      case 'comments':
        setComments(value)
        break
    }
    setFormErrors({ ...formErrors, [id]: validate(e) })
  }

  // Key Up 
  const handleKeyUp = (e) => {
    const { id } = e.target
    setFormErrors({ ...formErrors, [id]: validate(e) })
  }

  // Will handle the submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitted(false)
    setFailedSubmit(false)
    setFormErrors(validate(e, { name, email, comments }))

    if (formErrors.name === null && formErrors.email === null && formErrors.comments === null) {

      let json = JSON.stringify({ name, email, comments })

      setName('')
      setEmail('')
      setComments('')
      setFormErrors({})

      if (await submitData('https://win22-webapi.azurewebsites.net/api/contactform', 'POST', json,)) {
        setSubmitted(true)
        setFailedSubmit(false)
      } else {
        setSubmitted(false)
        setFailedSubmit(true)
      }

    } else {
      setSubmitted(false)
    }
  }

  return (
    <section className="__contact-form-section">
      <div className="container">

        {
          submitted ? (
            <div>
              <h3 className="form-success">Thank you for reaching out to us!</h3>
            </div>) : (<></>)
        }

        {
          failedSubmit ? (
            <div>
              <h3 className="form-error">Something went wrong. Please reload the page and try again</h3>
            </div>) : (<></>)
        }

        <div className='contact-us'>
          <h2>Come in Contact with Us</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div>
              <input id="name" type="text" placeholder="Your name" value={name} onChange={handleChange} onKeyUp={handleKeyUp} />
              <div className='errorMessage'>{formErrors.name}</div>
            </div>
            <div>
              <input id="email" type="email" placeholder="Your Mail" value={email} onChange={handleChange} onKeyUp={handleKeyUp} />
              <div className='errorMessage'>{formErrors.email}</div>
            </div>
            <div className='textarea'>
              <textarea id="comments" placeholder="Comments" value={comments} onChange={handleChange} onKeyUp={handleKeyUp}></textarea>
              <div className='errorMessage'>{formErrors.comments}</div>
            </div>
            <div>
              <button type="submit" className="form-btn">Post Comments</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactFormSection