import * as React from "react"
import ProductCard from "../ProductCard/ProductCard.jsx"
import "./ProductGrid.css"

export default function ProductGrid(props) {
    return (
        <div className = "product-grid-container">
            {props.products.map((item, index) => {
                return <ProductCard key = {item + index} item = {item} products = {props.products} 
                setProducts = {props.setProducts} handleItemToCart = {props.handleItemToCart} 
                handleRemoveItemToCart = {props.handleRemoveItemToCart}/>
            })}
        </div>
    )
}