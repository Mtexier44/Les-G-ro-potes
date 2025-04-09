const Reservation = require('../models/Reservation'); // Import du modèle

// Ajouter une réservation
const addReservation = (req, res) => {
  const { utilisateur_id, service_id, date_reservation, status, notes } = req.body;

  Reservation.addReservation({ utilisateur_id, service_id, date_reservation, status, notes }, (err, newReservationId) => {
    if (err) {
      return res.status(500).json({ message: 'Erreur lors de l\'ajout de la réservation', error: err.message });
    }
    return res.status(201).json({ message: 'Réservation ajoutée avec succès', id: newReservationId });
  });
};

// Récupérer toutes les réservations d'un utilisateur
const getReservationsByUtilisateur = (req, res) => {
  const { utilisateur_id } = req.params;

  Reservation.getReservationsByUtilisateur(utilisateur_id, (err, reservations) => {
    if (err) {
      return res.status(500).json({ message: 'Erreur lors de la récupération des réservations', error: err.message });
    }

    if (reservations.length === 0) {
      return res.status(404).json({ message: 'Aucune réservation trouvée pour cet utilisateur' });
    }

    return res.status(200).json(reservations);
  });
};

// Récupérer une réservation par son ID
const getReservationById = (req, res) => {
  const { id } = req.params;

  Reservation.getReservationById(id, (err, reservation) => {
    if (err) {
      return res.status(500).json({ message: 'Erreur lors de la récupération de la réservation', error: err.message });
    }

    if (!reservation) {
      return res.status(404).json({ message: 'Réservation non trouvée' });
    }

    return res.status(200).json(reservation);
  });
};

// Récupérer des réservations par service_id
const getReservationByServiceId = (req, res) => {
  const { service_id } = req.params;

  Reservation.getReservationByServiceId(service_id, (err, reservations) => {
    if (err) {
      return res.status(500).json({ message: 'Erreur lors de la récupération des réservations', error: err.message });
    }

    return res.status(200).json(reservations);
  });
};

// Récupérer des réservations par statut
const getReservationByStatus = (req, res) => {
  const { status } = req.params;

  Reservation.getReservationByStatus(status, (err, reservations) => {
    if (err) {
      return res.status(500).json({ message: 'Erreur lors de la récupération des réservations par statut', error: err.message });
    }

    return res.status(200).json(reservations);
  });
};

// Mettre à jour une réservation
const updateReservation = (req, res) => {
  const { id } = req.params;
  const { utilisateur_id, service_id, date_reservation, status, notes } = req.body;

  Reservation.updateReservation(id, { utilisateur_id, service_id, date_reservation, status, notes }, (err) => {
    if (err) {
      return res.status(500).json({ message: 'Erreur lors de la mise à jour de la réservation', error: err.message });
    }
    return res.status(200).json({ message: 'Réservation mise à jour avec succès' });
  });
};

// Supprimer une réservation
const deleteReservation = (req, res) => {
  const { id } = req.params;

  Reservation.deleteReservation(id, (err) => {
    if (err) {
      return res.status(500).json({ message: 'Erreur lors de la suppression de la réservation', error: err.message });
    }
    return res.status(200).json({ message: 'Réservation supprimée avec succès' });
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


