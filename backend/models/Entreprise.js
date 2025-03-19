const db = require('../config/db');

// Fonction pour ajouter une entreprise
const addEntreprise = (entreprise, callback) => {
    const { nom, type_entreprise, email, telephone, adresse, villes_desservies, nombre_patients, description_services, logo, photos, videos } = entreprise;
    const query = `INSERT INTO entreprise (nom, type_entreprise, email, telephone, adresse, villes_desservies, nombre_patients, description_services, logo, photos, videos) 
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.run(query, [nom, type_entreprise, email, telephone, adresse, villes_desservies, nombre_patients, description_services, logo, photos, videos], function(err) {
        if (err) {
            return callback(err);
        }
        callback(null, this.lastID); // Renvoie l'ID de la nouvelle entreprise
    });
};

// Fonction pour obtenir toutes les entreprises
const getAllEntreprises = (callback) => {
    const query = `SELECT * FROM entreprise`;
    db.all(query, [], (err, rows) => {
        if (err) {
            return callback(err);
        }
        callback(null, rows);
    });
};

module.exports = { addEntreprise, getAllEntreprises };
