const express = require('express');
const { getAvis, getAvisById, createAvis, updateAvis, deleteAvis} = require('../controllers/avisController');
const router = express.Router();

router.get('/', getAvis);
router.get('/:id', getAvisById);
router.post('/', createAvis);
router.put('/:id', updateAvis);
router.delete('/:id', deleteAvis);

module.exports = router;