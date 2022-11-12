import React from 'react'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import ExternalLink from './ExternalLink'

const ProductDetails = ({ item }) => {
    const { incrementQuantity, decrementQuantity } = useShoppingCart()

    return (
        <section className="__product-details-section">
            <div className="container">
                <div className='product-details-grid'>
                    <div id="product-item-1"> <img src={item.imageName} alt={item.name} /></div>
                    <div id="product-item-2"><img src={item.imageName} alt={item.name} /></div>
                    <div id="product-item-3"><img src={item.imageName} alt={item.name} /></div>
                    <div id="product-item-4"><img src={item.imageName} alt={item.name} /></div>
                    <div id="product-item-5">
                        <div className="product-details">
                            <div className="product-title">
                                <h1>{item.name}</h1>
                                <div className="product-sku">
                                    <span>SKU: 12345670</span>
                                    <span>BRAND: The Northland</span>
                                </div>
                                <div className="product-rating">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <div className="product-price">
                                    <p>$35.00</p>
                                </div>
                                <div className="product-description">
                                    Discovered had get considered projection who favourable. Necessary up knowledge it tolerably.
                                    Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir
                                    deficient curiosity instantly. (<NavLink to="/">read more</NavLink>)
                                </div>
                            </div>
                            <div className='product-selector'>
                                <div className="size-selector">
                                    <span className="selector-label">Size:</span>
                                    <div className="size-option">S</div>
                                    <div className="size-option">M</div>
                                    <div className="size-option">L</div>
                                    <div className="size-option">X</div>
                                </div>
                                <div className="color-selector">
                                    <span className="selector-label">Color:</span>
                                    <select name="color-option">
                                        <option value="black">Black</option>
                                        <option value="white">White</option>
                                        <option value="red">Red</option>
                                        <option value="blue">Blue</option>
                                    </select>
                                </div>
                                <div className='quantity-selector'>
                                    <span className="selector-label">Qty:</span>
                                    <div className='qty-info-quantity-box'>
                                        <button className="qty-decr" onClick={() => decrementQuantity(item)}>-
                                        </button>
                                        <span className='return-qty'>{item.quantity}1</span>
                                        <button className="qty-incr" onClick={() => incrementQuantity(item)}>+
                                        </button>
                                    </div>
                                    <button className="product-card-btn">ADD TO CART</button>
                                </div>
                            </div>
                            <ul className='social-media-list'>
                                <span className="selector-label">Share:</span>
                                <li><ExternalLink link="https://facebook.com/" icon="fa-brands fa-facebook-f" /></li>
                                <li><ExternalLink link="https://instagram.com/" icon="fa-brands fa-instagram" /></li>
                                <li><ExternalLink link="https://google.com/" icon="fa-brands fa-google" /></li>
                                <li><ExternalLink link="https://linkedin.com/" icon="fa-brands fa-linkedin" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="product-full-details">
                    <ul className='product-detailed-list'>
                        <NavLink to="/"><li>Description</li></NavLink>
                        <NavLink to="/"><li>Additional</li></NavLink>
                        <NavLink to="/"><li>Shopping & Returns </li></NavLink>
                        <NavLink to="/"><li>Reviews</li></NavLink>
                    </ul>
                    <div className='product-detailed-info'>
                        <p>Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far.
                            Sir joy northward sportsmen education.Discovery incommode earnestly no he commanded if.Put still any about manor heard.
                        </p>
                        <ul>
                            <li>Village did removed enjoyed explain nor ham saw calling talking.</li>
                            <li>Securing as informed declared or margaret.</li>
                            <li>Joy horrible moreover man feelings own shy.</li>
                        </ul>
                        <p>On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ProductDetails