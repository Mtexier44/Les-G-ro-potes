const express = require('express');
const router = express.Router();
const logActivityController = require('../controllers/log_ActivityController');

// Route pour ajouter un log d'activité
router.post('/', logActivityController.addLogActivity);

// Route pour obtenir tous les logs d'activité d'un utilisateur
router.get('/utilisateur/:utilisateur_id', logActivityController.getLogsByUtilisateur);

// Route pour obtenir un log d'activité par son ID
router.get('/:id', logActivityController.getLogById);

// Route pour obtenir les logs d'activité d'un utilisateur par utilisateur_id
router.get('/utilisateurId/:utilisateur_id', logActivityController.getLogByUtilisateurId);

// Route pour obtenir les logs d'activité par action
router.get('/action/:action', logActivityController.getLogByAction);

// Route pour obtenir les logs d'activité par date_action
router.get('/date/:date_action', logActivityController.getLogByDateAction);

// Route pour obtenir les logs d'activité par détails
router.get('/details/:details', logActivityController.getLogByDetails);

// Route pour mettre à jour un log d'activité sur tous ses attributs
router.put('/:id', logActivityController.updateLogActivity);

// Route pour supprimer un log d'activité
router.delete('/:id', logActivityController.deleteLogActivity);

module.exports = router;
