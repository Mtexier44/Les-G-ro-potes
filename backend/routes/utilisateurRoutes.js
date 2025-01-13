const express = require('express');
const { getAllUtilisateurs, getUtilisateurById, createUtilisateur, updateUtilisateur, deleteUtilisateur } = require('../controllers/utilisateurController');
const router = express.Router();

router.get('/', getAllUtilisateurs);
router.get('/:id', getUtilisateurById);
router.post('/', createUtilisateur);
router.put('/:id', updateUtilisateur);
router.delete('/:id', deleteUtilisateur);

module.exports = router;