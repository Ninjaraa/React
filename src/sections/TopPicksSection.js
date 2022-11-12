import React from 'react'
import ImgTopPicks from '../assets/images/placeholders/top-picks.svg';
import ImgFlashSale from '../assets/images/placeholders/flash-sale.svg';

const TopPicksSection = () => {
    return (
        <section className="__top-pick-section">
            <div className="container">
                <div className="top-pick-grid">
                    <div id="top-picks-img">
                        <img src={ImgTopPicks} alt="Pamela Reif's Top picks" />
                    </div>
                    <div className="top-pick-content" id="top-picks-content">
                        <h1>Pamela Reif's <span>Top Picks</span></h1>
                        <button className="btn-dark-theme">SHOP NOW</button>
                    </div>

                    <div id="flash-sale-img">
                        <img src={ImgFlashSale} alt="Flash sale" />
                    </div>
                    <div className="top-pick-content" id="flash-sale-content">
                        <h1>Let's Be <span>Conscious</span></h1>
                        <button className="btn-light-theme">FLASH SALE</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopPicksSection