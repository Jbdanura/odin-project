import React from "react";
import "./home.css"
import { Link } from "react-router-dom";

function Home(){
    return(
        <div className="home">
            <Link className="home-store" to="/store"><button >Shop now</button></Link>
        </div>
    )
}
export default Home
