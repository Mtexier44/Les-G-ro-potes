const db = require('../config/db');

// Récupérer tous les utilisateurs
exports.getAllUtilisateurs = (req, res) => {
    const sql = 'SELECT * FROM utilisateur';
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching utilisateurs', error: err.message });
        }
        res.status(200).json(rows);
    });
};

// Créer un nouveau utilisateur
exports.createUser = (req, res) => {
    const { id, nom, prenom, email, mot_de_passe, role, telephone, adresse, ville } = req.body;

    const sql = 'INSERT INTO utilisateur (id, nom, prenom, email, mot_de_passe, role, telephone, adresse, ville) VALUES (?,?,?,?,?,?,?,?,?)';
    db.run(sql, [id, nom, prenom, email, mot_de_passe, role, telephone, adresse, ville], function (err) {
        if (err) {
            return res.status(500).json({ message: 'Error creating utilisateur', error: err.message });
        }
        res.status(201).json({ id: this.lastID, nom, prenom, email, mot_de_passe, role, telephone, adresse, ville });
    });
};

// Récupérer un utilisateur par son ID
exports.getUserById = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM utilisateur WHERE id =?';
    db.get(sql, [id], (err, row) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching utilisateur', error: err.message });
        }
        if (!row) {
            return res.status(404).json({ message: 'Utilisateur not found' });
        }
        res.status(200).json(row);
    });
};

// Modifier un utilisateur
exports.updateUser = (req, res) => {
    const { id } = req.params;
    const { nom, prenom, email, mot_de_passe, role, telephone, adresse, ville } = req.body;

    const sql = 'UPDATE utilisateur SET nom=?, prenom=?, email=?, mot_de_passe=?, role=?, telephone=?, adresse=?, ville=? WHERE id=?';
    db.run(sql, [nom, prenom, email, mot_de_passe, role, telephone, adresse, ville, id], (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error updating utilisateur', error: err.message });
        }
        res.status(200).json({ message: 'Utilisateur updated successfully' });
    });
};

// Supprimer un utilisateur
exports.deleteUser = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM utilisateur WHERE id =?';
    db.run(sql, [id], (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error deleting utilisateur', error: err.message });
        }
        res.status(200).json({ message: 'Utilisateur deleted successfully' });
    });
};

// Récupérer tous les utilisateurs par rapport à leur rôle
exports.getUsersByRole = (req, res) => {
    const { role } = req.params;
    const sql = 'SELECT * FROM utilisateur WHERE role =?';
    db.all(sql, [role], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching utilisateur', error: err.message });
        }
        res.status(200).json(rows);
    });
};

// Récupérer tous les utilisateurs par rapport à leur adresse
exports.getUsersByAdresse = (req, res) => {
    const { adresse } = req.params;
    const sql = 'SELECT * FROM utilisateur WHERE adresse =?';
    db.all(sql, [adresse], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching utilisateur', error: err.message });
        }
        res.status(200).json(rows);
    });
};

// Récupérer tous les utilisateurs par rapport à leur ville
exports.getUsersByVille = (req, res) => {
    const { ville } = req.params;
    const sql = 'SELECT * FROM utilisateur WHERE ville =?';
    db.all(sql, [ville], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching utilisateur', error: err.message });
        }
        res.status(200).json(rows);
    });
};

// Récupérer tous les utilisateurs par rapport à leur email
exports.getUsersByEmail = (req, res) => {
    const { email } = req.params;
    const sql = 'SELECT * FROM utilisateur WHERE email =?';
    db.all(sql, [email], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching utilisateur', error: err.message });
        }
        res.status(200).json(rows);
    });
};

// Récupérer tous les utilisateurs par rapport à leur mot de passe
exports.getUsersByMotDePasse = (req, res) => {
    const { mot_de_passe } = req.params;
    const sql = 'SELECT * FROM utilisateur WHERE mot_de_passe =?';
    db.all(sql, [mot_de_passe], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching utilisateur', error: err.message });
        }
        res.status(200).json(rows);
    });
};

// Récupérer tous les utilisateurs par rapport à leur téléphone
exports.getUsersByTelephone = (req, res) => {
    const { telephone } = req.params;
    const sql = 'SELECT * FROM utilisateur WHERE telephone =?';
    db.all(sql, [telephone], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching utilisateur', error: err.message });
        }
        res.status(200).json(rows);
    });
};

// Récupérer tous les utilisateurs par rapport à leur nom
exports.getUsersByNom = (req, res) => {
    const { nom } = req.params;
    const sql = 'SELECT * FROM utilisateur WHERE nom =?';
    db.all(sql, [nom], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching utilisateur', error: err.message });
        }
        res.status(200).json(rows);
    });
};


// Récupérer tous les utilisateurs par rapport à leur prénom
exports.getUsersByPrenom = (req, res) => {
    const { prenom } = req.params;
    const sql = 'SELECT * FROM utilisateur WHERE prenom =?';
    db.all(sql, [prenom], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching utilisateur', error: err.message });
        }
        res.status(200).json(rows);
    });
};
