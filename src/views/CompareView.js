import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'

const CompareView = () => {
  window.top.document.title = 'Compare | Fixxo.'

  return (
    <>
      <MainMenuSection />
      <FooterSection />
    </>
  )
}

export default CompareView