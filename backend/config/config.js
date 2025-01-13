const dotenv = require('dotenv');


// Chargement des variables d'environnement
dotenv.config();

module.exports = {
    // Paramètres de l'application
    app: {
        port: process.env.PORT || 5000, // Port du serveur
        environnement: process.env.NODE_ENV || 'development', // Environnement de l'application
        baseUrl: 'http://localhost:5000' // URL de base pour l'API
    },

    // Configuration des messages d'erreur
    errorMessages: {
        notFound: 'Ressource non trouvée',
        serverError: 'Erreur du serveur',
        validationError: 'Erreur de validation des données'
    },

    // Configuration du JWT (si utilisé)
    jwtSecret: process.env.JWT_SECRET || 'secretKey', // Clé secrète pour JWT
    jwtExpiry: '1h' // Durée de validité du JWT
};