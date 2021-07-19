let userController = {}
import secret from '../model/safety/secretCrypt.js';
import jwt from 'jsonwebtoken';

userController.login = function (req, res, next) {
  
  console.log(typeof req.body.password === 'string');
  if(req.body.user === 'aldy' && req.body.password === '123'){
    const id = 1; 
    const token = jwt.sign({ id }, secret, {
      expiresIn: 300 
    });
    //req.session.user = credentialUser;
    return res.json({ auth: true, token: token });
  }
  
  res.status(500).json({message: 'Login invalid!'});
}

userController.logOut = function(req, res, next) {
  req.session = null;
  res.status(200).json({message: 'logoff'});
}

userController.registerStudent = function(req, res, next) {

}
export default userController;