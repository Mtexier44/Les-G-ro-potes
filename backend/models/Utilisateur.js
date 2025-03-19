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

// Fonction pour obtenir un utilisateur par son ID
const getUtilisateurById = (id, callback) => {
    const query = `SELECT * FROM utilisateur WHERE id =?`;
    db.get(query, [id], (err, row) => {
        if (err) {
            return callback(err);
        }
        callback(null, row);
    });
};

// Fonction pour obtenir un utilisateur par son nom
const getUtilisateurByName = (nom, callback) => {
    const query = `SELECT * FROM utilisateur WHERE nom =?`;
    db.all(query, [nom], (err, rows) => {
        if (err) {
            return callback(err);
        }
        callback(null, rows);
    });
};

// Fonction pour obtenir un utilisateur par son prenom
const getUtilisateurByPrenom = (prenom, callback) => {
    const query = `SELECT * FROM utilisateur WHERE prenom =?`;
    db.all(query, [prenom], (err, rows) => {
        if (err) {
            return callback(err);
        }
        callback(null, rows);
    });
};

// Fonction pour obtenir un utilisateur par son email
const getUtilisateurByEmail = (email, callback) => {
    const query = `SELECT * FROM utilisateur WHERE email =?`;
    db.get(query, [email], (err, row) => {
        if (err) {
            return callback(err);
        }
        callback(null, row);
    });
};

// Fonction pour obtenir un utilisateur par son role
const getUtilisateurByRole = (role, callback) => {
    const query = `SELECT * FROM utilisateur WHERE role =?`;
    db.all(query, [role], (err, rows) => {
        if (err) {
            return callback(err);
        }
        callback(null, rows);
    });
};

// Fonction pour obtenir un utilisateur par son téléphone
const getUtilisateurByTelephone = (telephone, callback) => {
    const query = `SELECT * FROM utilisateur WHERE telephone =?`;
    db.get(query, [telephone], (err, row) => {
        if (err) {
            return callback(err);
        }
        callback(null, row);
    });
};

// Fonction pour obtenir un utilisateur par son adresse
const getUtilisateurByAdresse = (adresse, callback) => {
    const query = `SELECT * FROM utilisateur WHERE adresse =?`;
    db.get(query, [adresse], (err, row) => {
        if (err) {
            return callback(err);
        }
        callback(null, row);
    });
};

// Fonction pour obtenir un utilisateur par sa ville
const getUtilisateurByVille = (ville, callback) => {
    const query = `SELECT * FROM utilisateur WHERE ville =?`;
    db.get(query, [ville], (err, row) => {
        if (err) {
            return callback(err);
        }
        callback(null, row);
    });
};

// Fonction pour modifier un utilisateur
const updateUtilisateur = (id, utilisateur, callback) => {
    const { nom, prenom, email, mot_de_passe, role, telephone, adresse, ville } = utilisateur;
    const query = `UPDATE utilisateur SET nom =?, prenom =?, email =?, mot_de_passe =?, role =?, telephone =?, adresse =?, ville =? WHERE id =?`;

    db.run(query, [nom, prenom, email, mot_de_passe, role, telephone, adresse, ville, id], function(err) {
        if (err) {
            return callback(err);
        }
        callback(null, this.changes === 1); // Renvoie vrai si la modification a réussi
    });
};

// Fonction pour supprimer un utilisateur
const deleteUtilisateur = (id, callback) => {
    const query = `DELETE FROM utilisateur WHERE id =?`;
    db.run(query, [id], function(err) {
        if (err) {
            return callback(err);
        }
        callback(null, this.changes === 1); // Renvoie vrai si la suppression a réussi
    });
};



module.exports = { addUtilisateur, getAllUtilisateurs, getUtilisateurById, getUtilisateurByName, getUtilisateurByPrenom, getUtilisateurByEmail, getUtilisateurByRole, getUtilisateurByTelephone, getUtilisateurByAdresse, getUtilisateurByVille, updateUtilisateur, deleteUtilisateur };
