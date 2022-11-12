import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import BreadCrumbSection from '../sections/BreadCrumbSection'
import FooterSection from '../sections/FooterSection'
import MapSection from '../sections/MapSection'
import ContactFormSection from '../sections/ContactFormSection'

const ContactView = () => {
  window.top.document.title = 'Contacts | Fixxo.'
  return (
    <>
      <MainMenuSection />
      <BreadCrumbSection currentPage="Contacts" />
      <MapSection />
      <ContactFormSection />
      <FooterSection />
    </>
  )
}

export default ContactView