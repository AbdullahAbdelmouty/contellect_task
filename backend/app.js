require('dotenv').config();
const express = require('express');
const contactRoute = require('./Routes/contacts');

const app = express();
app.use(express.json());
app.use("/api/v1/contacts",contactRoute);
let port = 3000||process.env.PORT;
app.listen(port,console.log(`run ${port}`)
)