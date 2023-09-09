const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 8050;
const connectionString ="mongodb+srv://admin:admin123@appdatabase.ry0gm2w.mongodb.net/";
const pagamento = require("./models/pagamento");
const pagamento = require("./models/pagamento");
const pagamento = require("./models/pagamento");

app.use(express.json())

app.get("/listar-saldo-consolidado", async(req, res) => {
  
  try {
    
      let dataReferencia = req.query.dataReferencia
      let pagamentos = await pagamento.find({dataPagamento: dataReferencia});
      let saldoConsolidadoDoDia = 0

      for(let pagamento of pagamentos){
        saldoConsolidadoDoDia += pagamento.valorPagamento
      }

      return res.status(200).json({ pagamento, saldoConsolidadoDoDia})
  } catch (error) {
      return res.status(500).json(error)

  }
})

app.get("/listar-pagamentos", async (rq, res) => {
  try {
    let pagamentos = await pagamento.find();
    return res.status(200).json(pagamento);
  } catch (error) {
    return res.status(500), json(error);
  }
});

app.post("/cadastrar-pagamento", async (req, res) => {
  let pagamento = { ...req.body }
  let pagamentoValido = pagamento.tipoPagamento.toLowerCae()!= "C" || pagamento.tipoPagamento.toLowerCae() != "D"

  if(pagamentoValido){
    return res.status(400).json('Pagamento Invalido')
  }

  try {
    await pagamento.create(pagamento)
      return res.status(201).json("Pagamento cadastrado com sucesso!")
  }catch (error) {
    return res.status(500), json(error);
  }
});

mongoose.connect(connectionString, {
    dbName: "DevKapex",
  })
  .then(() => {
    console.log("mongoDB up!");
    console.log(`Listening on http://localhost:${port}`);

    app.listen(port);
  })
  .catch((error) => {
    console.log(error);
  });
