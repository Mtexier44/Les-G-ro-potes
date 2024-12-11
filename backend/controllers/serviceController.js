const db = require('../config/db');

// Récupérer tous les services
exports.getAllServices = (req, res) => {
    const sql = 'SELECT * FROM service';
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching services', error: err.message });
        }
        res.status(200).json(rows);
    });
};

// Créer un nouveau service
exports.createService = (req, res) => {
    const { id, entreprise_id, type_service, description, prix, localisation } = req.body;

    const sql = 'INSERT INTO service (id, entreprise_id, type_service, description, prix, localisation) VALUES (?,?,?,?,?,?)';
    db.run(sql, [id, entreprise_id, type_service, description, prix, localisation], function (err) {
        if (err) {
            return res.status(500).json({ message: 'Error creating service', error: err.message });
        }
        res.status(201).json({ id: this.lastID, entreprise_id, type_service, description, prix, localisation });
    });
};

// Récupérer un service par son ID
exports.getServiceById = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM service WHERE id =?';
    db.get(sql, [id], (err, row) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching service', error: err.message });
        }
        if (!row) {
            return res.status(404).json({ message: 'Service not found' });
        }
        res.status(200).json(row);
    });
};

// Récupérer les services par rapport à l'entreprise_id
exports.getServiceByEntrepriseId = (req, res) => {
    const { entreprise_id } = req.params;
    const sql = 'SELECT * FROM service WHERE entreprise_id =?';
    db.all(sql, [entreprise_id], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching services', error: err.message });
        }
        res.status(200).json(rows);
    });
};

// Modifier un service
exports.updateService = (req, res) => {
    const { id } = req.params;
    const { entreprise_id, type_service, description, prix, localisation } = req.body;

    const sql = 'UPDATE service SET entreprise_id=?, type_service=?, description=?, prix=?, localisation=? WHERE id=?';
    db.run(sql, [entreprise_id, type_service, description, prix, localisation, id], (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error updating service', error: err.message });
        }
        res.status(200).json({ message: 'Service updated successfully' });
    });
};

// Supprimer un service_id par rapport à l'entreprise_id
exports.deleteServiceByEntrepriseId = (req, res) => {
    const { entreprise_id } = req.params;
    const sql = 'DELETE FROM service WHERE entreprise_id =?';
    db.run(sql, [entreprise_id], (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error deleting services by entreprise', error: err.message });
        }
        res.status(200).json({ message: 'Services by entreprise deleted successfully' });
    });
};
