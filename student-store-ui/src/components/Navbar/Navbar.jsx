import * as React from "react"
import "./Navbar.css"
import logo from "../../assets/codepath.jpg"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div class = "container">
        <img className = "logo" src={logo}/>
        <Link className ="link" to ="/"> 
        <NavbarLink name= "Home"/>
        </Link>

        <Link className ="link" to ="/"> 
        <NavbarLink name= "About Us"/>
        </Link>

        <Link className ="link" to ="/"> 
        <NavbarLink name= "Contact Us"/>
        </Link>
        
        <Link className ="link" to ="/"> 
        <NavbarLink name= "Buy Now"/>
        </Link>
      </div>
    </nav>
  )
}

export function NavbarLink(props) {
  return (
    <div>
      <p className = "navbar-link"> {props.name} </p>
    </div>
  )
}
