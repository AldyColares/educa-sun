import jwt from 'jsonwebtoken';
import database from '../services/conectdatabase.js'
import { promisify } from 'util';
import cryptPassword from '../model/safety/cryptPassword.js'

const promiseCryptPassword = promisify(cryptPassword);
const HOUR_IN_SECONDS = 3600;

let userController = {}
userController.login = async function (req, res, next) {
  try {
    const databaseObject = await database.connect();
    const user = await databaseObject.collection("user").findOne({ name: req.body.login });
    if (!user) return res.status(401).json({ message: "login or password not found" })

    const cryptpasswordUserLogin = await promiseCryptPassword(req.body.password);

    if (user.name === req.body.login && user.password === cryptpasswordUserLogin) {
      const tokenCredential = jwt.sign({ role: user.role }, process.env.SECRETJWT,
        { expiresIn: HOUR_IN_SECONDS });
      req.session.tokenCredential = tokenCredential;

      return res.json({ auth: true, token: tokenCredential });
    }

    return res.status(401).json({ message: 'Login invalid!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server not responding." })
  }

}

userController.logOut = function (req, res, next) {
  req.session.destroy(function (err) {
    if (err) { return console.log(err); }

    res.status(200).json({ message: 'logout' });
  });
}

userController.registerStudent = async function (req, res, next) {
  const body = req.body;

  try {
    const cryptPassword = await promiseCryptPassword(req.body.password),
      databaseObject = await database.connect(),
      doc = {
        name: body.name,
        password: cryptPassword,
        matriculation: body.matriculation,
        age: body.age,
        role: body.role
      }
    const result = await databaseObject.collection("user").insertOne(doc);
    return res.status(200).json({ message: "register successuful" });
  }
  catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server not responding." })
  }
  
}
export default userController;