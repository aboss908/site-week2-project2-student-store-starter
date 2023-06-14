import * as React from "react"
import "./ProductCard.css"

export default function ProductCard(props) {
    return (
        <div class="product-card" id = {props.item.id}>
            <img className = "product-image" src={props.item.image}/>
            <div className = "container">
                <div className = "product-info">
                    <p id="product-name"> {props.item.name} </p>
                    <p id = "stars">⭐⭐⭐⭐⭐</p>
                    <p id="product-price"> {`$` + props.item.price.toFixed(2)} </p>
                </div>
                <div className = "buttons">
                    <button className = "add" id="button-icon"> + </button>
                    <button className = "remove" id="button-icon"> − </button>
                    <p id = "count"> 0 </p>
                </div>
            </div>
        </div>
    )
}