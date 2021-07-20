import jwt from 'jsonwebtoken';
import secret from './secretJWT.js';

export default function (req, res, next) {
  const token = req.session.tokenCredential;
  //const token = req.cookie.token;
  
  if (!token) return res.status(401).json({ auth: false, message: 'No token provided or expired.' });

  jwt.verify(token, secret, function (err, decoded) {
    if (err) { return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' }); }

    if (decoded.role === "professor") {
      req.userRole = decoded.role;
      next();
    } else {
      return res.status(401).json({ auth: false, message: "unauthorized access." });
    }
  });
}