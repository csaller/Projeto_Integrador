import express from 'express'

import { port } from './config.ts'

import Routes from './routes/index.ts'

const app = express()

app.use(express.json())

app.use("/v1", Routes)

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})
