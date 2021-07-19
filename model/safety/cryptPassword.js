import bcrypt from 'bcrypt';
const SALT_FACTOR = 10;
import bcryptSalt from './bcryptSalt.js';
/**
 * Encrypt the users password. 
 * 
 * @param  {string} Password - the password. 
 * @param  {callback} callback - The asynchronous function return error or encrypt password.    
 */

const cryptPassword = function (password, cb) {
  bcrypt.hash(password, bcryptSalt, function (err, hashedPassword) {
    if (err) return cb(err, null);

    return cb(null, hashedPassword);
  });
}

export default cryptPassword;
