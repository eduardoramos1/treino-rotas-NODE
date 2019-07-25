const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/html/index.html")
})

app.get('/sobre', function(req, res){
    res.sendFile(__dirname + '/html/sobre.html')
})

app.get('/blog', function(req, res){
    res.send('Bem vindo ao meu blog')
})

// ':' indica que será criado um parâmetro
// params pega todos os dados da enviados para a requisição dentro de um JSON
//Método send só pode ser chamado uma vez dentro de uma rota !
app.get('/ola/:nome/:cargo', function(req, res) {
    res.send("Olá " + req.params.nome);
    // res.send("<h2>Cargo é : " + req.params.cargo + "</h2>"); < - Segundo send retornará um erro
})

//criar server / essa linha de código deve ser a última no código
app.listen(8080, function(){
    //mostra no terminal uma mensagem de servidor rodando
    console.log('Servidor rodando na url http://localhost:8080')
});