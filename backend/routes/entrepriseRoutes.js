const express = require('express');
const { getEntreprises, getEntrepriseById, createEntreprise, updateEntreprise, deleteEntreprise } = require('../controllers/entrepriseController');
const router = express.Router();

router.get('/', getEntreprises);
router.get('/:id', getEntrepriseById);
router.post('/', createEntreprise);
router.put('/:id', updateEntreprise);
router.delete('/:id', deleteEntreprise);

module.exports = router;