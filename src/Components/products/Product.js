import React from 'react'
import './product.css';


function Product(props) {
    return (
        <div className ="product-container">
            <div className="product-images">
                <img src={props.img} alt="productImage" />
            </div>
            <div className="product-datas">
            <h3>{props.name}</h3>
            <h4>${props.price}</h4>
            <h4>{props.category}</h4>
            <h4>In Stock:{props.stock}</h4>
            <button onClick ={props.addtoCart} className="product-btns">Buy Now</button>
            </div>
            
            
            
        </div>
    )
}

export default Product
