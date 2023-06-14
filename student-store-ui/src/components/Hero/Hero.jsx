import * as React from "react"
import "./Hero.css"
import icon from "../../assets/icon.png"

export default function Hero() {
    return (
        <div className = "hero">
            <div className = "welcome"> 
                <h1> FIND WHAT YOU NEED! </h1>
                <p> Choose from a wide selection of items! <br/> Click on any item to add it to your shopping cart. </p>
            </div>
            <div className = "store-icon"> 
                <img id ="store-logo-icon" src={icon} alt ="store icon"/>
            </div>
        </div>
    )
}