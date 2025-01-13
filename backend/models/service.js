const { DataTypes } = require('sequelize');
const db = require('../database/create_tables.db');

const Service = db.define('Service', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    entreprise_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    type_service: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    prix: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },

    localisation: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
});

module.exports = Service;