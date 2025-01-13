const Reservation = require('../models/reservation');

exports.getAllReservations = async (req, res) => {
    const reservations = await Reservation.findAll();
    res.json(reservations);
};

exports.getReservationById = async (req, res) => {
    const reservation = await Reservation.findByPk(req.params.id);
    if (reservation) {
        res.json(reservation);
    } else {
        res.status(404).json({ message: 'Reservation not found' });
    }
};

exports.createReservation = async (req, res) => {
    const reservation = await Reservation.create(req.body);
    res.status(201).json(reservation);
};

exports.updateReservation = async (req, res) => {
    const reservation = await Reservation.findByPk(req.params.id);
    if (reservation) {
        await reservation.update(req.body);
        res.json(reservation);
    } else {
        res.status(404).json({ message: 'Reservation not found' });
    }
};

exports.deleteReservation = async (req, res) => {
    const reservation = await Reservation.findByPk(req.params.id);
    if (reservation) {
        await reservation.destroy();
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Reservation not found' });
    }
};