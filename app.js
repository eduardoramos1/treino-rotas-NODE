const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Beleza')
})

app.get('/sobre', function(req, res){
    res.send('Sobre mim')
})

app.get('/blog', function(req, res){
    res.send('Bem vindo ao meu blog')
})

//criar server / essa linha de código deve ser a última no código
app.listen(8080, function(){
    //mostra no terminal uma mensagem de servidor rodando
    console.log('Servidor rodando na url http://localhost:8080')
});