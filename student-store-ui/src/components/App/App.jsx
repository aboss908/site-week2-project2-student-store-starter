import * as React from "react"
import { BrowserRouter } from 'react-router-dom'
import { useState, useEffect } from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"

export default function App() {
  const[products, setProducts] = useState([])
  const[isFetching, setFetching] = useState(false)
  const[error, setError] = useState("")
  const[isOpen, setOpen] = useState(false)
  const[shoppingCart, setShoppingCart] = useState([])

  async function getAPIRequest() {
    const data = await fetch('https://codepath-store-api.herokuapp.com/store')
    const dataJSON = await data.json();
    return dataJSON;
  }

  useEffect(() => {
    getAPIRequest().then((list) => setProducts(list["products"]))
    setFetching(true);
  },[])

  const handleItemToCart = function () {

  }

  const handleRemoveItemToCart = function () {
    
  }

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar />
          <Home products = {products} setProducts = {setProducts} 
          handleItemToCart = {handleItemToCart} 
          handleRemoveItemToCart = {handleRemoveItemToCart}/>
        </main>
      </BrowserRouter>
    </div>
  )
}
