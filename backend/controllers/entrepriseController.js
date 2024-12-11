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