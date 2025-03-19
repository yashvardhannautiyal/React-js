import express from "express";
import bodyParser from "body-parser";
import cors from "cors"


const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World this is server js!')
})
app.post('/', (req, res) => {
    console.log(req.body)
    res.send("hello world from post request")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})