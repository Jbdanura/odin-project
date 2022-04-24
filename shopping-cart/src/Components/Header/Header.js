import React from "react"
import {Link,Outlet} from "react-router-dom"
import "./Header.css"

function Header({quantity}){
    return(
        <>
        <header>
            <h1><Link to="/" className="logo">PC Components Store</Link></h1>
            <div className="header-links">
                <ul>
                    <li><Link to="/store">Store</Link></li>
                    <li><Link to="/cart"><i className="fa fa-shopping-cart">{quantity}</i></Link></li>
                </ul>
            </div>
        </header>
        <Outlet></Outlet>
        </>
    )
}

export default Header