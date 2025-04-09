require('dotenv').config();
const express = require('express');
const app = express();

// Importation des routes
const entrepriseRoutes = require('./routes/entrepriseRoutes');
const utilisateurRoutes = require('./routes/utilisateurRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const reservationRoutes = require('./routes/reservationRoutes');
const log_activityRoutes = require('./routes/log_ActivityRoutes');
const messageRoutes = require('./routes/messageRoutes');
const avisRoutes = require('./routes/avisRoutes');
const authRoutes = require('./routes/authRoutes'); 

// Middleware pour parser le body en JSON
app.use(express.json());

// Routes d'authentification
app.use('/api/auth', authRoutes); 

// Routes des entreprises
app.use('/entreprises', entrepriseRoutes);

// Routes des utilisateurs
app.use('/api/utilisateurs', utilisateurRoutes);

// Routes des services
app.use('/api/services', serviceRoutes);

// Routes des réservations
app.use('/api/reservations', reservationRoutes);

// Routes des logs d'activité
app.use('/api/logs-activite', log_activityRoutes);

// Routes des messages
app.use('/api/messages', messageRoutes);

// Routes des avis
app.use('/api/avis', avisRoutes);

// Gestion des erreurs globales pour les routes non trouvées
app.use((req, res) => {
    res.status(404).json({ message: "Route non trouvée", url: req.originalUrl, method: req.method });
});

// Middleware de gestion des erreurs globales (si une erreur se produit dans l'une des routes)
app.use((err, req, res) => { 
    console.error(`Erreur sur ${req.method} ${req.originalUrl} (IP: ${req.ip})`);
    console.error(err.stack); 

    // Vérification si l'erreur contient un statut personnalisé
    if (err.status) {
        return res.status(err.status).json({ message: err.message });
    }

    // Si l'erreur n'a pas de statut personnalisé, renvoyer une erreur 500
    return res.status(500).json({ message: 'Une erreur interne s\'est produite', error: err.message });
});

// Lancer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});
