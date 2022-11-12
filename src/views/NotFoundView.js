import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'

const NotFoundView = () => {
  window.top.document.title = '404 - Not found | Fixxo.'

  return (
    <>
      <MainMenuSection />
      <div>
        <h1>404 - This is wrong</h1>
        <p>Really, you're gonna pull that move? I guided your entire civilisation. Your people have a holiday named ricksgiving.
          They teach kids about me in school. I mean, why would a poptart want to live inside a toaster, Rick? I mean, that would be like the scariest place for them to live.
          You know what I mean? Lemme hear everybody say hey-yo! All the ladies say yeaaah! Everybody over thirty do this with your hand! Everybody with a red shirt jump up and down!
          Yo, everyone whose first name begins with an L who isn't hispanic, walk in a circle the same number of times as the square root of your age times teeenn! No! Look away! I'm making an egg, Mom! Ugh…! I'm making an egg!</p>
      </div>
      <FooterSection />
    </>

  )
}

export default NotFoundView