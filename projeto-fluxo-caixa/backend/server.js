const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config();

const app = express()
const db_user = process.env.DB_USER;
const db_Senha = process.env.DB_SENHA;

const port = 8750
const connectionString = `mongodb+srv://${db_user}:${db_Senha}@kapela.ydjaj.mongodb.net/?retryWrites=true&w=majority&appName=kapela`;
const Pagamento = require('./models/pagamento')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.get("/listar-saldo-consolidado", async (req, res) => {
    try {
        let dataReferencia = (req.query.dataReferencia)

        let pagamentos = await Pagamento.find({ dataPagamento: dataReferencia })

        let saldoTotalDia = 0

        for (let pagamento of pagamentos) {
            saldoTotalDia += pagamento.valorPagamento
        }

        return res.status(200).json({ pagamentos, saldoTotalDia })
    } catch (error) {
        return res.status(500).json(error)
    }
})

app.get("/listar-pagamentos", async (req, res) => {
    try {
        let pagamentos = await Pagamento.find()
        return res.status(200).json(pagamentos)
    } catch (error) {
        return res.status(500).json(error)
    }
})

app.post("/cadastrar-pagamento", async (req, res) => {
    let pagamento = { ...req.body }


    let pagamentoValido = pagamento.tipoPagamento.toUpperCase() != 'C' && pagamento.tipoPagamento.toUpperCase() != "D"

    if (pagamentoValido) {
        return res.status(400).json('pagamento invalido')
    }

    try {
        await Pagamento.create(pagamento)
        return res.status(201).json("Pagamento cadastrado com sucesso!")
    } catch (error) {
        return res.status(500).json(error)
    }
})


mongoose.connect(connectionString, {
    dbName: "DevsSupermarket"
}).then(() => {
    console.log("banco conectado meu kaza") 
    console.log(`Listening on http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})
