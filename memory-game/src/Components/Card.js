import React from "react"

export default function Card(props){
    return(
        <div className="card"  onClick={props.handleClick}>
            <img id={props.title} src={props.src} alt={props.title}></img>
        </div>
    )
}