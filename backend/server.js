const express = require('express');
const cors = require('cors');
const config = require('../config/config');

// Routes
const entrepriseRoutes = require('../routes/entrepriseRoutes');
const messageRoutes = require('../routes/messageRoutes');
const reservationRoutes = require('../routes/reservationRoutes');
const serviceRoutes = require('../routes/serviceRoutes');
const utilisateurRoutes = require('../routes/utilisateurRoutes');
const avisRoutes = require('../routes/avisRoutes');
const logActivityRoutes = require('../routes/logActivityRoutes');
const sqliteSequenceRoutes = require('../routes/sqliteSequenceRoutes');

const app = express();


// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/entreprises', entrepriseRoutes);
app.use('/messages', messageRoutes);
app.use('/reservations', reservationRoutes);
app.use('/services', serviceRoutes);
app.use('/utilisateurs', utilisateurRoutes);
app.use('/avis', avisRoutes);
app.use('/log_activities', logActivityRoutes);
app.use('/sqlite_sequences', sqliteSequenceRoutes);


// Error handling Middleware
app.use((req, res, next) =>{
    const error = new Error('Not Found');
    error.status = 404;
    next(error);   
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message || 'Une erreur inconnue s\'est produite.'
    });
    console.error(err.stack);
    next(err);

});

// Start the server
const PORT = process.env.PORT || config.port;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;