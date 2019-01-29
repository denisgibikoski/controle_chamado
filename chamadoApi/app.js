const express = require('express')
const cors = require('cors')

const wsPed = require('./ws/chamado.ws')
const wsCli = require('./ws/departamento.ws')

const app = express()

app.use(cors())
app.use(express.json())

wsPed(app)
wsCli(app)

app.listen(3000, () => {
    console.log('Servidor iniciado')
})