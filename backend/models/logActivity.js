const { DataTypes } = require('sequelize');
const db = require('../database/create_tables.db');

const LogActivity = db.define('LogActivity', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    utilisateur_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    action: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date_action: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    
    details: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
}, {
    timestamps: true,
    paranoid: true,
});

module.exports = LogActivity;