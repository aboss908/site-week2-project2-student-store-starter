import * as React from "react"
import { useState } from "react"
import "./Sidebar.css"

export default function Sidebar(props) {
  return (
    <section className={props.isOpen ? "sidebar opened": "sidebar"}>
      <button id = "open-button" onClick = {props.openCart}> {"→"} </button>

      <div class = {props.isOpen ? "cart": "cart hidden"}>
        <h1 className = "cart-item">SHOPPING CART:</h1>
        {props.shoppingCart.map((element) => {
          return <div>
                    <hr/>
                    <div className = "cart-item"> 
                      <p> {`${element.name}:`} </p>
                      <img id ="cart-image" src = {element.image}/>
                      <p> {`$${element.price.toFixed(2)}`} </p>
                      <p> {`QUANTITY: ${element.quantity}`} </p>
                    </div>
                </div>
        })}
        <hr/>
        <h1 className = "cart-item"> TOTAL: {`$${props.totalPrice.toFixed(2)}`} </h1>
      </div>
    </section>
  )
}
