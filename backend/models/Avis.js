const db = require('../config/db');

// Fonction pour ajouter un avis
const addAvis = (avis, callback) => {
    const { utilisateur_id, entreprise_id, service_id, note, commentaire, date_avis } = avis;
    const query = `INSERT INTO avis (utilisateur_id, entreprise_id, service_id, note, commentaire, date_avis) 
                   VALUES (?, ?, ?, ?, ?, ?)`;

    db.run(query, [utilisateur_id, entreprise_id, service_id, note, commentaire, date_avis], function(err) {
        if (err) {
            return callback(err);
        }
        callback(null, this.lastID); // Renvoie l'ID du nouvel avis
    });
};

// Fonction pour obtenir tous les avis d'une entreprise
const getAvisByEntreprise = (entreprise_id, callback) => {
    const query = `SELECT * FROM avis WHERE entreprise_id = ?`;
    db.all(query, [entreprise_id], (err, rows) => {
        if (err) {
            return callback(err);
        }
        callback(null, rows); // Renvoie les avis de l'entreprise
    });
};

// Fonction pour obtenir tous les avis d'un service
const getAvisByService = (service_id, callback) => {
    const query = `SELECT * FROM avis WHERE service_id = ?`;
    db.all(query, [service_id], (err, rows) => {
        if (err) {
            return callback(err);
        }
        callback(null, rows); // Renvoie les avis du service
    });
};

// Fonction pour obtenir un avis spécifique par son ID
const getAvisById = (avis_id, callback) => {
    const query = `SELECT * FROM avis WHERE id = ?`;
    db.get(query, [avis_id], (err, row) => {
        if (err) {
            return callback(err);
        }
        callback(null, row); // Renvoie l'avis trouvé
    });
};

// Fonction pour supprimer un avis
const deleteAvis = (avis_id, callback) => {
    const query = `DELETE FROM avis WHERE id = ?`;
    db.run(query, [avis_id], function(err) {
        if (err) {
            return callback(err);
        }
        callback(null, this.changes); // Renvoie le nombre de lignes supprimées
    });
};

// Fonction pour mettre à jour un avis (par exemple, la note ou le commentaire)
const updateAvis = (avis_id, note, commentaire, callback) => {
    const query = `UPDATE avis SET note = ?, commentaire = ? WHERE id = ?`;
    db.run(query, [note, commentaire, avis_id], function(err) {
        if (err) {
            return callback(err);
        }
        callback(null, this.changes); // Renvoie le nombre de lignes mises à jour
    });
};

module.exports = { addAvis, getAvisByEntreprise, getAvisByService, getAvisById, deleteAvis, updateAvis };