import * as React from "react"
import Hero from "../Hero/Hero.jsx"
import ProductGrid from "../ProductGrid/ProductGrid.jsx"
import logo from "../../assets/codepath.jpg"
import "./Home.css"

export default function Home(props) {

  const changeCategory = function(event) {
    let filteredProducts = [...props.allProducts]
    props.setCategory(event.target.id)

    if (event.target.id == "all") {
      filteredProducts = props.allProducts
    } else {
      filteredProducts = props.allProducts.filter((element) => {
        return element.category == event.target.id + ""
      })
    }

    props.setProducts(filteredProducts)
  }

  return (
    <div className="home">
        <Hero/>

        <form id="search-form">
            <input id = "search-bar" type = "text" value = {props.searchQuery} placeholder="Search" onChange = {props.searchItem}/>
            <button id = "search-icon" onClick = {(e) => {e.preventDefault()}}> 🔍</button>
        </form>

        <div className = "categories">
          <button className = "category-button" id = "all" onClick = {changeCategory}> All Categories </button>
          <button className = "category-button" id = "clothing" onClick = {changeCategory}> Clothing </button>
          <button className = "category-button" id = "food" onClick = {changeCategory}> Food </button>
          <button className = "category-button" id = "accessories" onClick = {changeCategory}> Accessories </button>
          <button className = "category-button" id = "tech" onClick = {changeCategory}> Tech </button>
        </div>

        <ProductGrid
          products = {props.products} 
          category = {props.category} 
          setProducts = {props.setProducts} 
          handleItemToCart = {props.handleItemToCart} 
          handleRemoveItemToCart = {props.handleRemoveItemToCart}/>

        <AboutUs/>
        <Contact/>
        <Footer/>

    </div>
  )
}

export function AboutUs() {
  return (
    <div className = "about-container">
      <p id = "about-us"> About Us </p>
      <div className = "info-container">
        <div className = "about-info">
          We offer the best products imaginable, at the lowest of prices! 
          Notice that we're constantly updating our prices at a low cost.
          <br/>
          <br/>
          All proceeds will be going to charity. We're not in it to make a profit. 
          We're in it to give back to the community. 
          This store won't last for long, but everyone will remember it.
          <br/>
          <br/>
          Items in this store are selected directly from feedback of students 
          around multiple campuses around the world. If you think your item is 
          missing from this drop, wait for the next drop!
        </div>
        <div className = "about-logo">
          <img id ="codepathlogo" src= {logo} alt="logo"/>
        </div>
      </div>
    </div>
  )
}

export function Contact() {
  return (
    <div className = "about-container">
      <p id = "about-us"> Contact Us </p>
      <div className = "info-container">
        <div className = "contact-info">
          Email: abbasstore@gmail.com
          <br/>
          <br/>
          Phone: (301)-203-1218
          <br/>
          <br/>
          Address: 123 Something Blvd, Maryland
          <br/>
          <br/>
          Socials: Twitter, Instagram, Youtube
          <br/>
          <br/>
        </div>
        <div className = "about-logo">
          <img id ="codepathlogo" src= {logo} alt="logo"/>
        </div>
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <footer class = "footer-bottom">
      <div class = "footer-container">

        <div class="footer-item"> 
          <span id = "footer-top"> Categories </span>
          <ul class ="footer-list">
            <li>All Categories</li>
            <li>Clothing</li>
            <li>Food</li>
            <li>Accessories</li>
            <li>Tech</li>
          </ul>
        </div>

        <div class="footer-item"> 
          <span id = "footer-top"> Company </span>
            <ul class ="footer-list">
              <li>About Us</li>
              <li>Find a Store</li>
              <li>Terms</li>
              <li>Sitemap</li>
              <li>Careers</li>
          </ul>
        </div>

        <div class="footer-item"> 
          <span id = "footer-top"> Support </span>
            <ul class ="footer-list">
              <li>Contact Us</li>
              <li>Money Refund</li>
              <li>Order Status</li>
              <li>Shipping Info</li>
              <li>Open Dispute</li>
          </ul>
        </div>

        <div class="footer-item"> 
          <span id = "footer-top"> Account </span>
            <ul class ="footer-list">
              <li>Login</li>
              <li>Register</li>
              <li>Account Setting</li>
              <li>My Orders</li>
          </ul>
        </div>

        <div class="footer-item"> 
          <span id = "footer-top"> Socials </span>
            <ul class ="footer-list">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
              <li>YouTube</li>
          </ul>
        </div>

        <div class="footer-item"> 
          <span id = "footer-top"> Our App </span>
            <ul class ="footer-list">
          </ul>
        </div>

      </div>

      <br/>
      <hr/>
      <br/>
    </footer>
  )
}
