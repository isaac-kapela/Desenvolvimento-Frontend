const mongoose = require ('mongoose')

const produtoSchema = mongoose.Schema({
    nome:{type: String, required: true},
    img:{ type: String, required: true},
    preco:{type: Number, required: true},
    descricao:{type:String, required: true}
})

const produto = mongoose.model('produtos', produtoSchema)

module.exports = produto