import React, { useState }  from 'react'
import "./Navbar.css"
import {BrowserRouter as  Router, Routes, Route, BrowserRouter} from "react-router-dom"
import Home from '../Home'
import About from '../About'
import Skills from '../Skills'
import Contact from '../Contact'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [isShown, setIsShown] = useState(false)
    return (
    <nav >
        <BrowserRouter>
            <nav className="navbar">
                <h3>Logo</h3>
                <ul className={isShown ? "items-mobile" : "items"}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <a className="menu" onClick={() => setIsShown(!isShown)}>Menu</a>
            </nav>
            <Routes>
                <Route  path="/" element={   <Home />}>
                </Route>
                <Route path="/about" element={<About />}> 
                </Route>
                <Route  path="/skills" element={<Skills />}> 
                </Route>
                <Route  path="/contact" element={<Contact />}> 
                </Route>

            </Routes>
        </BrowserRouter>
    </nav>
    )
}

export default Navbar