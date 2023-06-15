import * as React from "react"
import { useState, useEffect } from "react"
import { Routes, Route } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"

export default function App() {
  const[allProducts, setAllProducts] = useState([])
  const[products, setProducts] = useState([])
  const[isFetching, setFetching] = useState(false)
  const[category, setCategory] = useState("")
  const[searchQuery, setSearchQuery] = useState("")
  const[error, setError] = useState("")
  const[isOpen, setOpen] = useState(false)
  const[shoppingCart, setShoppingCart] = useState([])

  async function getAPIRequest() {
    try {
      if(!isFetching) {
        setFetching(true)
      }
      const data = await fetch('https://codepath-store-api.herokuapp.com/store')
      const dataJSON = await data.json()
      return dataJSON
    } catch (err) {
      setError(err)
      console.log(error)
    } finally {
      setFetching(false)
    }
  }

  useEffect(() => {
    getAPIRequest().then((list) => {
    list["products"].forEach((element) => {
      element.quantity = 0
    })
    setProducts(list["products"])
    setAllProducts(list["products"])
    })
  },[])

  useEffect(() => {
    let filteredProducts = [...allProducts]

    if (searchQuery == "") {
      console.log(allProducts)
      filteredProducts = allProducts
    } else {
      filteredProducts = filteredProducts.filter((element) => {
        return element.name.toLowerCase().includes(`${searchQuery}`.toLowerCase())
      })
    }

    setProducts(filteredProducts)
  },[searchQuery])

  const handleItemToCart = function (event) {
    let newThing = [...allProducts]
    newThing.forEach((element) => {
      if (element.id == event.target.className) {
        element.quantity++
      }
    })
    setAllProducts(newThing)
    // Add to shopping cart here
  }

  const handleRemoveItemToCart = function (event) {
    let newThing = [...allProducts]
    newThing.forEach((element) => {
      if (element.id == event.target.className) {
        if (element.quantity > 0) {
          element.quantity--
        }
      }
    })
    setAllProducts(newThing)
    // Remove from shopping cart here
  }

  const searchItem = function(event) {
    setSearchQuery(event.target.value)
  }

  return (
    <div className="app">
        <main>
          <Navbar />
          <Sidebar />

          <Routes>
            <Route path = "/" element = 
            {<Home 
              products = {products} 
              category = {category} 
              setCategory = {setCategory} 
              setProducts = {setProducts} 
              handleItemToCart = {handleItemToCart} 
              handleRemoveItemToCart = {handleRemoveItemToCart} 
              allProducts = {allProducts} 
              setAllProducts = {setAllProducts} 
              searchQuery = {searchQuery} 
              setSearchQuery = {setSearchQuery}
              searchItem = {searchItem}/>}/>
          </Routes>
        </main>
    </div>
  )
}
