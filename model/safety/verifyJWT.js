import jwt from 'jsonwebtoken';
import secret from './secretJWT.js';

export default function verifyJWT(req, res, next){
    const token = req.session.tokenCredential;
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, secret, function(err, decoded) {
      if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
      
      req.userRole = decoded.role;
      next();
    });
}