const db = require('../config/db');

// Fonction pour ajouter un log d'activité
const addLogActivity = (logActivity, callback) => {
    const { utilisateur_id, action, date_action, details } = logActivity;
    const query = `INSERT INTO log_activity (utilisateur_id, action, date_action, details) 
                   VALUES (?, ?, ?, ?)`;

    db.run(query, [utilisateur_id, action, date_action, details], function(err) {
        if (err) {
            return callback(err);
        }
        callback(null, this.lastID); // Renvoie l'ID du nouveau log
    });
};

// Fonction pour obtenir tous les logs d'activité d'un utilisateur
const getLogsByUtilisateur = (utilisateur_id, callback) => {
    const query = `SELECT * FROM log_activity WHERE utilisateur_id = ?`;
    db.all(query, [utilisateur_id], (err, rows) => {
        if (err) {
            return callback(err);
        }
        callback(null, rows);
    });
};

module.exports = { addLogActivity, getLogsByUtilisateur };
