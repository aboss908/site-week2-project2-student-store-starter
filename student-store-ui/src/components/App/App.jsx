import * as React from "react"
import { useState, useEffect } from "react"
import { Routes, Route } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductView from "../ProductView/ProductView"
import "./App.css"

export default function App() {
  const[allProducts, setAllProducts] = useState([])
  const[products, setProducts] = useState([])
  const[isFetching, setFetching] = useState(false)
  const[category, setCategory] = useState("")
  const[searchQuery, setSearchQuery] = useState("")
  const[error, setError] = useState("")
  const[isOpen, setOpen] = useState(false)
  const[isEmpty, setEmpty] = useState(true)
  const[shoppingCart, setShoppingCart] = useState([])
  const[totalPrice, setTotalPrice] = useState(0)

  async function getAPIRequest() {
    try {
      if(!isFetching) {
        setFetching(true)
      }
      const data = await fetch('http://localhost:3001/store')
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
    let item = null
    newThing.forEach((element) => {
      if (element.id == event.target.className) {
        element.quantity++
        setTotalPrice(totalPrice + element.price)
        item = element
      }
    })
    setAllProducts(newThing)

    // Add to shopping cart here
    let shopping = [...shoppingCart]
    let exists = false
    shopping.forEach((element) => {
      if (element.id == event.target.className) {
        exists = true
      }
    })

    if (!exists) {
      shopping.push(item)
      setShoppingCart(shopping)
    }
  }

  const handleRemoveItemToCart = function (event) {
    let itemIsGone = false
    let newThing = [...allProducts]
    newThing.forEach((element) => {
      if (element.id == event.target.className) {
        if (element.quantity > 0) {
          element.quantity--
          setTotalPrice(totalPrice - element.price)
          if (element.quantity == 0) {
            itemIsGone = true
          }
        }
      }
    })
    setAllProducts(newThing)

    // Remove from shopping cart here
    if (itemIsGone) {
      let shopping = [...shoppingCart]
      let itemToRemove = null
      let exists = false
      shopping.forEach((element) => {
        if (element.id == event.target.className) {
          exists = true
          itemToRemove = element
        }
      })
  
      if (exists) {
        let removed = shopping.filter((element) => {
          return element != itemToRemove
        })
        setShoppingCart(removed)
      }
    } 
  }

  const searchItem = function(event) {
    setSearchQuery(event.target.value)
  }

  const openCart = function() {
    setOpen(!isOpen)
  }

  return (
    <div className="app">
        <main>
          <Navbar />
          <Sidebar 
            allProducts = {allProducts}
            setAllProducts = {setAllProducts}
            isOpen = {isOpen} 
            openCart = {openCart} 
            shoppingCart = {shoppingCart} 
            setShoppingCart = {setShoppingCart} 
            totalPrice = {totalPrice} 
            setTotalPrice = {setTotalPrice}
            isEmpty = {isEmpty}
            setEmpty = {setEmpty}/>
                   
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

              <Route path = {"/product/id/:productID"} element = 
              {<ProductView products = {products} 
                setFetching = {setFetching}
                setError = {setError}/>}/>

              <Route path = {"*"} element = {<div className = "ERROR"> 404 ERROR NOT FOUND </div>}/>
              
          </Routes>
        </main>
    </div>
  )
}
