const Storage = require("../data/storage.js")
const store = Storage["storage"]
const { BadRequestError } = require("../utils/errors.js") 

class Order {

    static async retrieveAll() {
        const list = store.get("purchases").value()
        let allProducts = {purchases: list}
        return JSON.stringify(allProducts)
    }

    static async retrieveProduct(id) {
        let holder = store.get("purchases").value()
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
    
}

module.exports = Order