import user from '../controller/user.js'

export default function (app) {
  app.post('/login', user.login);

  app.get('/logout', user.logOut);

  app.post('/register-student', user.registerStudent);
}