const express = require('express');
const router = express.Router();
const avisController = require('../controllers/avisController');

// Routes liées aux avis
router.post('/avis', avisController.addAvis);
router.get('/avis/entreprise/:entreprise_id', avisController.getAvisByEntreprise);
router.get('/avis/service/:service_id', avisController.getAvisByService);
router.get('/avis/:avis_id', avisController.getAvisById);
router.delete('/avis/:avis_id', avisController.deleteAvis);
router.put('/avis/:avis_id', avisController.updateAvis);

module.exports = router;
