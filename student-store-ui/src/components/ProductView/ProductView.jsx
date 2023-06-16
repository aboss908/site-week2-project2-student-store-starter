import * as React from "react"
import {useParams} from "react-router-dom"
import { Link } from "react-router-dom"
import "./ProductView.css"

export default function ProductView(props) {
    const params = useParams()
    let id = params.productID
    let product = null
    let products = props.products

    product = products.filter((element) => {
        return element.id == id
    })

    product = product ? product[0]: null

    return (
        <div className="view-container">
            <div>
                <div>
                    <Link className = "back-home" to="/"> Back Home </Link>
                </div>

                <img id = "image-photo" src = {product.image}/>

                <div className = "product-name">
                    <p id="product-name-view"> {product.name} </p>
                </div>

                <div className = "product-description">
                    <p id="product-description"> {product.description} </p>
                </div>
            </div>
        </div>
    )
}