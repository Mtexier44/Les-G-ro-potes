const { DataTypes} = require('sequelize');
const db = require('../database/create_tables.db');

const Reservation = db.define('Reservation', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    utilisateur_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    service_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    
    date_reservation: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    
    status: {
        type: DataTypes.ENUM('en_attente', 'acceptee', 'refusee'),
        allowNull: false,
    },

    notes: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
}, {
    timestamps: true,
    paranoid: true,
});

module.exports = Reservation;