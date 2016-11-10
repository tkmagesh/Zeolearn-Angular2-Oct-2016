var nodeJsWebSocket = require('nodejs-websocket');
var server = nodeJsWebSocket.createServer(function(conn){
    conn.on('text', function(msg){
        console.log(msg);
        server.connections.forEach(function(connection){
            connection.sendText(msg);
        })
        
    });
}) 
server.listen(9090);
console.log('web socket server listening on port 9090');