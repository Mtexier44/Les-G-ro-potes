const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Définir le chemin vers la base de données SQLite
const dbPath = path.join(__dirname, '../database/create_tables.db');

// Créer une connexion à la base de données SQLite
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Erreur lors de la connexion à la base de données SQLite:', err.message);
        process.exit(1);
    }
    console.log('Connexion réussie à la base de données SQLite.');
});

module.exports = db;