const express = require('express');
const { getAllSequences, getSequenceById, createSequence, updateSequence, deleteSequence } = require('../controllers/sqliteSequenceController');
const router = express.Router();

router.get('/', getAllSequences);
router.get('/:tableName', getSequenceById);
router.put('/:tableName', updateSequence);
router.post('/', createSequence);
router.delete('/:tableName', deleteSequence);

module.exports = router;