const { DataTypes } = require('sequelize');
const db = require('../database/create_tables.db');

const Avis = db.define('Avis', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    utilisateur_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    
    entreprise_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    service_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    note: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },

    commentaire: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    date_avis: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    timestamps: true,
    paranoid: true,
});

module.exports = Avis;
