const db = require('../config/db');

// Fonction pour ajouter un utilisateur
const addUtilisateur = (utilisateur, callback) => {
    const { nom, prenom, email, mot_de_passe, role, telephone, adresse, ville } = utilisateur;
    const query = `INSERT INTO utilisateur (nom, prenom, email, mot_de_passe, role, telephone, adresse, ville) 
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    db.run(query, [nom, prenom, email, mot_de_passe, role, telephone, adresse, ville], function(err) {
        if (err) {
            return callback(err);
        }
        callback(null, this.lastID); // Renvoie l'ID du nouvel utilisateur
    });
};

// Fonction pour obtenir tous les utilisateurs
const getAllUtilisateurs = (callback) => {
    const query = `SELECT * FROM utilisateur`;
    db.all(query, [], (err, rows) => {
        if (err) {
            return callback(err);
        }
        callback(null, rows);
    });
};

module.exports = { addUtilisateur, getAllUtilisateurs };
