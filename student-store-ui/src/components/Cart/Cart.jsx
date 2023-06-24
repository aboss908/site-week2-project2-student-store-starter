import * as React from "react"
import "./Cart.css"

export default function Cart(props) {
  let subtotal = props.totalPrice
  let taxes = props.totalPrice * 0.0875
  let total = parseFloat(subtotal + taxes)
  return (
    <div className={props.isOpen ? "cart" : "cart hidden"}>
      <h1 className="cart-title">SHOPPING CART</h1>
      {props.isEmpty ? (
        <div>
          <p id="empty">
            ✖ <br /> Your cart is currently empty. <br />
            Select any item you'd like to purchase.
          </p>
        </div>
      ) : (
        <table id="cart-table">
          <thead>
            <tr className="table-row">
              <td> Photo </td>
              <td> Item </td>
              <td> Price </td>
              <td> Quantity </td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <hr id="divider"/>
              </td>
            </tr>
          </tbody>

          {props.shoppingCart.map((element, index) => {
            return (
              <tbody key={element + index}>
                <tr>
                  <td>
                    
                    <img id="cart-image" src={element.image} />
                  </td>
                  <td>
                    
                    <p> {`${element.name}`} </p>
                  </td>
                  <td>
                    
                    <p> {`$${element.price.toFixed(2)}`} </p>
                  </td>
                  <td>
                    
                    <p> {`${element.quantity}`} </p>
                  </td>
                </tr>
              </tbody>
            )
          })}

          <tbody>
            <tr>
              <td>
                <hr id="divider"/>
              </td>
            </tr>
          </tbody>

          <tbody className="totals">
            <tr>
              <td>
                <h2 className="cart-item">
                  
                  Subtotal: {`$${subtotal.toFixed(2)}`}
                </h2>
              </td>
            </tr>
            <tr>
              <td>
                <h2 className="cart-item"> Tax: {`$${taxes.toFixed(2)}`} </h2>
              </td>
            </tr>
            <tr>
              <td>
                <h2 className="cart-item"> Total: {`$${total.toFixed(2)}`} </h2>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  )
}
