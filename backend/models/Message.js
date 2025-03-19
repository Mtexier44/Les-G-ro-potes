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

module.exports = { addMessage, getMessagesByEntreprise };
