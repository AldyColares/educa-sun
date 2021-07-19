import secret from '../model/safety/secretJWT.js';
import jwt from 'jsonwebtoken';

let userController = {}
const hourInSecunds = 3600;
userController.login = function (req, res, next) {
  
  if(req.body.user === 'aldy' && req.body.password === '123'){
    const id = 1; 
    const tokenCredential = jwt.sign({ id }, secret, {expiresIn: hourInSecunds});
    req.session.tokenCredential = tokenCredential;
    return res.json({ auth: true, token: tokenCredential });
  }
  
  res.status(500).json({message: 'Login invalid!'});
}

userController.logOut = function(req, res, next) {
  req.session.destroy( function(err) {
    if(err) { return console.log(err); }

    res.status(200).json({message: 'logout'});
});
}

userController.registerStudent = function(req, res, next) {
 
}
export default userController;