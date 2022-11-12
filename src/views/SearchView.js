import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'

const SearchView = () => {
  window.top.document.title = 'Search | Fixxo.'

  return (
    <>
      <MainMenuSection />
      <FooterSection />
    </>
  )
}

export default SearchView