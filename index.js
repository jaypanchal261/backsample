require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/instagram",(req,res)=>{
    res.send("mr_jacks___")

})

app.get("/login",(req,res)=>{
    res.send("<h1>please log in to this website.</h1>")
})

app.get("/youtube",(req,res)=>{
    res.send("<h2>youtube.com</h2>")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})