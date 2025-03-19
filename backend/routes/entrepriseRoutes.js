const express = require('express');
const router = express.Router();
const entrepriseController = require('../controllers/entrepriseController');

// Route pour ajouter une entreprise
router.post('/add', entrepriseController.addEntreprise);

// Route pour obtenir toutes les entreprises
router.get('/', entrepriseController.getAllEntreprises);

// Route pour obtenir une entreprise par son ID
router.get('/:id', entrepriseController.getEntrepriseById);

// Route pour obtenir une entreprise par son nom
router.get('/name/:nom', entrepriseController.getEntrepriseByName);

// Route pour obtenir une entreprise par son email
router.get('/email/:email', entrepriseController.getEntrepriseByEmail);

// Route pour obtenir une entreprise par son téléphone
router.get('/telephone/:telephone', entrepriseController.getEntrepriseByTelephone);

// Route pour obtenir une entreprise par son adresse
router.get('/adresse/:adresse', entrepriseController.getEntrepriseByAdresse);

// Route pour obtenir une entreprise par les villes desservies
router.get('/villes-desservies/:villes_desservies', entrepriseController.getEntrepriseByVillesDesservies);

// Route pour obtenir une entreprise par son nombre de patients
router.get('/nombre-patients/:nombre_patients', entrepriseController.getEntrepriseByNombrePatients);

// Route pour obtenir une entreprise par sa description des services
router.get('/description-services/:description_services', entrepriseController.getEntrepriseByDescriptionServices);

// Route pour obtenir une entreprise par son logo
router.get('/logo/:logo', entrepriseController.getEntrepriseByLogo);

// Route pour obtenir une entreprise par ses photos
router.get('/photos/:photos', entrepriseController.getEntrepriseByPhotos);

// Route pour obtenir une entreprise par ses vidéos
router.get('/videos/:videos', entrepriseController.getEntrepriseByVideos);

// Route pour mettre à jour une entreprise
router.put('/update/:id', entrepriseController.updateEntreprise);

// Route pour supprimer une entreprise
router.delete('/delete/:id', entrepriseController.deleteEntreprise);

module.exports = router;

