const express = require('express');
const router = express.Router();
const utilisateurController = require('../controllers/utilisateurController');

// Route pour ajouter un utilisateur
router.post('/', utilisateurController.addUtilisateur);

// Route pour obtenir tous les utilisateurs
router.get('/', utilisateurController.getAllUtilisateurs);

// Route pour obtenir un utilisateur par ID
router.get('/:id', utilisateurController.getUtilisateurById);

// Route pour obtenir un utilisateur par nom
router.get('/nom/:nom', utilisateurController.getUtilisateurByName);

// Route pour obtenir un utilisateur par prénom
router.get('/prenom/:prenom', utilisateurController.getUtilisateurByPrenom);

// Route pour obtenir un utilisateur par email
router.get('/email/:email', utilisateurController.getUtilisateurByEmail);

// Route pour obtenir un utilisateur par rôle
router.get('/role/:role', utilisateurController.getUtilisateurByRole);

// Route pour obtenir un utilisateur par téléphone
router.get('/telephone/:telephone', utilisateurController.getUtilisateurByTelephone);

// Route pour obtenir un utilisateur par adresse
router.get('/adresse/:adresse', utilisateurController.getUtilisateurByAdresse);

// Route pour obtenir un utilisateur par ville
router.get('/ville/:ville', utilisateurController.getUtilisateurByVille);

// Route pour mettre à jour un utilisateur par ID
router.put('/:id', utilisateurController.updateUtilisateur);

// Route pour supprimer un utilisateur par ID
router.delete('/:id', utilisateurController.deleteUtilisateur);

module.exports = router;