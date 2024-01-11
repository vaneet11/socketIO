const express = require('express')
const http = require('http');
const allRoutes = require('./routes/index.route')
const { Server } = require("socket.io");

let port = 8888
const app = express()
const server = http.createServer(app);
const io = new Server(server);
global.io = io

io.on('connection', (socket) => {
    console.log('a user connected');
    io.emit('notify', { success: true, message: "Connected Successfully", type: 'success' })
});
app.use('/', allRoutes)

server.listen(port, () => {
    console.log(`Listening to ${port}:`)
})

