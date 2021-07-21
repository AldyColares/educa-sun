import jwt from 'jsonwebtoken';

export default function (req, res, next) {
  const token = req.session.tokenCredential;
  
  if (!token) return res.status(401).json({ auth: false, message: 'No token provided or expired.' });

  jwt.verify(token, process.env.SECRETJWT, function (err, decoded) {
    if (err) { return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' }); }

    if (decoded.role === "studant") {
      req.userRole = decoded.role;
      next();
    } else {
      return res.status(401).json({ auth: false, message: "unauthorized access." });
    }
  });
}