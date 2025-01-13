const { DataTypes} = require('sequelize');
const db = require('../database/create_tables.db');

const Entreprise = db.define('Entreprise', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type_entreprise: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
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

    villes_desservies: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
    },

    nombre_patients: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    description_services: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    logo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    photos: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    videos: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
    }, 
}, {
    timestamps: true,
    paranoid: true,
});

module.exports = Entreprise;