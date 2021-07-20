import secret from '../model/safety/secretJWT.js';
import jwt from 'jsonwebtoken';
import database from '../config/database2.js'
import { promisify } from 'util';
import cryptPassword from '../model/safety/cryptPassword.js'
const promiseCryptPassword = promisify(cryptPassword);
const HOUR_IN_SECONDS = 3600;


let userController = {}
userController.login = async function (req, res, next) {
  const databaseObject = await database.connect();
  const user = await databaseObject.collection("user").findOne({name: req.body.login});
  
  const cryptpasswordUserLogin = await promiseCryptPassword(req.body.password);
  
  if(user.name === req.body.login || user.password === cryptpasswordUserLogin){
    const tokenCredential = jwt.sign({ role: user.role }, secret, {expiresIn: HOUR_IN_SECONDS});
    req.session.tokenCredential = tokenCredential;
    //res.cookie('token', tokenCredential);

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
  const role = req.userRole
 res.status(200).json({message: "in", role });
}
export default userController;