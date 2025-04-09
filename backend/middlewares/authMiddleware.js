const jwt = require('jsonwebtoken');

// Middleware pour vérifier l'authentification via un token JWT
const authMiddleware = (req, res, next) => { // Ajout du `next` pour passer à la suite de la requête
    // Récupérer le token de l'en-tête Authorization
    const token = req.header('Authorization');

    // Si aucun token n'est trouvé
    if (!token) {
        console.error(`Accès refusé, token manquant sur ${req.method} ${req.url} (IP: ${req.ip})`);
        return res.status(401).json({ message: 'Accès refusé, token manquant.' });
    }

    try {
        // Vérifier et décoder le token JWT
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;  // Ajouter les informations de l'utilisateur décodé à la requête
        
        console.log(`Token valide pour l'utilisateur ${req.user.id} sur ${req.method} ${req.url} (IP: ${req.ip})`);
        
        // Passer à la fonction suivante dans le pipeline des middlewares
        next(); 
    } catch (err) {
        console.error(`Erreur de token pour ${req.method} ${req.url} (IP: ${req.ip})`);
        console.error('Détails de l\'erreur:', err.stack); // Afficher l'erreur complète

        return res.status(400).json({ message: 'Token invalide.' });
    }
};

module.exports = authMiddleware;

