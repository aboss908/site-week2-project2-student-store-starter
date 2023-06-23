import * as React from "react"
import { useState } from "react"
import shoppingIcon from "../../assets/shopping-icon.png"
import axios from "axios"
import "./Sidebar.css"
import Cart from "../Cart/Cart"

export default function Sidebar(props) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [checkTerms, setCheckTerms] = useState(false)
  const [checkedOut, setCheckedOut] = useState(false)
  const [receipt, setReceipt] = useState({})

  const handleOnChange = function (event) {
    if (event.target.id == "name") {
      setName(event.target.value)
    } else if (event.target.id == "email") {
      setEmail(event.target.value)
    } else {
      setCheckTerms(event.target.checked)
    }
  }

  async function handleSubmit(event) {
    event.preventDefault()
    let length = props.shoppingCart.length
    if (name != "" && email != "" && checkTerms && length > 0) {

      let response = await axios.post("http://localhost:3001/store", {
        shoppingCart: props.shoppingCart,
        user: { name: name, email: email },
      })

      setReceipt(response.data.purchase)
      setCheckedOut(true)

      props.allProducts.forEach((element) => {
        element.quantity = 0
      })

      props.setShoppingCart([])
      props.setTotalPrice(0)
      resetInputs()

    } else {
      alert(
        "Please ensure that your inputs are not empty, and that the terms and conditions are checked off. Moreover, please ensure that you have items to checkout."
      )
    }
  }

  async function resetInputs() {
    setName("")
    setEmail("")
  }

  function resetReceipt() {
    setCheckedOut(!checkedOut)
  }

  return (
    <section className={props.isOpen ? "sidebar opened" : "sidebar"}>
      <button id="open-button" onClick={props.openCart}>
        <img className="icon" src={shoppingIcon} /> {"➜"}{" "}
      </button>

      <Cart
        isOpen={props.isOpen}
        shoppingCart={props.shoppingCart}
        totalPrice={props.totalPrice}
        isEmpty={props.shoppingCart.length == 0}
        setEmpty={props.setEmpty}
      />

      <form className={props.isOpen ? "checkout-form" : "checkout-form hidden"}>
        <div>
          <p id="info-label">Name </p>
          <input
            className="inputs"
            type="text"
            id="name"
            placeholder="Name"
            value={name}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <p id="info-label"> Email </p>
          <input
            className="inputs"
            type="text"
            id="email"
            placeholder="Email"
            value={email}
            onChange={handleOnChange}
          />
        </div>
        <div className="terms-container">
          <input id="terms" type="checkbox" checked = {checkTerms} onChange={() => {
            setCheckTerms(!checkTerms)
            handleOnChange}} />
          <p id="terms-text"> I agree to the terms and conditions </p>
        </div>
        <br />
        <div>
          <input
            id="submit-button"
            type="submit"
            onClick={handleSubmit}
            value={"Checkout"}
          />
        </div>
      </form>

      <div className={props.isOpen && checkedOut ? "receipt" : "receipt hidden"}>
        <h3>Receipt:</h3>

        <p>A purchase of ${receipt?.total} has been made to {receipt?.name} at {receipt.email}</p>

        <p>The purchase includes the following:</p>

        <ul>
          {receipt?.order?.map((element, index) => {
            return (
              <li key={element + index}>
                {element.quantity} {element.name} for ${(element.price * element.quantity).toFixed(2)}
              </li>
            )
          })}
        </ul>

        <p>Before taxes, the subtotal was ${receipt?.subtotal?.toFixed(2)}</p>

        <p>Total is ${receipt?.total} after taxes and fees have been applied</p>

        <button className="exit-button" onClick={resetReceipt}> Exit </button>
      </div>
    </section>
  )
}
