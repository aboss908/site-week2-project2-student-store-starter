const express = require("express")
const router = express.Router()
const Store = require("../models/store.js")
const { BadRequestError } = require("../utils/errors.js")

// GET REQUESTS

router.get("/:id", async (req, res, next) => {
    try {
        if (isNaN(req.params.id)) {
            return next(new BadRequestError("Expected a valid ID number: Didn't get one"))
        }
        let item = await Store.retrieveProduct(req.params.id)
        res.status(200).send(item)
    } catch(error) {
        next(error)
    }
})

router.get("/", async (req, res, next) => {
    try {
        let allItems = await Store.retrieveAll()
        res.status(200).send(allItems)
    } catch(error) {
        next(error)
    }
})

// POST REQUESTS

router.post("/", async (req, res, next) => {
    try {
        let cart = req.body.shoppingCart
        let user = req.body.user
        let name = req.body.user.name
        let email = req.body.user.email

        if (!cart || !user) {
            return next(new BadRequestError("Cart or user doesn't exist"))
        }
        if (cart.length == 0) {
            return next(new BadRequestError("Cart is empty"))
        }
        if (name == "" || email == "") {
            return next(new BadRequestError("Name or email is empty. Please use a valid name and email."))
        }

        // Purchase object
        let purchaseOrder = await Store.createPurchaseOrder(cart, name, email)

        // After purchase order was created without problems, add it to the database.
        Store.setToDatabase(purchaseOrder)
        res.status(201).json({purchase: purchaseOrder})
    } catch(error) {
        next(error)
    }
})

module.exports = router