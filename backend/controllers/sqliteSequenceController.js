const SqliteSequence = require('../models/sqliteSequence');

exports.getAllSequences = async (req, res) => {
    try {
        const sequences = await SqliteSequence.getAllSequences();
        res.json(sequences);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération des séquences' });
    }
};

exports.getSequenceById = async (req, res) => {
    const { tableName } = req.params;

    try {
        const sequence = await SqliteSequence.getSequenceById(tableName);
        if (sequence) {
            res.json(sequence);
        } else {
            res.status(404).json({ message: `Pas de séquence trouvée pour la table ${tableName}` });
        }
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération de la séquence' });
    }
};


exports.createSequence = async (req, res) => {
    const { tableName, seq } = req.body;

    try {
        const result = await SqliteSequence.createSequence(tableName, seq);
        if (result.changes > 0) {
            res.status(201).json({ message: 'Séquence créée avec succès' });
        } else {
            res.status(400).json({ message: 'Erreur lors de la création de la séquence' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la création de la séquence' });
    }
};

exports.updateSequence = async (req, res) => {
    const { tableName } = req.params;
    const { seq } = req.body;

    try {
        const result = await SqliteSequence.updateSequence(tableName, seq);
        if (result.changes > 0) {
            res.json({ message: 'Séquence mise à jour avec succès' });
        } else {
            res.status(404).json({ message: `Pas de séquence trouvée pour la table ${tableName}` });
        }
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la mise à jour de la séquence' });
    }
};

exports.deleteSequence = async (req, res) => {
    const { tableName } = req.params;

    try {
        const result = await SqliteSequence.deleteSequence(tableName);
        if (result.changes > 0) {
            res.json({ message: 'Séquence supprimée avec succès' });
        } else {
            res.status(404).json({ message: `Pas de séquence trouvée pour la table ${tableName}` });
        }
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la suppression de la séquence' });
    }
};