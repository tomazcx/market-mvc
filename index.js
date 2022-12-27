const express = require("express")
const exphbs = require("express-handlebars")
const app = express()
const conn = require("./db/conn.js")

const productsRouter = require("./routes/productsRoutes.js")

app.engine("handlebars", exphbs.engine())
app.set("view engine", "handlebars")

app.use(express.static("public"))

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.use("/", productsRouter)

app.listen(3000, () => console.log("Servidor iniciado em localhost:3000"))