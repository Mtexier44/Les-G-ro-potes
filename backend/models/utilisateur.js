const { DataTypes } = require('sequelize');
const db = require('../database/create_tables.db');

const Utilisateur = db.define('Utilisateur', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    prenom: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    mot_de_passe: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: 'client'||'prestataire' || 'bénévol' 
    },

    telephone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },

    adresse: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    ville: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
});

module.exports = Utilisateur;