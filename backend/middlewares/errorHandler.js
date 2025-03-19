// Middleware pour la gestion des erreurs
const errorHandler = (err, req, res) => {  // Suppression du `next`
    console.error(err.stack);  // Afficher l'erreur dans la console pour débogage

    // Vérifier si l'erreur a un statut HTTP personnalisé
    if (err.status) {
        return res.status(err.status).json({ message: err.message });
    }

    // Si l'erreur n'a pas de statut personnalisé, envoyer une erreur interne 500
    return res.status(500).json({ message: 'Une erreur interne est survenue.', error: err.message });
};

module.exports = errorHandler;

