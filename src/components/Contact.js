import React from 'react'
import {Header,} from 'semantic-ui-react'
import ContactForm from './ContactForm.js'

const Contact = () => (
  <>
   <div className='contactTitle'>
    <Header.Content as="h1" className="aboutHead">Lets Connect</Header.Content>
    <Header.Content as="h4" className="aboutMeta">*contact us for availability</Header.Content>
   </div>
   <div className="contactContainer">
    <div className="contactForm">
     <ContactForm/>
    </div>
   </div>
  </>
)

export default Contact;