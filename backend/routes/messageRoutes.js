const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

// Route pour ajouter un message
router.post('/', messageController.addMessage);

// Route pour obtenir tous les messages d'une entreprise
router.get('/entreprise/:entreprise_id', messageController.getMessagesByEntreprise);

// Route pour obtenir un message par son ID
router.get('/:id', messageController.getMessageById);

// Route pour obtenir tous les messages d'un utilisateur
router.get('/utilisateur/:utilisateur_id', messageController.getMessageByUtilisateur);

// Route pour obtenir un message par date d'envoi
router.get('/date_envoi/:date_envoi', messageController.getMessageByDateEnvoi);

// Route pour obtenir les messages lus
router.get('/lu', messageController.getMessageLu);

// Route pour marquer un message comme lu
router.put('/lu/:id', messageController.markMessageAsLu);

// Route pour mettre à jour un message
router.put('/:id', messageController.updateMessage);

// Route pour supprimer un message
router.delete('/:id', messageController.deleteMessage);

module.exports = router;
