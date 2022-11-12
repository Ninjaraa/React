import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '../components/MenuIcon'
import { useShoppingCart } from '../contexts/ShoppingCartContext'

const MainMenuSection = () => {
    const [showMenu, setShowMenu] = useState(false)
    const { cartQuantity } = useShoppingCart()

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <nav className="mainmenu container">
            <NavLink className="logo" to="/" end>Fixxo.</NavLink>
            <div className={`menu-links ${showMenu ? "d-grid" : ""}`}>
                <NavLink className="menu-link" to="/" end>Home</NavLink>
                <NavLink className="menu-link" to="/categories" end>Categories</NavLink>
                <NavLink className="menu-link" to="/products" end>Products</NavLink>
                <NavLink className="menu-link" to="/contacts" end>Contacts</NavLink>
            </div>
            <div className="menu-icons">
                <MenuIcon link="/search" icon="fa-regular fa-magnifying-glass" />
                <MenuIcon hideOnMobile={true} link="/compare" icon="fa-regular fa-code-compare fa-flip-horizontal" />
                <MenuIcon hideOnMobile={true} quantity={cartQuantity} link="/wishlist" icon="fa-regular fa-heart" />
                <button className="menu-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCartLabel">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">{cartQuantity}</span>
                    <i className="fa-regular fa-bag-shopping"></i>
                </button>
                <button onClick={toggleMenu} className="d-xl-none menu-icon btn-menu-icon"><i className="fa-regular fa-bars"></i></button>
            </div>
        </nav>
    )
}

export default MainMenuSection