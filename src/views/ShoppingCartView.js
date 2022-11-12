import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'

const ShoppingCartView = () => {
  window.top.document.title = 'Shopping cart | Fixxo.'

  return (
    <>
      <MainMenuSection />
      <FooterSection />
    </>
  )
}

export default ShoppingCartView