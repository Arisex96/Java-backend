require('dotenv').config()
//console.log(process.env)

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/twitter",(req,res)=>{
    res.send("this is twitter")
})
app.get("/login", (req,res)=>{
    res.send("<h1>Hi tag is send</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})