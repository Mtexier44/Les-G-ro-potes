const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController'); // Importer le contrôleur

// Route pour ajouter une nouvelle réservation
router.post('/', reservationController.addReservation);

// Route pour obtenir toutes les réservations d'un utilisateur
router.get('/utilisateur/:utilisateur_id', reservationController.getReservationsByUtilisateur);

// Route pour obtenir une réservation par son ID
router.get('/:id', reservationController.getReservationById);

// Route pour obtenir des réservations par service_id
router.get('/service/:service_id', reservationController.getReservationByServiceId);

// Route pour obtenir des réservations par date
router.get('/date/:date_reservation', reservationController.getReservationByDate);

// Route pour obtenir des réservations par status
router.get('/status/:status', reservationController.getReservationByStatus);

// Route pour obtenir des réservations par notes
router.get('/notes/:notes', reservationController.getReservationByNotes);

// Route pour mettre à jour une réservation
router.put('/:id', reservationController.updateReservation);

// Route pour supprimer une réservation
router.delete('/:id', reservationController.deleteReservation);

module.exports = router;
