import React from 'react'
import './cart.css';

function cart() {
    return (
        <div className="cart-container">
            <h2>Cart Details</h2>
            <h4>All Product : </h4>
            <p>Total Price : </p>
            <p>Shipping Cost : </p>
            <p>Delivery Charge : </p>

            <button className="procced-btn">Procced To Next Step</button>
            
        </div>
    )
}

export default cart
