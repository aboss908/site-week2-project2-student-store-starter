import * as React from "react"
import "./ProductCard.css"
import { useState } from "react"

export default function ProductCard(props) {

    const handleClickAdd = function(event) {
        props.handleItemToCart(event)
    }

    const handleClickRemove = function(event) {
        if (props.quantity > 0) {
            props.handleRemoveItemToCart(event)
        }
    }

    return (
        <div className="product-card" id = {props.item.id}>
            <img className = "product-image" src={props.item.image}/>
            <div className = "container">
                <div className = "product-info">
                    <p id="product-name"> {props.item.name} </p>
                    <p id = "stars">⭐⭐⭐⭐⭐</p>
                    <p id="product-price"> {`$` + props.item.price.toFixed(2)} </p>
                </div>
                <div className = "buttons">
                    <button className = {`${props.item.id}`} id="button-icon" onClick = {handleClickAdd}> + </button>
                    <button className = {`${props.item.id}`} id="button-icon" onClick = {handleClickRemove}> − </button>
                    <p id = "count">{props.quantity}</p>
                </div>
            </div>
        </div>
    )
}