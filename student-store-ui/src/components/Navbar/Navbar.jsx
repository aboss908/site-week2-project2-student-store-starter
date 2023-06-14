import * as React from "react"
import "./Navbar.css"
import logo from "../../assets/codepath.jpg"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div class = "container">
        <img className = "logo" src={logo}/>
        <NavbarLink name= "Home"/>
        <NavbarLink name= "About Us"/>
        <NavbarLink name= "Contact Us"/>
        <NavbarLink name= "Buy Now"/>
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
