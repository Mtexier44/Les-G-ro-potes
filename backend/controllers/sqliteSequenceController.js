const db = require('../config/db');

// Récupérer toutes les sqlite_sequences
exports.getAllSequences = (req, res) => {
    const sql = 'SELECT name, seq FROM sqlite_sequence';
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching sqlite_sequences', error: err.message });
        }
        res.status(200).json(rows);
    });
};

// Créer une nouvelle sqlite_sequence
exports.createSequence = (req, res) => {
    const { name, seq } = req.body;
    const sql = 'INSERT INTO sqlite_sequence (name, seq) VALUES (?,?)';
    db.run(sql, [name, seq], function (err) {
        if (err) {
            return res.status(500).json({ message: 'Error creating sqlite_sequence', error: err.message });
        }
        res.status(201).json({ id: this.lastID, name, seq });
    });
};

// Récupérer une sqlite_sequence par son name
exports.getSequenceByName = (req, res) => {
    const { name } = req.params;
    const sql = 'SELECT * FROM sqlite_sequence WHERE name =?';
    db.get(sql, [name], (err, row) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching sqlite_sequence', error: err.message });
        }
        if (!row) {
            return res.status(404).json({ message: 'sqlite_sequence not found' });
        }
        res.status(200).json(row);
    });
};

// Modifier une sqlite_sequence
exports.updateSequence = (req, res) => {
    const { name } = req.params;
    const { seq } = req.body;
    const sql = 'UPDATE sqlite_sequence SET seq =? WHERE name =?';
    db.run(sql, [seq, name], (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error updating sqlite_sequence', error: err.message });
        }
        res.status(200).json({ message: 'sqlite_sequence updated successfully' });
    });
};

// Supprimer une sqlite_sequence par son name
exports.deleteSequenceByName = (req, res) => {
    const { name } = req.params;
    const sql = 'DELETE FROM sqlite_sequence WHERE name =?';
    db.run(sql, [name], (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error deleting sqlite_sequence', error: err.message });
        }
        res.status(200).json({ message: 'sqlite_sequence deleted successfully' });
    });
};

// Supprimer une sqlite_sequence par son name
exports.deleteSequencesByName = (req, res) => {
    const { name } = req.body;
    const sql = 'DELETE FROM sqlite_sequence WHERE name IN (?)';
    db.run(sql, [name], (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error deleting sqlite_sequences', error: err.message });
        }
        res.status(200).json({ message: 'sqlite_sequences deleted successfully' });
    });
};