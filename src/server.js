const express = require ("express");
const cors = require('cors')
const connectDatabase = require('./config/connectDb')
import initRoutes from './routes'
require("dotenv").config()
const app = express();
const PORT = process.env.PORT||8888;

app.use(express.json())

app.use(cors());

initRoutes(app)
connectDatabase()

app.listen(PORT,function(){
    console.log(`Server running at ${process.env.CLIENT_URL}${PORT}`);
})