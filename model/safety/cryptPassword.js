import bcrypt from 'bcrypt';
const SALT_FACTOR = 10;

/**
 * Encrypt the users password. 
 * 
 * @param  {string} Password - the password. 
 * @param  {callback} callback - The asynchronous function return error or encrypt password.    
 */

const cryptPassword = function (password, cb) {
  bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
    if (err) return cb(err, null);

    bcrypt.hash(password, salt, function (err, hashedPassword) {
      if (err) return cb(err, null);

      return cb(null, hashedPassword);
    });
  });
}

export default cryptPassword;
