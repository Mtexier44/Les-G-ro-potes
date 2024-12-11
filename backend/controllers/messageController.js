const db = require('../config/db');

// Récupérer tous les messages
exports.getAllMessages = (req, res) => {
    const sql = 'SELECT * FROM message';
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching messages', error: err.message });
        }
        res.status(200).json(rows);
    });
};

// Créer un nouveau message
exports.createMessage = (req, res) => {
    const { id, utilisateur_id, entreprise_id, message, date_envoi, lu } = req.body;

    const sql = 'INSERT INTO message (id,  utilisateur_id, entreprise_id, message, date_envoi, lu) VALUES (?,?,?,?,?,?)';
    db.run(sql, [ id, utilisateur_id, entreprise_id, message, date_envoi, lu], function (err) {
        if (err) {
            return res.status(500).json({ message: 'Error creating message', error: err.message });
        }
        res.status(201).json({ id: this.lastID, utilisateur_id, entreprise_id, message, date_envoi, lu });
    });
};

// Récupéer un message par son ID
exports.getMessageById = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM message WHERE id =?';
    db.get(sql, [id], (err, row) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching message', error: err.message });
        }
        if (!row) {
            return res.status(404).json({ message: 'Message not found' });
        }
        res.status(200).json(row);
    });
};

// Modifier un message
exports.updateMessage = (req, res) => {
    const { id } = req.params;
    const { utilisateur_id, entreprise_id, message } = req.body;

    const sql = 'UPDATE message SET utilisateur_id =?, entreprise_id =?, message =? WHERE id =?';
    db.run(sql, [utilisateur_id, entreprise_id, message, id], (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error updating message', error: err.message });
        }
        res.status(200).json({ message: 'Message updated successfully' });
    });
};

// Supprimer un message
exports.deleteMessage = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM message WHERE id =?';
    db.run(sql, [id], (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error deleting message', error: err.message });
        }
        res.status(200).json({ message: 'Message deleted successfully' });
    });
};

// Récupérer les messages d'une entreprise
exports.getMessagesByEntrepriseId = (req, res) => {
    const { entreprise_id } = req.params;
    const sql = 'SELECT * FROM message WHERE entreprise_id =?';
    db.all(sql, [entreprise_id], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching messages', error: err.message });
        }
        res.status(200).json(rows);
    });
};

// Récupérer les messages d'un utilisateur
exports.getMessagesByUserId = (req, res) => {
    const { utilisateur_id } = req.params;
    const sql = 'SELECT * FROM message WHERE utilisateur_id =?';
    db.all(sql, [utilisateur_id], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching messages', error: err.message });
        }
        res.status(200).json(rows);
    });
};

// Récupérer les messages d'une entreprise et d'un utilisateur
exports.getMessagesByEntrepriseAndUserId = (req, res) => {
    const { entreprise_id, utilisateur_id } = req.params;
    const sql = 'SELECT * FROM message WHERE entreprise_id =? AND utilisateur_id =?';
    db.all(sql, [entreprise_id, utilisateur_id], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching messages', error: err.message });
        }
        res.status(200).json(rows);
    });
};

// Récupérer les messages d'une entreprise et un utilisateur, triés par date
exports.getMessagesByEntrepriseAndUserIdSortedByDate = (req, res) => {
    const { entreprise_id, utilisateur_id } = req.params;
    const sql = 'SELECT * FROM message WHERE entreprise_id =? AND utilisateur_id =? ORDER BY date DESC';
    db.all(sql, [entreprise_id, utilisateur_id], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching messages', error: err.message });
        }
        res.status(200).json(rows);
    });
};

// Supprimer tous les messages
exports.deleteAllMessages = (req, res) => {
    const sql = 'DELETE FROM message';
    db.run(sql, [], (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error deleting all messages', error: err.message });
        }
        res.status(200).json({ message: 'All messages deleted successfully' });
    });
};

// Supprimer tous les messages d'une entreprise
exports.deleteMessagesByEntrepriseId = (req, res) => {
    const { entreprise_id } = req.params;
    const sql = 'DELETE FROM message WHERE entreprise_id =?';
    db.run(sql, [entreprise_id], (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error deleting messages by entreprise', error: err.message });
        }
        res.status(200).json({ message: 'Messages by entreprise deleted successfully' });
    });
};

// Supprimer tous les messages d'un utilisateur
exports.deleteMessagesByUserId = (req, res) => {
    const { utilisateur_id } = req.params;
    const sql = 'DELETE FROM message WHERE utilisateur_id =?';
    db.run(sql, [utilisateur_id], (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error deleting messages by user', error: err.message });
        }
        res.status(200).json({ message: 'Messages by user deleted successfully' });
    });
};

// Supprimer tous les messages d'une entreprise et d'un utilisateur
exports.deleteMessagesByEntrepriseAndUserId = (req, res) => {
    const { entreprise_id, utilisateur_id } = req.params;
    const sql = 'DELETE FROM message WHERE entreprise_id =? AND utilisateur_id =?';
    db.run(sql, [entreprise_id, utilisateur_id], (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error deleting messages by entreprise and user', error: err.message });
        }
        res.status(200).json({ message: 'Messages by entreprise and user deleted successfully' });
    });
};

// Supprimer tous les messages d'une entreprise et d'un utilisateur, triés par date
exports.deleteMessagesByEntrepriseAndUserIdSortedByDate = (req, res) => {
    const { entreprise_id, utilisateur_id } = req.params;
    const sql = 'DELETE FROM message WHERE entreprise_id =? AND utilisateur_id =? ORDER BY date DESC';
    db.run(sql, [entreprise_id, utilisateur_id], (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error deleting messages by entreprise and user, sorted by date', error: err.message });
        }
        res.status(200).json({ message: 'Messages by entreprise and user, sorted by date deleted successfully' });
    });
};