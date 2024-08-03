const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Welcome to Zarooor!');
})

app.listen(3000,(req,res)=>{
console.log("Server is Up and Running")
})