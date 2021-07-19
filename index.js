//const http = require('http'); 
import http from 'http';
//const express = require('express'); 
import express from 'express';
//const database = require('./config/database');
import database from './config/database.js';
//const user = require('./router/user');
import user from './router/user.js';
import dotenvSafe from 'dotenv-safe';
dotenvSafe.config();
//require("dotenv-safe").config();
const app = express();

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