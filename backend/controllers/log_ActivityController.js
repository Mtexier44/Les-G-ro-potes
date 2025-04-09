const logActivityService = require('../models/Log_Activity'); // Importer le service de log d'activité

// Ajouter un log d'activité
const addLogActivity = (req, res) => {
    const { utilisateur_id, action, date_action, details } = req.body;

    // Appeler le service pour ajouter un log d'activité
    logActivityService.addLogActivity({ utilisateur_id, action, date_action, details }, (err, logId) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de l\'ajout du log d\'activité', details: err });
        }
        return res.status(201).json({ message: 'Log d\'activité ajouté avec succès', logId });
    });
};

// Obtenir tous les logs d'activité d'un utilisateur
const getLogsByUtilisateur = (req, res) => {
    const { utilisateur_id } = req.params;

    // Appeler le service pour obtenir les logs d'un utilisateur
    logActivityService.getLogsByUtilisateur(utilisateur_id, (err, logs) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de la récupération des logs d\'activité', details: err });
        }
        return res.status(200).json(logs);
    });
};

// Obtenir un log d'activité par son ID
const getLogById = (req, res) => {
    const { id } = req.params;

    // Appeler le service pour obtenir un log par son ID
    logActivityService.getLogById(id, (err, log) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de la récupération du log d\'activité', details: err });
        }
        return res.status(200).json(log);
    });
};

// Obtenir les logs d'activité par utilisateur_id
const getLogByUtilisateurId = (req, res) => {
    const { utilisateur_id } = req.params;

    // Appeler le service pour obtenir les logs par utilisateur_id
    logActivityService.getLogByUtilisateurId(utilisateur_id, (err, logs) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de la récupération des logs d\'activité par utilisateur', details: err });
        }
        return res.status(200).json(logs);
    });
};

// Obtenir les logs d'activité par action
const getLogByAction = (req, res) => {
    const { action } = req.params;

    // Appeler le service pour obtenir les logs par action
    logActivityService.getLogByAction(action, (err, logs) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de la récupération des logs d\'activité par action', details: err });
        }
        return res.status(200).json(logs);
    });
};

// Obtenir les logs d'activité par date_action
const getLogByDateAction = (req, res) => {
    const { date_action } = req.params;

    // Appeler le service pour obtenir les logs par date_action
    logActivityService.getLogByDateAction(date_action, (err, logs) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de la récupération des logs d\'activité par date', details: err });
        }
        return res.status(200).json(logs);
    });
};

// Obtenir les logs d'activité par details
const getLogByDetails = (req, res) => {
    const { details } = req.params;

    // Appeler le service pour obtenir les logs par détails
    logActivityService.getLogByDetails(details, (err, logs) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de la récupération des logs d\'activité par détails', details: err });
        }
        return res.status(200).json(logs);
    });
};

// Mettre à jour un log d'activité
const updateLogActivity = (req, res) => {
    const { id } = req.params;
    const { utilisateur_id, action, date_action, details } = req.body;

    // Vérifier si tous les champs sont présents dans la requête
    if (!utilisateur_id || !action || !date_action || !details) {
        return res.status(400).json({ error: 'Tous les champs (utilisateur_id, action, date_action, details) sont nécessaires pour la mise à jour.' });
    }

    // Appeler le service pour mettre à jour un log d'activité sur tous ses attributs
    logActivityService.updateLogActivity(id, { utilisateur_id, action, date_action, details }, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de la mise à jour du log d\'activité', details: err });
        }
        return res.status(200).json({ message: 'Log d\'activité mis à jour avec succès' });
    });
};

// Supprimer un log d'activité
const deleteLogActivity = (req, res) => {
    const { id } = req.params;

    // Appeler le service pour supprimer un log d'activité
    logActivityService.deleteLogActivity(id, (err, success) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de la suppression du log d\'activité', details: err });
        }
        if (success) {
            return res.status(200).json({ message: 'Log d\'activité supprimé avec succès' });
        } else {
            return res.status(404).json({ error: 'Log d\'activité non trouvé' });
        }
    });
};

module.exports = { 
    addLogActivity, 
    getLogsByUtilisateur, 
    getLogById,
    getLogByUtilisateurId,
    getLogByAction,
    getLogByDateAction,
    getLogByDetails,
    updateLogActivity,
    deleteLogActivity
};
