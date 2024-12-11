const db = require('../config/db');

// Récupérer toutes les entreprises
exports.getAllEntreprises = (req, res) => {
    const sql = 'SELECT * FROM entreprise';
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching entreprises', error: err.message });
        }
        res.status(200).json(rows);
    });
};

// Créer une nouvelle entreprise
exports.createEntreprise = (req, res) => {
    const { id, nom, type_entreprise, email, telephone, adresse, villes_desservies, nombre_patients, description_services, logo, photos, videos } = req.body;
    const sql = 'INSERT INTO entreprise (id, nom, type_entreprise, email, telephone, adresse, villes_desservies, nombre_patients, description_services, logo, photos, videos) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)';
    db.run(sql, [id, nom, type_entreprise, email, telephone, adresse, villes_desservies, nombre_patients, description_services, logo, photos, videos], function (err) {
        if (err) {
            return res.status(500).json({ message: 'Error creating entreprise', error: err.message });
        }
        res.status(201).json({ id: this.lastID, nom, type_entreprise, email, telephone, adresse, villes_desservies, nombre_patients, description_services, logo, photos, videos });
    });
};

// Récupérer une entreprise par son ID
exports.getEntrepriseById = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM entreprise WHERE id =?';
    db.get(sql, [id], (err, row) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching entreprise', error: err.message });
        }
        if (!row) {
            return res.status(404).json({ message: 'Entreprise not found' });
        }
        res.status(200).json(row);
    });
};

// Modifier une entreprise
exports.updateEntreprise = (req, res) => {
    const { id } = req.params;
    const { nom, type_entreprise, email, telephone, adresse, villes_desservies, nombre_patients, description_services, logo, photos, videos } = req.body;
    const sql = 'UPDATE entreprise SET nom =?, type_entreprise =?, email =?, telephone =?, adresse =?, villes_desservies =?, nombre_patients =?, description_services =?, logo =?, photos =?, videos =? WHERE id =?';
    db.run(sql, [nom, type_entreprise, email, telephone, adresse, villes_desservies, nombre_patients, description_services, logo, photos, videos], (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error updating entreprise', error: err.message });
        }
        res.status(200).json({ message: 'Entreprise updated successfully' });
    });
};

// Supprimer une entreprise
exports.deleteEntreprise = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM entreprise WHERE id =?';
    db.run(sql, [id], (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error deleting entreprise', error: err.message });
        }
        res.status(200).json({ message: 'Entreprise deleted successfully' });
    });
};

// Récupérer les entreprises par leur type
exports.getEntreprisesByType = (req, res) => {
    const { type_entreprise } = req.params;
    const sql = 'SELECT * FROM entreprise WHERE type_entreprise =?';
    db.all(sql, [type_entreprise], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching entreprises', error: err.message });
        }
        res.status(200).json(rows);
    });
};

// Récupérer les entreprises par leur email
exports.getEntreprisesByEmail = (req, res) => {
    const { email } = req.params;
    const sql = 'SELECT * FROM entreprise WHERE email =?';
    db.all(sql, [email], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching entreprises', error: err.message });
        }
        res.status(200).json(rows);
    });
};

// Récupérer les entreprises par leur téléphone
exports.getEntreprisesByTelephone = (req, res) => {
    const { telephone } = req.params;
    const sql = 'SELECT * FROM entreprise WHERE telephone =?';
    db.all(sql, [telephone], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching entreprises', error: err.message });
        }
        res.status(200).json(rows);
    });
};

// Récupérer les entreprises par leur adresse
exports.getEntreprisesByAdresse = (req, res) => {
    const { adresse } = req.params;
    const sql = 'SELECT * FROM entreprise WHERE adresse =?';
    db.all(sql, [adresse], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching entreprises', error: err.message });
        }
        res.status(200).json(rows);
    });
};

// Supprimer toutes les entreprises
exports.deleteAllEntreprises = (req, res) => {
    const sql = 'DELETE FROM entreprise';
    db.run(sql, [], (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error deleting all entreprises', error: err.message });
        }
        res.status(200).json({ message: 'Entreprises deleted successfully' });
    });
};