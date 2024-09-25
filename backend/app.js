require('dotenv').config();
const express = require('express');
const contactRoute = require('./Routes/contacts');
const connectDB = require('./DB/connect');
const http = require('http');
const socketIo = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = socketIo(server);
app.use(express.json());
app.use("/api/v1/contacts",contactRoute);
let port = 3000|| process.env.PORT;
const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`run ${port}`))
    } catch (error) {
        console.log(error);
        
    }
}

start()

// Socket.IO connection
io.on('connection', (socket) => {
    console.log('New client connected');
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});


