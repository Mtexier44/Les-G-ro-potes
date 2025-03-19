const jwt = require('jsonwebtoken');

// Middleware pour vérifier l'authentification via un token JWT
const authMiddleware = (req, res) => { // Suppression du `next`
    // Récupérer le token de l'en-tête Authorization
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Accès refusé, token manquant.' });
    }

    try {
        // Vérifier et décoder le token JWT
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;  // Ajouter les informations de l'utilisateur décodé à la requête
        return res.status(200).json({ message: 'Token valide.' });  // Ajout d'une réponse, ou on passe à la prochaine fonction si nécessaire
    } catch (err) {
        console.error('Erreur de token:', err);
        return res.status(400).json({ message: 'Token invalide.' });
    }
};

module.exports = authMiddleware;
