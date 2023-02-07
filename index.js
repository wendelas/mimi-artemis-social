//Carrega o modulo server.js
var Server = require('./server'),

    //Carrega o objeto io
    socketServer = Server.socketServer,

    //Carrega o objeto httpServer
    webServer = Server.webServer,
 
    UserHandlingSocial = require('./ibbSocial'),

    UserHandlingSocial = new UserHandlingSocial(socketServer);

//Inicia o web server na porta 000
webServer.listen(3000);