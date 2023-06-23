const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const routes = require("./routes/store.js")
const routesOrders = require("./routes/orders.js")
const app = express()
const { NotFoundError } = require("./utils/errors.js") 

app.use(cors())
app.use(express.json())
app.use(morgan("tiny"))

app.use("/store", routes)
app.use("/orders", routesOrders)

app.use((req,res,next) => {
    return next(new NotFoundError())
})

app.use((error, req, res, next) => {
    let eMessage = error.message ? error.message: "Server Error"
    let eStatus = error.status ? error.status: 500

    res.status(eStatus).json({
        eMessage, eStatus
    })
})

module.exports = app