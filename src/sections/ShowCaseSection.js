import React from 'react'
import ImgLeft from '../assets/images/header/showcase-img-1.png';
import ImgRight from '../assets/images/header/showcase-img-2.png';

const ShowCaseSection = () => {
  return (
    <section className='__showcase-section'>
      <div className="container">
        <div className="showcase-wrapper">
          <img src={ImgLeft} id="imgleft" alt="Placeholder -Sale up to 50% off" />
          <div className="showcase-body">
            <h1>SALE UP <span>To 50% Off</span></h1>
            <p>Online shopping free home delivery over $100</p>
            <button className="btn btn-header">SHOP NOW</button>
          </div>
          <img src={ImgRight} id="imgright" alt="Placeholder - Sale up to 50% off" />
        </div>
      </div>
    </section>
  )
}

export default ShowCaseSection
