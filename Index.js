const print = (data)=> console.log(data)

const express = require('express')

const app = express(express.static(__dirname+'/Asset'))

app.get('/',function(req,res){
    res.sendFile(__dirname+'/Index.html')
})


app.listen(1000)