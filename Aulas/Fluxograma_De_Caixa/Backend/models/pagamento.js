const mongoose = require('mongoose')


//Esse codigo criaa um banco de dados com esses formato no momgoDb

const pagamentoSchema = mongoose.Schema({
    descicao: {type: String, required: true},
    dataPagamento: {type: Date, required: true},
    tipoPagamento: {type: String, required: true},
    valorPagamento: {type: Number, required: true}
})

const pagamento = mongoose.model('pagamentp', pagamentoSchema)

module.exports = pagamento