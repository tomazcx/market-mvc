const express = require("express")
const router = express.Router()
const ProductController = require("../controllers/ProductController.js")

router.get("/", ProductController.showAll)
router.get("/register", ProductController.formRegister)
router.get("/product/:id", ProductController.showOne)
router.get("/edit/:id", ProductController.formEdit)

router.post("/register", ProductController.registerProduct)
router.post("/edit/:id", ProductController.editProduct)
router.post("/delete", ProductController.delete)

module.exports = router