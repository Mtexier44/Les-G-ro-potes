const jwt = require('jsonwebtoken');
const config = require('./config'); // Importer la configuration

// Fonction pour générer un JWT
exports.generateToken = (utilisateur) => {
    const payload = {
        nom: utilisateur.nom,
        prenom: utilisateur.prenom,
        email: utilisateur.email,
        mot_de_passe: utilisateur.mot_de_passe,
        telephone: utilisateur.telephone,
    };

    return jwt.sign(payload, config.jwtSecret, { expiresIn: config.jwtExpiry });
};

// Fonction pour vérifier si un utilisateur est authentifié
exports.isAuthenticated = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Token required' });
    }

    verifyToken(token)
       .then((decoded) => {
            req.user = decoded;
            next();
        })
       .catch((err) => {
            res.status(401).json({ message: err });
        });
};

// Fonction pour vérifier si un utilisateur est administrateur
exports.isAdmin = (req, res, next) => {
    if (req.utilisateur.role === 'admin') {
        next();
    } else {
        res.status(403).json({ message: 'Forbidden' });
    }
};


// Fonction pour vérifier si un utilisateur est un client
exports.isClient = (req, res, next) => {
    if (req.utilisateur.role === 'client') {
        next();
    } else {
        res.status(403).json({ message: 'Forbidden' });
    }
};


// Fonction pour vérifier si un utilisateur est un administrateur ou un client
exports.isAdminOrClient = (req, res, next) => {
    if (req.utilisateur.role === 'admin' || req.utilisateur.role === 'client') {
        next();
    } else {
        res.status(403).json({ message: 'Forbidden' });
    }
};

// Fonction pour décoder un JWT
exports.decodeToken = (token) => {
    return jwt.decode(token, config.jwtSecret);
};

// Fonction pour vérifier un JWT
exports.verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, config.jwtSecret, (err, decoded) => {
            if (err) {
                reject('Token invalid or expired');
            } else {
                resolve(decoded);
            }
        });
    });
};