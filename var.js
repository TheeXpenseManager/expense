const express = require('express')
const number =5000
const app = express()
app.get('/',(req,res)=>{
    res.status(200).send('<h1>welcome to the homepage</h1>')
})
app.listen(number , ()=>{
     console.log(`server is listening on port ${number}`);
})