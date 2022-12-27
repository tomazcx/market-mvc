const mongoose = require("mongoose")


const main = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/testemongoose')
        console.log("Conexão estabelecida")
    } catch (e) {
        console.log("Erro de conexão")
    }
}

main()

module.exports = mongoose