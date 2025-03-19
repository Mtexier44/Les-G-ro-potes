const reservationModel = require('../models/reservation'); // Importer le modèle de réservation

// Fonction pour ajouter une réservation
const addReservation = (req, res) => {
    const reservation = req.body; // Récupère les données de la réservation envoyées dans le corps de la requête

    reservationModel.addReservation(reservation, (err, id) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de l\'ajout de la réservation', error: err });
        }
        return res.status(201).json({ message: 'Réservation ajoutée avec succès', id });
    });
};

// Fonction pour obtenir toutes les réservations d'un utilisateur
const getReservationsByUtilisateur = (req, res) => {
    const { utilisateur_id } = req.params; // Récupère l'ID de l'utilisateur à partir des paramètres de la requête

    reservationModel.getReservationsByUtilisateur(utilisateur_id, (err, reservations) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la récupération des réservations', error: err });
        }
        return res.status(200).json(reservations);
    });
};

// Fonction pour obtenir une réservation par son ID
const getReservationById = (req, res) => {
    const { id } = req.params; // Récupère l'ID de la réservation à partir des paramètres de la requête

    reservationModel.getReservationById(id, (err, reservation) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la récupération de la réservation', error: err });
        }
        if (!reservation) {
            return res.status(404).json({ message: 'Réservation non trouvée' });
        }
        return res.status(200).json(reservation);
    });
};

// Fonction pour obtenir une réservation par un service_id
const getReservationByServiceId = (req, res) => {
    const { service_id } = req.params; // Récupère l'ID du service à partir des paramètres de la requête

    reservationModel.getReservationByServiceId(service_id, (err, reservations) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la récupération des réservations par service', error: err });
        }
        return res.status(200).json(reservations);
    });
};

// Fonction pour obtenir une réservation par sa date
const getReservationByDate = (req, res) => {
    const { date_reservation } = req.params; // Récupère la date de la réservation à partir des paramètres de la requête

    reservationModel.getReservationByDate(date_reservation, (err, reservations) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la récupération des réservations par date', error: err });
        }
        return res.status(200).json(reservations);
    });
};

// Fonction pour obtenir une réservation par son status
const getReservationByStatus = (req, res) => {
    const { status } = req.params; // Récupère le status de la réservation à partir des paramètres de la requête

    reservationModel.getReservationByStatus(status, (err, reservations) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la récupération des réservations par status', error: err });
        }
        return res.status(200).json(reservations);
    });
};

// Fonction pour obtenir une réservation par ses notes
const getReservationByNotes = (req, res) => {
    const { notes } = req.params; // Récupère les notes de la réservation à partir des paramètres de la requête

    reservationModel.getReservationByNotes(notes, (err, reservations) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la récupération des réservations par notes', error: err });
        }
        return res.status(200).json(reservations);
    });
};

// Fonction pour mettre à jour une réservation
// Fonction pour mettre à jour tous les attributs d'une réservation
const updateReservation = (req, res) => {
    const { id } = req.params; // Récupère l'ID de la réservation à mettre à jour
    const reservation = req.body; // Récupère les nouvelles données de la réservation dans le corps de la requête

    // Vérifie si tous les champs nécessaires sont fournis
    if (!reservation.utilisateur_id || !reservation.service_id || !reservation.date_reservation || !reservation.status || !reservation.notes) {
        return res.status(400).json({ message: 'Tous les attributs de la réservation doivent être fournis.' });
    }

    reservationModel.updateReservation(id, reservation, (err) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la mise à jour de la réservation', error: err });
        }
        return res.status(200).json({ message: 'Réservation mise à jour avec succès' });
    });
};


// Fonction pour supprimer une réservation
const deleteReservation = (req, res) => {
    const { id } = req.params; // Récupère l'ID de la réservation à supprimer

    reservationModel.deleteReservation(id, (err) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la suppression de la réservation', error: err });
        }
        return res.status(200).json({ message: 'Réservation supprimée avec succès' });
    });
};

module.exports = {
    addReservation,
    getReservationsByUtilisateur,
    getReservationById,
    getReservationByServiceId,
    getReservationByDate,
    getReservationByStatus,
    getReservationByNotes,
    updateReservation,
    deleteReservation
};
