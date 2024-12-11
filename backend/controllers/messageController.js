const db = require('../config/db');

// Récupérer tous les messages
exports.getAllMessages = (req, res) => {
    const sql = 'SELECT * FROM messages';
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching messages', error: err.message });
        }
        res.status(200).json(rows);
    });
};

// Créer un nouveau message
exports.createMessage = (req, res) => {
    const { id, utilisateur_id, entreprise_id, message } = req.body;

    const sql = 'INSERT INTO messages (id,  utilisateur_id, entreprise_id, message) VALUES (?,?,?,?)';
    db.run(sql, [ id, utilisateur_id, entreprise_id, message], function (err) {
        if (err) {
            return res.status(500).json({ message: 'Error creating message', error: err.message });
        }
        res.status(201).json({ id: this.lastID, utilisateur_id, entreprise_id, message });
    });
};