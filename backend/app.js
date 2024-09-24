require('dotenv').config();
const express = require('express');
const contactRoute = require('./Routes/contacts');
const connectDB = require('./DB/connect');

const app = express();
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