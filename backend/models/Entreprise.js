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

// Fonction pour obtenir une entreprise par son ID
const getEntrepriseById = (id, callback) => {
    const query = `SELECT * FROM entreprise WHERE id = ?`;
    db.get(query, [id], (err, row) => {
        if (err) {
            return callback(err);
        }
        callback(null, row);
    });
};

// Fonction pour obtenir une entreprise par son nom
const getEntrepriseByName = (nom, callback) => {
    const query = `SELECT * FROM entreprise WHERE nom = ?`;
    db.get(query, [nom], (err, row) => {
        if (err) {
            return callback(err);
        }
        callback(null, row);
    });
};

// Fonction pour obtenir une entreprise par son email
const getEntrepriseByEmail = (email, callback) => {
    const query = `SELECT * FROM entreprise WHERE email =?`;
    db.get(query, [email], (err, row) => {
        if (err) {
            return callback(err);
        }
        callback(null, row);
    });
};

// Fonction pour obtenir une entreprise par son numéro de téléphone
const getEntrepriseByTelephone = (telephone, callback) => {
    const query = `SELECT * FROM entreprise WHERE telephone =?`;
    db.get(query, [telephone], (err, row) => {
        if (err) {
            return callback(err);
        }
        callback(null, row);
    });
};

// Fonction pour obtenir une entreprise par son adresse
const getEntrepriseByAdresse = (adresse, callback) => {
    const query = `SELECT * FROM entreprise WHERE adresse =?`;
    db.get(query, [adresse], (err, row) => {
        if (err) {
            return callback(err);
        }
        callback(null, row);
    });
};

// Fonction pour obtenir une entreprise par ses villes de service
const getEntrepriseByVillesDesservies = (villes_desservies, callback) => {
    const query = `SELECT * FROM entreprise WHERE villes_desservies LIKE '%${villes_desservies}%'`;
    db.all(query, [], (err, rows) => {
        if (err) {
            return callback(err);
        }
        callback(null, rows);
    });
};

// Fonction pour obtenir une entreprise par son nombre de patients
const getEntrepriseByNombrePatients = (nombre_patients, callback) => {
    const query = `SELECT * FROM entreprise WHERE nombre_patients =?`;
    db.all(query, [nombre_patients], (err, rows) => {
        if (err) {
            return callback(err);
        }
        callback(null, rows);
    });
};

// Fonction pour obtenir une entreprise par sa description de services
const getEntrepriseByDescriptionServices = (description_services, callback) => {
    const query = `SELECT * FROM entreprise WHERE description_services LIKE '%${description_services}%'`;
    db.all(query, [], (err, rows) => {
        if (err) {
            return callback(err);
        }
        callback(null, rows);
    });
};

// Fonction pour obtenir une entreprise par son logo
const getEntrepriseByLogo = (logo, callback) => {
    const query = `SELECT * FROM entreprise WHERE logo =?`;
    db.get(query, [logo], (err, row) => {
        if (err) {
            return callback(err);
        }
        callback(null, row);
    });
};

// Fonction pour obtenir une entreprise par ses photos
const getEntrepriseByPhotos = (photos, callback) => {
    const query = `SELECT * FROM entreprise WHERE photos LIKE '%${photos}%'`;
    db.all(query, [], (err, rows) => {
        if (err) {
            return callback(err);
        }
        callback(null, rows);
    });
};

// Fonction pour obtenir une entreprise par ses vidéos
const getEntrepriseByVideos = (videos, callback) => {
    const query = `SELECT * FROM entreprise WHERE videos LIKE '%${videos}%'`;
    db.all(query, [], (err, rows) => {
        if (err) {
            return callback(err);
        }
        callback(null, rows);
    });
};

// Fonction pour mettre à jour une entreprise
const updateEntreprise = (id, entreprise, callback) => {
    const { nom, type_entreprise, email, telephone, adresse, villes_desservies, nombre_patients, description_services, logo, photos, videos } = entreprise;
    const query = `UPDATE entreprise 
                   SET nom = ?, type_entreprise = ?, email = ?, telephone = ?, adresse = ?, villes_desservies = ?, nombre_patients = ?, description_services = ?, logo = ?, photos = ?, videos = ?
                   WHERE id = ?`;

    db.run(query, [nom, type_entreprise, email, telephone, adresse, villes_desservies, nombre_patients, description_services, logo, photos, videos, id], function(err) {
        if (err) {
            return callback(err);
        }
        callback(null, this.changes); // Renvoie le nombre de lignes affectées
    });
};



// Fonction pour supprimer une entreprise
const deleteEntreprise = (id, callback) => {
    const query = `DELETE FROM entreprise WHERE id = ?`;
    db.run(query, [id], function(err) {
        if (err) {
            return callback(err);
        }
        callback(null, this.changes); // Renvoie le nombre de lignes supprimées
    });
};

module.exports = {
    addEntreprise,
    getAllEntreprises,
    getEntrepriseById,
    getEntrepriseByName,
    getEntrepriseByEmail,
    getEntrepriseByTelephone,
    getEntrepriseByAdresse,
    getEntrepriseByVillesDesservies,
    getEntrepriseByNombrePatients,
    getEntrepriseByDescriptionServices,
    getEntrepriseByLogo,
    getEntrepriseByPhotos,
    getEntrepriseByVideos,
    updateEntreprise,
    deleteEntreprise
};
