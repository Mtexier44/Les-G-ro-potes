const db = require('../config/db');

// Récupérer tous les log_activities
exports.getAllLogActivities = (req, res) => {
    const sql = 'SELECT * FROM log_activity';
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching log_activities', error: err.message });
        }
        res.status(200).json(rows);
    });
};

// Créer un nouveau log_activity
exports.createLogActivity = (req, res) => {
    const { id, utilisateur_id, action, date_action, details } = req.body;
    const sql = 'INSERT INTO log_activity (id, utilisateur_id, action, date_action, details) VALUES (?,?,?,?,?)';
    db.run(sql, [id, utilisateur_id, action, date_action, details ], function (err) {
        if (err) {
            return res.status(500).json({ message: 'Error creating log_activity', error: err.message });
        }
        res.status(201).json({ id: this.lastID, utilisateur_id, action, date_action, details });
    });
};

// Récupérer un log_activity par son ID
exports.getLogActivityById = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM log_activity WHERE id =?';
    db.get(sql, [id], (err, row) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching log_activity', error: err.message });
        }
        if (!row) {
            return res.status(404).json({ message: 'Log_activity not found' });
        }
        res.status(200).json(row);
    });
};


// Modifier un log_activity
exports.updateLogActivity = (req, res) => {
    const { id } = req.params;
    const { utilisateur_id, action, date_action, details } = req.body;
    const sql = 'UPDATE log_activity SET utilisateur_id =?, action =?, date_action =?, details =? WHERE id =?';
    db.run(sql, [utilisateur_id, action, date_action, details, id], (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error updating log_activity', error: err.message });
        }
        res.status(200).json({ message: 'Log_activity updated successfully' });
    });
};

// Supprimer un log_activity
exports.deleteLogActivity = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM log_activity WHERE id =?';
    db.run(sql, [id], (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error deleting log_activity', error: err.message });
        }
        res.status(200).json({ message: 'Log_activity deleted successfully' });
    });
};

// Récupérer les log_activities d'un utilisateur
exports.getLogActivitiesByUserId = (req, res) => {
    const { utilisateur_id } = req.params;
    const sql = 'SELECT * FROM log_activity WHERE utilisateur_id =?';
    db.all(sql, [utilisateur_id], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching log_activities', error: err.message });
        }
        res.status(200).json(rows);
    });
};