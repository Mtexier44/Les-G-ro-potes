const { DataTypes } = require('sequelize');
const db = require('../database/create_tables.db');

const Message = db.define('Message', {
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
    
    message: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    date_envoi: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },

    lu: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    
}, {
    timestamps: true,
    paranoid: true,
});

module.exports = Message;