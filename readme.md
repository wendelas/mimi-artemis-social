# Preparando o backend
    npm install Socket.IO
    npm install express
    npm install nodemon -g 
    npm install bower -g

    Criar servidor mini-artemis simulador social socket io

    index.js - Arquivo principal, iniciará o servidor web e o websocket;

    server.js - Atribuições de instanciar, configurar e exportar os servidores web(http) e websocket;
    
    ibbSocial.js - Gerenciamento do comportamento da mini-artemis social.

    ibbChat.js - Gerenciamento do chat

Criar uma pasta web para o projeto client

# Preparndo client

    bower install jquery
    bower install bootstrap
    bower install mustache
    bower install requirejs

# Arquivos client

    index.html - Pagina simulador ibb-social ;

    styles/social.css - Que conterá o estilo de nossa aplicação

    scripts/main.js - Onde estará a configuração do RequireJS e servirá como nosso “main program”;

    scripts/client_websocket.js - Aqui vai o socket client que fará a comunicação com o server websocket;

    scripts/view.js - Camada de comunicação entre o client_websocket.js e realizar o link entre o websocket e os eventos da pagina html.

    scripts/client_chat.js - camada que vai o socket chat