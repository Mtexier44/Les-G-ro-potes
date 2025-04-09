const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserInfo } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware'); // Pour protéger certaines routes avec JWT
const { registerUserValidator, loginUserValidator, handleValidationErrors } = require('../utils/validator');

// Route pour l'inscription d'un utilisateur avec validation
router.post('/register', registerUserValidator, handleValidationErrors, registerUser);

// Route pour la connexion d'un utilisateur avec validation
router.post('/login', loginUserValidator, handleValidationErrors, loginUser);

// Route pour récupérer les informations de l'utilisateur connecté
// Cette route est protégée par un middleware d'authentification JWT
router.get('/me', authMiddleware, getUserInfo);

module.exports = router;

