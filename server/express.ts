import express from 'express'


const app = express()

app.use(express.json())//parse json bodies


export default app