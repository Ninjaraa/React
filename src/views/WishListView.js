import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'

const WishListView = () => {
  window.top.document.title = 'Wishlist | Fixxo.'

  return (
    <>
      <MainMenuSection />
      <FooterSection />
    </>
  )
}

export default WishListView