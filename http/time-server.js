const { networkInterfaces } = require("os");

const net = require('net');

const server = net.createServer(
     (socket) => {
        socket.write(data);
        socket.end(data);
    }
)
server.listen(process.argv[2]);