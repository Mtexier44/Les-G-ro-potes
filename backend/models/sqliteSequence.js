const { DataTypes } = require('sequelize');
const db = require('../database/create_tables.db');


const SqliteSequence = {
    // Récupérer toutes les séquences
    getAllSequences: () => {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM sqlite_sequence`;
            db.all(query, [], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    },

    // Récupérer la séquence d'une table spécifique
    getSequenceByTable: (tableName) => {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM sqlite_sequence WHERE name = ?`;
            db.get(query, [tableName], (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }
            });
        });
    },

    // Créer une séquence spécifique
    createSequence: (tableName, seq) => {
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO sqlite_sequence (name, seq) VALUES (?,?)`;
            db.run(query, [tableName, seq], function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve({ changes: this.changes });
                }
            });
        });
    },

    // Supprimer une séquence spécifique
    deleteSequence: (tableName) => {
        return new Promise((resolve, reject) => {
            const query = `DELETE FROM sqlite_sequence WHERE name =?`;
            db.run(query, [tableName], function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve({ changes: this.changes });
                }
            });
        });
    },

    // Mettre à jour une séquence spécifique
    updateSequence: (tableName, seq) => {
        return new Promise((resolve, reject) => {
            const query = `UPDATE sqlite_sequence SET seq = ? WHERE name = ?`;
            db.run(query, [seq, tableName], function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve({ changes: this.changes });
                }
            });
        });
    },
};

module.exports = SqliteSequence;