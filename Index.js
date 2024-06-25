
const express = require('express')

app = express()

app.get('/',function(req,res){
    res.sendFile(__dirname+'/Index.html')
})


app.listen(1000)