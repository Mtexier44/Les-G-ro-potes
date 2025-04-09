// Middleware pour la gestion des erreurs
const errorHandler = (err, req, res) => {
    // Afficher l'erreur dans la console pour débogage avec des informations contextuelles
    console.error(`Erreur sur la requête ${req.method} ${req.url} (IP: ${req.ip})`);
    console.error('Détails de l\'erreur:', err.stack); // Affiche l'erreur complète

    // Ajouter des informations utilisateur dans les logs si disponible
    if (req.user) {
        console.error(`Utilisateur ID: ${req.user.id}`);
    }

    // Vérifier si l'erreur a un statut HTTP personnalisé
    if (err.status) {
        return res.status(err.status).json({ message: err.message });
    }

    // Si l'erreur n'a pas de statut personnalisé, envoyer une erreur interne 500
    return res.status(500).json({
        message: 'Une erreur interne est survenue.',
        error: err.message,
    });
};

module.exports = errorHandler;


