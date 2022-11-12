import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import ExternalLinks from '../unittests/ExternalLinks'

const CategoriesView = () => {
  window.top.document.title = 'Categories | Fixxo.'

  return (
    <>
      <MainMenuSection />
      <ExternalLinks />
      <FooterSection />
    </>
  )
}

export default CategoriesView