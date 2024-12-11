const db = require('../config/db');

// Récupérer tous les avis
exports.getAllAvis = (req, res) => {
    const sql = 'SELECT * FROM avis';
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching avis', error: err.message });
        }
        res.status(200).json(rows);
    });
};

// Créer un nouveau avis
exports.createAvis = (req, res) => {
    const { id, utilisateur_id, entreprise_id, service_id, note, commentaire, date_avis } = req.body;
    const sql = 'INSERT INTO avis (id, utilisateur_id, entreprise_id, service_id, note, commentaire, date_avis) VALUES (?,?,?,?,?,?,?)';
    db.run(sql, [id, utilisateur_id, entreprise_id, service_id, note, commentaire, date_avis], function (err) {
        if (err) {
            return res.status(500).json({ message: 'Error creating avis', error: err.message });
        }
        res.status(201).json({ id: this.lastID, utilisateur_id, entreprise_id, service_id, note, commentaire, date_avis });
    });
};

// Récupérer un avis par son ID
exports.getAvisById = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM avis WHERE id =?';
    db.get(sql, [id], (err, row) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching avis', error: err.message });
        }
        if (!row) {
            return res.status(404).json({ message: 'Avis not found' });
        }
        res.status(200).json(row);
    });
};


// Modifier un avis
exports.updateAvis = (req, res) => {
    const { id } = req.params;
    const { utilisateur_id, entreprise_id, service_id, note, commentaire, date_avis } = req.body;
    const sql = 'UPDATE avis SET utilisateur_id =?, entreprise_id =?, service_id =?, note =?, commentaire =?, date_avis =? WHERE id =?';
    db.run(sql, [utilisateur_id, entreprise_id, service_id, note, commentaire, date_avis, id], (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error updating avis', error: err.message });
        }
        res.status(200).json({ message: 'Avis updated successfully' });
    });
};

// Supprimer un avis
exports.deleteAvis = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM avis WHERE id =?';
    db.run(sql, [id], (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error deleting avis', error: err.message });
        }
        res.status(200).json({ message: 'Avis deleted successfully' });
    });
};

// Récupérer les avis d'une entreprise
exports.getAvisByEntrepriseId = (req, res) => {
    const { entreprise_id } = req.params;
    const sql = 'SELECT * FROM avis WHERE entreprise_id =?';
    db.all(sql, [entreprise_id], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching avis', error: err.message });
        }
        res.status(200).json(rows);
    });
};

// Récupérer les avis d'un utilisateur
exports.getAvisByUserId = (req, res) => {
    const { utilisateur_id } = req.params;
    const sql = 'SELECT * FROM avis WHERE utilisateur_id =?';
    db.all(sql, [utilisateur_id], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching avis', error: err.message });
        }
        res.status(200).json(rows);
    });
};

// Récupérer les avis d'un service
exports.getAvisByServiceId = (req, res) => {
    const { service_id } = req.params;
    const sql = 'SELECT * FROM avis WHERE service_id =?';
    db.all(sql, [service_id], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching avis', error: err.message });
        }
        res.status(200).json(rows);
    });
};

// Récupérer les avis d'une note
exports.getAvisByNote = (req, res) => {
    const { note } = req.params;
    const sql = 'SELECT * FROM avis WHERE note =?';
    db.all(sql, [note], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching avis', error: err.message });
        }
        res.status(200).json(rows);
    });
};

// Récupérer les avis d'un commentaire
exports.getAvisByCommentaire = (req, res) => {
    const { commentaire } = req.params;
    const sql = 'SELECT * FROM avis WHERE commentaire =?';
    db.all(sql, [commentaire], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching avis', error: err.message });
        }
        res.status(200).json(rows);
    });
};

// Récupérer les avis d'une date d'avis
exports.getAvisByDateAvis = (req, res) => {
    const { date_avis } = req.params;
    const sql = 'SELECT * FROM avis WHERE date_avis =?';
    db.all(sql, [date_avis], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching avis', error: err.message });
        }
        res.status(200).json(rows);
    });
};