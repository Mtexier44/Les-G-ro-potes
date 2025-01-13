const express = require('express');
const { getLogs, getLogById, createLog, updateLog, deleteLog } = require('../controllers/logActivityController');
const router = express.Router();

router.get('/', getLogs);
router.get('/:id', getLogById);
router.post('/', createLog);
router.put('/:id', updateLog);
router.delete('/:id', deleteLog);

module.exports = router;