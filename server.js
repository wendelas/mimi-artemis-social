process.title = 'AAA Server';

//Importando ExpressJS
var express = require('express'),
    
    //Importando Socket.IO
    socketio = require('socket.io'),

    //Criando uma instancia do ExpressJS
    app = express(),
    //chat = require('chat');
    //Criando um HTTP Server a partir do ExpressJS
    httpServer = require('http').createServer(app),

    //Utilizando a mesma porta do HTTP Server para o Socket.IO
    io = socketio.listen(httpServer)
;

//Diz ao Express que o diretorio web contem conteudos estaticos
app.use(express.static(__dirname + '/web'));

//Exporta os mÃ³dulos
module.exports.socketServer = io;
module.exports.webServer = httpServer;
