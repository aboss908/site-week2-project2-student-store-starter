const express = require("express")
const router = express.Router()
const Order = require("../models/orders.js")
const { BadRequestError } = require("../utils/errors.js")

// GET REQUESTS

router.get("/:id", async (req, res, next) => {
    try {
        if (isNaN(req.params.id)) {
            return next(new BadRequestError("Expected a valid ID number: Didn't get one"))
        }
        let item = await Order.retrieveProduct(req.params.id)
        res.status(200).send(item)
    } catch(error) {
        next(error)
    }
})

router.get("/", async (req, res, next) => {
    try {
        let allItems = await Order.retrieveAll()
        res.status(200).send(allItems)
    } catch(error) {
        next(error)
    }
})

module.exports = router