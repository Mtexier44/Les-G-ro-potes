const db = require ('../config/db');

// Récupérer toutes les réservations
exports.getAllReservations = (req, res) => {
    const sql = 'SELECT * FROM reservations';
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching reservations', error: err.message });
        }
        res.status(200).json(rows);
    });
};

// Créer une nouvelle réservation pour un utilisateur
exports.createReservation = (req, res) => {
    const { id, utilisateur_id, service_id, date_reservation, status } = req.body;

    const sql = 'INSERT INTO reservations (id, utilisateur_id, service_id, date_reservation, status) VALUES (?,?,?,?,?)';
    db.run(sql, [id, utilisateur_id, service_id, date_reservation, status], function (err) {
        if (err) {
            return res.status(500).json({ message: 'Error creating reservation', error: err.message });
        }
        res.status(201).json({ id: this.lastID, utilisateur_id, service_id, date_reservation, status });
    });
};

// Récupérer une réservation par son ID
exports.getReservationById = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM reservations WHERE id =?';
    db.get(sql, [id], (err, row) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching reservation', error: err.message });
        }
        if (!row) {
            return res.status(404).json({ message: 'Reservation not found' });
        }
        res.status(200).json(row);
    });
};

// Récupérer une réservation par rapport l'utilisateur_id
exports.getReservationByUtilisateurId = (req, res) => {
    const { utilisateur_id } = req.params;
    const sql = 'SELECT * FROM reservations WHERE utilisateur_id =?';
    db.all(sql, [utilisateur_id], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching reservations', error: err.message });
        }
        res.status(200).json(rows);
    });
};

// Récupérer les réservations par rapport au service_id
exports.getReservationByServiceId = (req, res) => {
    const { service_id } = req.params;
    const sql = 'SELECT * FROM reservations WHERE service_id =?';
    db.all(sql, [service_id], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching reservations', error: err.message });
        }
        res.status(200).json(rows);
    });
};

// Modifier une réservation d'utilisateur
exports.updateReservationByUtilisateurId = (req, res) => {
    const { id, utilisateur_id, service_id, date_reservation, status } = req.body;
    const sql = 'UPDATE reservations SET utilisateur_id =?, service_id =?, date_reservation =?, status =? WHERE id =?';
    db.run(sql, [utilisateur_id, service_id, date_reservation, status, id], (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error updating reservation', error: err.message });
        }
        res.status(200).json({ message: 'Reservation updated successfully' });
    });
};

// Supprimer une réservation par son ID
exports.deleteReservationById = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM reservations WHERE id =?';
    db.run(sql, [id], (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error deleting reservation', error: err.message });
        }
        res.status(200).json({ message: 'Reservation deleted successfully' });
    });
};

// Supprimer toutes les réservations pour un utilisateur
exports.deleteAllReservationsByUtilisateurId = (req, res) => {
    const { utilisateur_id } = req.params;
    const sql = 'DELETE FROM reservations WHERE utilisateur_id =?';
    db.run(sql, [utilisateur_id], (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error deleting all reservations', error: err.message });
        }
        res.status(200).json({ message: 'All reservations deleted successfully' });
    });
};

// Supprimer toutes les réservations pour un service_id
exports.deleteAllReservationsByServiceId = (req, res) => {
    const { service_id } = req.params;
    const sql = 'DELETE FROM reservations WHERE service_id =?';
    db.run(sql, [service_id], (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error deleting all reservations', error: err.message });
        }
        res.status(200).json({ message: 'All reservations deleted successfully' });
    });
};

// Supprimer toutes les réservations
exports.deleteAllReservations = (req, res) => {
    const sql = 'DELETE FROM reservations';
    db.run(sql, [], (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error deleting all reservations', error: err.message });
        }
        res.status(200).json({ message: 'All reservations deleted successfully' });
    });
};




