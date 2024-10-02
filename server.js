const http = require('http');

const requestListener = (req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Bem-Vindo!');
       } else {
        res.wrideHead(404, { 'Content-Type': 'text/plain' });
        res.end('página não encontrada'); 
    }

};


const server = http.createServer(requestListener);

server.listen(3000, ()  => {
    console.log('Servidor esta rodando na porta 3000')

});