import * as React from "react"
import Hero from "../Hero/Hero.jsx"
import ProductGrid from "../ProductGrid/ProductGrid.jsx"
import "./Home.css"

export default function Home(props) {
  return (
    <div className="home">
      <Hero/>

      <ProductGrid products = {props.products} setProducts = {props.setProducts} 
      handleItemToCart = {props.handleItemToCart} 
      handleRemoveItemToCart = {props.handleRemoveItemToCart}/>

      <br/>
      
    </div>
  )
}
