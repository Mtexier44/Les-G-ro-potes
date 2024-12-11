 
 const sqlite3 = require('sqlite3').verbose();
 const path = require('path');

 // Chemin vers la base de données SQLite
 const dbpath = path.join(__dirname, '..', 'database', 'create_tables.db');

 // Créer une instance de la base de données SQLite
 const db = new sqlite3.Database(dbpath, (err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
    }else {
        console.log('Connected to the SQLite database.');
    }
 });

 module.exports = db;