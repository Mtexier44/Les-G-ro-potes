const jwt = require('jsonwebtoken');
const config = require('../config/config');


// Middleware pour vérifier le token JWT
function authMiddleware(req, res, next) {
    const token = req.headers['authorization'].split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Token is required' });
    }

    jwt.verify(token, config.jwtSecret, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }
        req.user = user;
        next();
    });
    return;
}


module.exports = authMiddleware;