const express = require('express');
const { getAllReservations, getReservationById, createReservation, updateReservation, deleteReservation } = require('../controllers/reservationController');
const router = express.Router();

router.get('/', getAllReservations);
router.get('/:id', getReservationById);
router.post('/', createReservation);
router.put('/:id', updateReservation);
router.delete('/:id', deleteReservation);

module.exports = router;