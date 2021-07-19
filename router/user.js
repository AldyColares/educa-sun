const user = require("../controller/user");

module.exports = function (app) {
  app.post('/login', user.login);

  app.get('/logout', user.logOut);

  app.post('/register-student', user.registerStudentPost);
}