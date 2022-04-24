import React from "react";
import "./store.css"

export default function Store({products, handleAdd}){
    return(
        <div className="store-container">
            {products.map( (product) => {
                return <div className="product" key={product.id}>
                    <img className="product-image" alt="component" src={product.img}></img>
                    <p className="product-name">{product.brand} {product.name}</p>
                    <p className="product-price">${product.price}</p>
                    <button onClick={() => handleAdd(product)} className="product-add">Add to cart</button>
                </div>
            })}
        </div>

    )
}