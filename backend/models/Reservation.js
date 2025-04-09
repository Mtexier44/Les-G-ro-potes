const db = require('../config/db'); // Assure-toi que la connexion à ta base de données est correcte

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

// Fonction pour obtenir une réservation par son ID
const getReservationById = (reservation_id, callback) => {
    const query = `SELECT * FROM reservation WHERE id = ?`;
    db.get(query, [reservation_id], (err, row) => {
        if (err) {
            return callback(err);
        }
        callback(null, row);
    });
};

// Fonction pour obtenir des réservations par service_id
const getReservationByServiceId = (service_id, callback) => {
    const query = `SELECT * FROM reservation WHERE service_id = ?`;
    db.all(query, [service_id], (err, rows) => {
        if (err) {
            return callback(err);
        }
        callback(null, rows);
    });
};

// Fonction pour obtenir une réservation par statut
const getReservationByStatus = (status, callback) => {
    const query = `SELECT * FROM reservation WHERE status = ?`;
    db.all(query, [status], (err, rows) => {
        if (err) {
            return callback(err);
        }
        callback(null, rows);
    });
};

// Fonction pour mettre à jour une réservation
const updateReservation = (reservation_id, reservation, callback) => {
    const { utilisateur_id, service_id, date_reservation, status, notes } = reservation;
    const query = `UPDATE reservation SET utilisateur_id = ?, service_id = ?, date_reservation = ?, status = ?, notes = ?
                   WHERE id = ?`;

    db.run(query, [utilisateur_id, service_id, date_reservation, status, notes, reservation_id], (err) => {
        if (err) {
            return callback(err);
        }
        callback(null);
    });
};

// Fonction pour supprimer une réservation
const deleteReservation = (reservation_id, callback) => {
    const query = `DELETE FROM reservation WHERE id = ?`;
    db.run(query, [reservation_id], (err) => {
        if (err) {
            return callback(err);
        }
        callback(null);
    });
};

module.exports = { 
    addReservation, 
    getReservationsByUtilisateur,
    getReservationById,
    getReservationByServiceId,
    getReservationByStatus,
    updateReservation,
    deleteReservation
};

