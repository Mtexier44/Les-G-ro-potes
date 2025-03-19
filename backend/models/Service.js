const db = require('../config/db');

// Fonction pour ajouter un service
const addService = (service, callback) => {
    const { entreprise_id, type_service, description, prix, localisation } = service;
    const query = `INSERT INTO service (entreprise_id, type_service, description, prix, localisation) 
                   VALUES (?, ?, ?, ?, ?)`;

    db.run(query, [entreprise_id, type_service, description, prix, localisation], function(err) {
        if (err) {
            return callback(err);
        }
        callback(null, this.lastID); // Renvoie l'ID du nouveau service
    });
};

// Fonction pour obtenir tous les services d'une entreprise
const getServicesByEntreprise = (entreprise_id, callback) => {
    const query = `SELECT * FROM service WHERE entreprise_id = ?`;
    db.all(query, [entreprise_id], (err, rows) => {
        if (err) {
            return callback(err);
        }
        callback(null, rows);
    });
};

module.exports = { addService, getServicesByEntreprise };
