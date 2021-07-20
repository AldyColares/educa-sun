import user from '../controller/user.js'
import professorAuthorization from '../model/safety/professorAuthorization.js';

export default function (app) {
  app.post('/login', user.login);

  app.get('/logout', user.logOut);

  app.post('/registerstudent', user.registerStudent);
}