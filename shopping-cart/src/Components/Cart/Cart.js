import React from "react";
import "./cart.css"

const Cart = ({products,handleAddQuantity,handleRemoveQuantity}) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i].price * products[i].quantity
    }
    return(
        <div className="cart">
            <p className="cart-title">Cart items</p>
            {products.length === 0 && <p className="cart-no-items">No items added to cart</p>}
            {products.map(product => {
                return (
                    <div className="cart-product" key={product.id}>
                        <img src={product.img} alt="component"></img>
                        <div>
                            <p className="cart-product-name">{product.brand} {product.name}</p>
                            <p className="cart-product-price">${product.price} {"=>"} ${product.price * product.quantity}</p>
                            <div className="cart-modify">
                                <button className="cart-product-add" onClick={() => handleAddQuantity(product)}>+</button>
                                <p className="cart-product-quantity">{product.quantity}</p>
                                <button className="cart-product-remove" onClick={() => handleRemoveQuantity(product)}>-</button>
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className="cart-checkout">
                <p className="cart-total">Total: ${total}</p>
                <button className="btn-checkout">Checkout</button>
            </div>
        </div>
    )
}
export default Cart