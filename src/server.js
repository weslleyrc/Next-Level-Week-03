//importar dependencia/pacote/lib 
const express = require('express');
const path = require('path')

//iniciando a biblioteca express
const server = express();
server
    //utilizando os arquivos estaticos
    .use(express.static('public'))

    //configurar template engine
    .set('views', path.join(__dirname, "view"))
    .set('view engine', 'hbs')

    //criar uma rota
    .get('/', (request, response) => {
        return response.render('index')
    })

//ligar o servidor
server.listen(5500)