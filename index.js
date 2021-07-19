const http = require('http'); 
const express = require('express'); 
const app = express();
const database = require('./config/database');
const user = require('./router/user');
require("dotenv-safe").config();
 
console.log(database);
app.use(express.json());
database();
app.get('/clientes', (req, res, next) => { 
    console.log("Retornou todos clientes!");
    res.json([{id:1,nome:'luiz'}]);
}) 

//user(app);
const server = http.createServer(app); 
server.listen(3000);
console.log("Servidor escutando na porta 3000...")