import React,{useState,useEffect} from 'react'
import Product from '../products/Product'
import Data from '../data/Datas';
import './shop.css';
import Cart from '../cart/Cart';

function Shop(){
    const first = Data.slice(10,22);
    const [data,setData]=useState([]);
    const [cart,setCart]=useState([]);
    const addtoCart =(product) =>{
        const newCart =[...cart,product];
        setCart(newCart)
    }

    return (
        <div className="shop-container">
            <div className="product-part">
            {
                first.map(product =><Product
                key ={product.key}
                name ={product.name}
                img  = {product.img}
                category ={product.category}
                stock = {product.stock}
                price ={product.wholePrice}
                url ={product.url}
                addtoCart ={product.addtoCart}
                ></Product>)
            }
            </div>
            <div className="cart-part">
                <Cart></Cart>
            </div>
        </div>
    )
}

export default Shop
