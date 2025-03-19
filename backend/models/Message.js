const db = require('../config/db');

// Fonction pour ajouter un message
const addMessage = (message, callback) => {
    const { utilisateur_id, entreprise_id, message_text, date_envoi, lu } = message;
    const query = `INSERT INTO message (utilisateur_id, entreprise_id, message, date_envoi, lu) 
                   VALUES (?, ?, ?, ?, ?)`;

    db.run(query, [utilisateur_id, entreprise_id, message_text, date_envoi, lu], function(err) {
        if (err) {
            return callback(err);
        }
        callback(null, this.lastID); // Renvoie l'ID du nouveau message
    });
};

// Fonction pour obtenir tous les messages pour une entreprise
const getMessagesByEntreprise = (entreprise_id, callback) => {
    const query = `SELECT * FROM message WHERE entreprise_id = ?`;
    db.all(query, [entreprise_id], (err, rows) => {
        if (err) {
            return callback(err);
        }
        callback(null, rows);
    });
};

// Obtenir un message par son ID
const getMessageById = (message_id, callback) => {
    const query = `SELECT * FROM message WHERE id =?`;
    db.get(query, [message_id], (err, row) => {
        if (err) {
            return callback(err);
        }
        callback(null, row);
    });
};

// Fonction pour obtenir un message par utilisateur_id
const getMessageByUtilisateur = (utilisateur_id, callback) => {
    const query = `SELECT * FROM message WHERE utilisateur_id =?`;
    db.all(query, [utilisateur_id], (err, rows) => {
        if (err) {
            return callback(err);
        }
        callback(null, rows);
    });
};

// Obtenir un message par sa date_envoi
const getMessageByDateEnvoi = (date_envoi, callback) => {
    const query = `SELECT * FROM message WHERE date_envoi =?`;
    db.all(query, [date_envoi], (err, rows) => {
        if (err) {
            return callback(err);
        }
        callback(null, rows);
    });
};

// Obtenir le messages lu
const getMessageLu = (callback) => {
    const query = `SELECT * FROM message WHERE lu = 1`;
    db.all(query, [], (err, rows) => {
        if (err) {
            return callback(err);
        }
        callback(null, rows);
    });
};

// Fonction pour marquer un message comme lu
const markMessageAsLu = (message_id, callback) => {
    const query = `UPDATE message SET lu = 1 WHERE id =?`;
    db.run(query, [message_id], (err) => {
        if (err) {
            return callback(err);
        }
        callback(null);
    });
};

// Fonction pour mettre à jour du message
const updateMessage = (message_id, message_text, callback) => {
    const query = `UPDATE message SET message =? WHERE id =?`;
    db.run(query, [message_text, message_id], (err) => {
        if (err) {
            return callback(err);
        }
        callback(null, this.changes); // Renvoie le nombre de lignes mises à jour
    });
};

// Fonction pour supprimer un message
const deleteMessage = (message_id, callback) => {
    const query = `DELETE FROM message WHERE id =?`;
    db.run(query, [message_id], (err) => {
        if (err) {
            return callback(err);
        }
        callback(null, this.changes); // Renvoie le nombre de lignes supprimées
    });
};

module.exports = {
    addMessage, 
    getMessagesByEntreprise,
    getMessageById,
    getMessageByUtilisateur,
    getMessageByDateEnvoi,
    getMessageLu,
    markMessageAsLu,
    updateMessage,
    deleteMessage
};
