const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

// Route pour ajouter un service
router.post('/', serviceController.addService);

// Route pour obtenir tous les services d'une entreprise
router.get('/entreprise/:entreprise_id', serviceController.getServicesByEntreprise);

// Route pour obtenir un service par son ID
router.get('/:service_id', serviceController.getServiceById);

// Route pour obtenir un service par l'ID de l'entreprise
router.get('/entreprise-id/:entreprise_id', serviceController.getServiceByEntrepriseId);

// Route pour obtenir un service par son type
router.get('/type/:type_service', serviceController.getServiceByTypeService);

// Route pour obtenir un service par sa description
router.get('/description/:description', serviceController.getServiceByDescription);

// Route pour obtenir un service par son prix
router.get('/prix/:prix', serviceController.getServiceByPrix);

// Route pour obtenir un service par sa localisation
router.get('/localisation/:localisation', serviceController.getServiceByLocalisation);

// Route pour mettre à jour un service en modifiant tous ses attributs
router.put('/:service_id', serviceController.updateService);

// Route pour supprimer un service
router.delete('/:service_id', serviceController.deleteService);

module.exports = router;
