import React from 'react'
import  logo from '../../images/logo.png';
import './header.css';
function Header() {
    return (
        <div className="container">
                <img src={logo} alt="logo" />
    
                <div className="navs">
                    <nav>
                        <a href ="/home">Home</a>
                        <a href ="/shop">Shop</a>
                        <a href ="/product">Product</a>
                        <a href ="/cart">Cart</a>
                    </nav>
                </div>

        </div>
    )
}

export default Header


