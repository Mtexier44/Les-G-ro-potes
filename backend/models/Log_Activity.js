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

// Fonction pour obtenir un log d'activité par son ID
const getLogById = (id, callback) => {
    const query = `SELECT * FROM log_activity WHERE id =?`;
    db.get(query, [id], (err, row) => {
        if (err) {
            return callback(err);
        }
        callback(null, row);
    });
};

// Fonction pour obtenir un log d'activité par utilisateur_id
const getLogByUtilisateurId = (utilisateur_id, callback) => {
    const query = `SELECT * FROM log_activity WHERE utilisateur_id =? ORDER BY date_action DESC`;
    db.all(query, [utilisateur_id], (err, rows) => {
        if (err) {
            return callback(err);
        }
        callback(null, rows);
    });
};

// Fonction pour obtenir un log d'activité par action
const getLogByAction = (action, callback) => {
    const query = `SELECT * FROM log_activity WHERE action =? ORDER BY date_action DESC`;
    db.all(query, [action], (err, rows) => {
        if (err) {
            return callback(err);
        }
        callback(null, rows);
    });
};


// Fonction pour obtenir un log d'activité par date_action
const getLogByDateAction = (date_action, callback) => {
    const query = `SELECT * FROM log_activity WHERE date_action =? ORDER BY date_action DESC`;
    db.all(query, [date_action], (err, rows) => {
        if (err) {
            return callback(err);
        }
        callback(null, rows);
    });
};

// Fonction pour obtenir un log d'activité par details
const getLogByDetails = (details, callback) => {
    const query = `SELECT * FROM log_activity WHERE details =? ORDER BY date_action DESC`;
    db.all(query, [details], (err, rows) => {
        if (err) {
            return callback(err);
        }
        callback(null, rows);
    });
};

// Fonction pour mettre à jour un log d'activité
const updateLogActivity = (id, logActivity, callback) => {
    const { utilisateur_id, action, date_action, details } = logActivity;
    const query = `UPDATE log_activity SET utilisateur_id =?, action =?, date_action =?, details =? WHERE id =?`;

    db.run(query, [utilisateur_id, action, date_action, details, id], function(err) {
        if (err) {
            return callback(err);
        }
        callback(null);
    });
};

// Fonction pour supprimer un log d'activité
const deleteLogActivity = (id, callback) => {
    const query = `DELETE FROM log_activity WHERE id =?`;
    db.run(query, [id], function(err) {
        if (err) {
            return callback(err);
        }
        callback(null, this.changes === 1); // Renvoie vrai si la suppression a réussi
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
