const db = require('../config/db');

// Récupérer toutes les entreprises
exports.getAllEntreprises = (req, res) => {
    const sql = 'SELECT * FROM entreprises';
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching entreprises', error: err.message });
        }
        res.status(200).json(rows);
    });
};

// Créer une nouvelle entreprise
exports.createEntreprise = (req, res) => {
    const { id, nom, type_entreprise, email, telephone, adresse } = req.body;
    const sql = 'INSERT INTO entreprises (id, nom, type_entreprise, email, telephone, adresse) VALUES (?,?,?,?,?,?)';
    db.run(sql, [id, nom, type_entreprise, email, telephone, adresse], function (err) {
        if (err) {
            return res.status(500).json({ message: 'Error creating entreprise', error: err.message });
        }
        res.status(201).json({ id: this.lastID, id, nom, type_entreprise, email, telephone, adresse });
    });
};

// Récupérer une entreprise par son ID
exports.getEntrepriseById = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM entreprises WHERE id =?';
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
    const { nom, type_entreprise, email, telephone, adresse } = req.body;
    const sql = 'UPDATE entreprises SET nom =?, type_entreprise =?, email =?, telephone =?, adresse =? WHERE id =?';
    db.run(sql, [nom, type_entreprise, email, telephone, adresse, id], (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error updating entreprise', error: err.message });
        }
        res.status(200).json({ message: 'Entreprise updated successfully' });
    });
};

// Supprimer une entreprise
exports.deleteEntreprise = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM entreprises WHERE id =?';
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
    const sql = 'SELECT * FROM entreprises WHERE type_entreprise =?';
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
    const sql = 'SELECT * FROM entreprises WHERE email =?';
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
    const sql = 'SELECT * FROM entreprises WHERE telephone =?';
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
    const sql = 'SELECT * FROM entreprises WHERE adresse =?';
    db.all(sql, [adresse], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching entreprises', error: err.message });
        }
        res.status(200).json(rows);
    });
};

// Supprimer toutes les entreprises
exports.deleteAllEntreprises = (req, res) => {
    const sql = 'DELETE FROM entreprises';
    db.run(sql, [], (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error deleting all entreprises', error: err.message });
        }
        res.status(200).json({ message: 'Entreprises deleted successfully' });
    });
};