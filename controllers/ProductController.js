const Product = require("../models/Product.js")

class ProductController {

    static async showAll(req, res) {

        const products = await Product.find().lean()

        res.render("products/all", { products })
    }

    static async showOne(req, res) {

        const productId = req.params.id
        const product = await Product.findById(productId).lean()

        res.render("products/product", { product })

    }

    static formRegister(req, res) {
        res.render("products/register")
    }

    static async registerProduct(req, res) {

        const title = req.body.title
        const price = req.body.price
        const img = req.body.img
        const description = req.body.description
        const category = req.body.category

        const productObj = new Product({ title, price, img, description, category })

        productObj.save()

        res.redirect("/")
    }

    static async formEdit(req, res) {

        const id = req.params.id
        const product = await Product.findById(id).lean()

        res.render("products/edit", { product })
    }

    static async editProduct(req, res) {

        const id = req.params.id

        const title = req.body.title
        const price = req.body.price
        const img = req.body.img
        const description = req.body.description
        const category = req.body.category

        await Product.updateOne({ id: id }, { title, price, img, description, category })

        res.redirect(`/product/${id}`)

    }

    static async delete(req, res) {
        const id = req.body.id

        await Product.deleteOne({ id: id })

        res.redirect("/")
    }

}

module.exports = ProductController