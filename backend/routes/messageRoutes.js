const express = require('express');
const { getMessages, getMessageById, createMessage, updateMessage, deleteMessage } = require('../controllers/messageController');
const router = express.Router();

router.get('/', getMessages);
router.get('/:id', getMessageById);
router.post('/', createMessage);
router.put('/:id', updateMessage);
router.delete('/:id', deleteMessage);

module.exports = router;