import http from 'http';
import express from 'express';
import feedseeds from './services/feedseeds.js';
import user from './routes/user.js';
import turma from './routes/turma.js';
import session from 'express-session';

const EXPIRE_DATE_IN_DAY = 60 * 60 * 1000 * 24; // 24 hours
const sessionSecret = process.env.SESSIONSECRET;
const app = express();

app.use(session({
    secret: sessionSecret,
    saveUninitialized: true,
    resave: true,
    cookie: {
        maxAge: EXPIRE_DATE_IN_DAY,
        secure: false, // only use cookie over https!
    }
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

feedseeds();

user(app);
turma(app);

const server = http.createServer(app);
server.listen(3000);
console.log("Servidor escutando na porta 3000...")