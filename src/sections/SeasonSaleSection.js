import React from 'react'
import ImgWinterClearance from '../assets/images/placeholders/winter-clearance.svg';
import ImgNewArrivals from '../assets/images/placeholders/new-arrivals.svg';

const SeasonSaleSection = () => {
    return (
        <section className="__season-sale-section">
            <div className="container">
                <div className='season-sale-grid'>
                    <div id="winter-img">
                        <img src={ImgWinterClearance} alt="Winter clearance" />
                    </div>
                    <div className="season-content" id="winter-content">
                        <h1>Winter Clearance Up to 70% Off!</h1>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                            totam rem apriam eaque ipsa quae ab illo inventore.</p>
                        <button className="btn-dark-theme">SHOP NOW</button>
                    </div>
                    <div id="new-arrivals-img">
                        <img src={ImgNewArrivals} alt="New arrivals" />
                    </div>
                    <div className="season-content" id="new-arrivals-content">
                        <h1>New Arrivals</h1>
                        <button className="btn-dark-theme">SHOP NOW</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SeasonSaleSection