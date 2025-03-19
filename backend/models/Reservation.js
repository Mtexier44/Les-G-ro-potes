const db = require('../config/db');

// Fonction pour ajouter une réservation
const addReservation = (reservation, callback) => {
    const { utilisateur_id, service_id, date_reservation, status, notes } = reservation;
    const query = `INSERT INTO reservation (utilisateur_id, service_id, date_reservation, status, notes) 
                   VALUES (?, ?, ?, ?, ?)`;

    db.run(query, [utilisateur_id, service_id, date_reservation, status, notes], function(err) {
        if (err) {
            return callback(err);
        }
        callback(null, this.lastID); // Renvoie l'ID de la nouvelle réservation
    });
};

// Fonction pour obtenir toutes les réservations d'un utilisateur
const getReservationsByUtilisateur = (utilisateur_id, callback) => {
    const query = `SELECT * FROM reservation WHERE utilisateur_id = ?`;
    db.all(query, [utilisateur_id], (err, rows) => {
        if (err) {
            return callback(err);
        }
        callback(null, rows);
    });
};

module.exports = { addReservation, getReservationsByUtilisateur };
