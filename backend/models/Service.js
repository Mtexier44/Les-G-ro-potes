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

// Fonction pour obtenir un service par son ID
const getServiceById = (service_id, callback) => {
    const query = `SELECT * FROM service WHERE id =?`;
    db.get(query, [service_id], (err, row) => {
        if (err) {
            return callback(err);
        }
        callback(null, row);
    });
};

// Obtenir un service par l' entreprise_id
    const getServiceByEntrepriseId = (entreprise_id, callback) => {
        const query = `SELECT * FROM service WHERE entreprise_id =?`;
        db.all(query, [entreprise_id], (err, rows) => {
            if (err) {
                return callback(err);
            }
            callback(null, rows);
        });
    };

    // Obtenir un service par son type_service
    const getServiceByTypeService = (type_service, callback) => {
        const query = `SELECT * FROM service WHERE type_service =?`;
        db.all(query, [type_service], (err, rows) => {
            if (err) {
                return callback(err);
            }
            callback(null, rows);
        });
    };

    // Obtenir un service par sa description
    const getServiceByDescription = (description, callback) => {
        const query = `SELECT * FROM service WHERE description =?`;
        db.all(query, [description], (err, rows) => {
            if (err) {
                return callback(err);
            }
            callback(null, rows);
        });
    };

    // Obtenir un service par son prix
    const getServiceByPrix = (prix, callback) => {
        const query = `SELECT * FROM service WHERE prix =?`;
        db.all(query, [prix], (err, rows) => {
            if (err) {
                return callback(err);
            }
            callback(null, rows);
        });
    };

    // Obtenir un service par sa localisation
    const getServiceByLocalisation = (localisation, callback) => {
        const query = `SELECT * FROM service WHERE localisation =?`;
        db.all(query, [localisation], (err, rows) => {
            if (err) {
                return callback(err);
            }
            callback(null, rows);
        });
    };

    // Fonction pour mettre à jour le service et ses attributs
     const updateService = (service_id, service, callback) => {
        const { entreprise_id, type_service, description, prix, localisation } = service;
        const query = `UPDATE service SET entreprise_id =?, type_service =?, description =?, prix =?, localisation =? WHERE id =?`;

        db.run(query, [entreprise_id, type_service, description, prix, localisation, service_id], function(err) {
            if (err) {
                return callback(err);
            }
            callback(null, this.changes); // Renvoie le nombre de lignes mises à jour
        });
    };

    // Fonction pour supprimer un service
    const deleteService = (service_id, callback) => {
        const query = `DELETE FROM service WHERE id =?`;
        db.run(query, [service_id], function(err) {
            if (err) {
                return callback(err);
            }
            callback(null, this.changes); // Renvoie le nombre de lignes supprimées
        });
    };




module.exports = { 
    addService, 
    getServicesByEntreprise,
    getServiceById,
    getServiceByEntrepriseId,
    getServiceByTypeService,
    getServiceByDescription,
    getServiceByPrix,
    getServiceByLocalisation,
    updateService,
    deleteService
   };
