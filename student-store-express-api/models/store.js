const Storage = require("../data/storage.js")
const store = Storage["storage"]
const { BadRequestError } = require("../utils/errors.js") 

class Store {

    static async retrieveAll() {
        const list = store.get("products").value()
        let allProducts = {products: list}
        return JSON.stringify(allProducts)
    }

    static async retrieveProduct(id) {
        let holder = store.get("products").value()
        let foundElement = null
        holder.forEach((element) => {
            if (element.id == id) {
                foundElement = element
            }
        })
        if (!foundElement) {
            throw new BadRequestError("ID does not exist")
        }
        return foundElement
    }

    static async createPurchaseOrder(cart, name, email) {
        let currentID = store.get("purchases").value().length
        let checker = []

        let subtotal = 0.0
        let purchase = {id: (currentID + 1), 
                        name: name,
                        email: email,
                        order: cart,
                        subtotal: 0.0,
                        total: 0.0,
                        taxes: 0.0,
                        createdAt: new Date()}

        cart.forEach((element) => {
            if (!element.id || !element.quantity) {
                throw new BadRequestError("Element doesn't have an ID or quantity.")
            }
            if (checker.includes(element.name)) {
                throw new BadRequestError("Duplicate element")
            }
            subtotal += parseFloat((element.price * element.quantity).toFixed(2))
            checker.push(element.name)
        })

        let tax = parseFloat((subtotal * .0875).toFixed(2))
        purchase.taxes = tax
        purchase.subtotal = parseFloat(subtotal.toFixed(2))
        purchase.total = parseFloat((subtotal + tax).toFixed(2))

        return purchase
    }

    static async setToDatabase(purchaseOrder) {
        let final = JSON.parse(JSON.stringify(purchaseOrder))
        let current = [...store.get("purchases").value()]
        current.push(final)
        store.set("purchases", current).write()
    }
    
}

module.exports = Store