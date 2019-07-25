//Como se conectar com o bd usando o módulo sequelize

const Sequelize = require('sequelize');
// parametros : schema , usuario , senha / para fazer a conexão
const sequelize = new Sequelize('teste','root', 'eduardo1995', {
    host: 'localhost',
    dialect : 'mysql'
});


//para verificar se a conexão entrou ou falhou
sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso')
}).catch(function(erro){
    console.log('falha ao se conectar : ' + erro);
})

//definir uma modelo de tabela
const Postagem = sequelize.define('postagens', {
    titulo : {
        type: Sequelize.STRING  //diz que o tipo de dado do campo titulo será varchar
    },
    conteudo : {
        type: Sequelize.TEXT // faz o mesmo que no exemplo acima, porém o tipo TEXT não possui limite de carácteres
    }
});

//create -> Cria um novo registro no BD
// Postagem.create({
//     titulo: 'Qualquer coisa',
//     conteudo: 'Blah'
// })


const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.TEXT
    },
    idade: {
        type : Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

// Usuario.create({
//     nome: 'Edu ',
//     sobrenome: 'Ramos',
//     idade: 24,
//     email: 'teste@teste'
// })




//sync ->  sincroniza o modelo com o banco de dados / force: true dá a certeza que a tabela seja criada
// Postagem.sync({force: true}) < -- comentar a linha de sync para que não seja recriada a tabela
// Usuario.sync({force: true})