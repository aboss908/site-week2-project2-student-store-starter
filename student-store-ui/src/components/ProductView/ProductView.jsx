import * as React from "react"
import {useParams} from "react-router-dom"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import "./ProductView.css"

export default function ProductView(props) {
    const[product, setProduct] = useState([])
    const params = useParams()
    const id = params.productID

    async function grabItem(id) {
        try {
            props.setFetching(true)
            let data = await fetch(`http://localhost:3001/store/${id}`)
            let formattedData = await data.json()
            return formattedData
        } catch (error) {
            props.setError(error)
        } finally {
            props.setFetching(false)
        }
    }

    useEffect(() => {
        grabItem(id).then((item) => {
            setProduct(item)
        })
    }, [])

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