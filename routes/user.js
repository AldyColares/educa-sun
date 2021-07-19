import user from '../controller/user.js'
import verifyJWT from '../model/safety/verifyJWT.js';

export default function (app) {
  app.post('/login', user.login);

  app.get('/logout', user.logOut);

  app.post('/register-student',verifyJWT ,user.registerStudent);
}