import http from 'http';
import express from 'express';
import database from './config/database.js';
import user from './routes/user.js';
import session from 'express-session';
import dotenvSafe from 'dotenv-safe';
dotenvSafe.config();
const EXPIRE_DATE_IN_DAY = new Date(Date.now() + 60 * 60 * 1000 * 24); // 24 hours

const app = express();

app.use(session({
    secret: 'dsfkasjdfsidfdfsdfsodfiuoidfif&*&#&',
    saveUninitialized: true,
    resave: false,
    httpOnly: true,
    maxAge: EXPIRE_DATE_IN_DAY
    //secure: true, // only use cookie over https!
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

database();

user(app);
const server = http.createServer(app); 
server.listen(3000);
console.log("Servidor escutando na porta 3000...")