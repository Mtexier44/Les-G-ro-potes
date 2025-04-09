const sqlite3 = require('sqlite3').verbose();

// Définir le chemin vers la base de données SQLite
const dbPath = '/home/christian/Les-G-ro-potes/database/create_tables.db';

// Afficher le chemin de la base de données dans la console pour le débogage
console.log("Chemin de la base de données : ", dbPath);

// Créer une connexion à la base de données SQLite
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Erreur lors de la connexion à la base de données SQLite:', err.message);
        process.exit(1);  // Quitter l'application si la connexion échoue
    }
    console.log('Connexion réussie à la base de données SQLite.');
});

module.exports = db;
