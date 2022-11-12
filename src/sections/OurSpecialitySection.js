import React from 'react'
import { NavLink } from 'react-router-dom'


const OurSpecialitySection = ({ title }) => {
  return (
    <section className="__our-speciality">
      <h1 className='section-title'>{title}</h1>
      <div className="container">
        <div className="col-3">
          <div className="speciality-card">
            <div className="speciality-card-body">
              <h3>Track your order</h3>
              <p className="speciality-card-text"><NavLink to="/">Get started</NavLink></p>
            </div>
            <div className="speciality-card-background"></div>
          </div>
        </div>
        <div className="col-3">
          <div className="speciality-card">
            <div className="speciality-card-body">
              <h3>Make a Return</h3>
              <p className="speciality-card-text"><NavLink to="/">Get started</NavLink></p>
            </div>
            <div className="speciality-card-background"></div>
          </div>
        </div>
        <div className="col-3">
          <div className="speciality-card">
            <div className="speciality-card-body">
              <h3>Request a Price Adjustment</h3>
              <p className="speciality-card-text"><NavLink to="/">Get started</NavLink></p>
            </div>
            <div className="speciality-card-background"></div>
          </div>
        </div>
      </div>
    </section>

  )
}


export default OurSpecialitySection