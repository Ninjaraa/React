import React from 'react';
import ImgCustomerSupport from '../assets/images/icons/customer-support.png';
import ImgSecuredPayment from '../assets/images/icons/secured-payment.png';
import ImgFreeHomeDelivery from '../assets/images/icons/free-home-delivery.png';
import Img30DayReturn from '../assets/images/icons/30-day-reuters.png';

const CustomerServiceSection = () => {
    return (

        <section className="__customer-service-section">
            <div className="container">

                <div className="customer-service" id="support">
                    <img src={ImgCustomerSupport} alt="Customer Support" />
                    <h3>Customer Support</h3>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>

                <div className="customer-service" id="payment">
                    <img src={ImgSecuredPayment} alt="Customer Support" />
                    <h3>Secured Payment</h3>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>

                <div className="customer-service" id="delivery">
                    <img src={ImgFreeHomeDelivery} alt="Customer Support" />
                    <h3>Free Home Delivery</h3>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>

                <div className="customer-service" id="return">
                    <img src={Img30DayReturn} alt="Customer Support" />
                    <h3>30 Day Return</h3>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
            </div>
        </section>
    )
}

export default CustomerServiceSection