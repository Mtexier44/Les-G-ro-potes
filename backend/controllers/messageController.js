const Message = require('../models/Message');  // Importer le modèle Message

// Fonction pour ajouter un message
const addMessage = (req, res) => {
    const { utilisateur_id, entreprise_id, message_text, date_envoi, lu } = req.body;

    // Créer un objet message à partir des données reçues
    const message = { utilisateur_id, entreprise_id, message_text, date_envoi, lu };

    Message.addMessage(message, (err, messageId) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de l\'ajout du message', details: err });
        }
        res.status(201).json({ message: 'Message ajouté avec succès', messageId });
    });
};

// Fonction pour obtenir tous les messages d'une entreprise
const getMessagesByEntreprise = (req, res) => {
    const { entreprise_id } = req.params;

    Message.getMessagesByEntreprise(entreprise_id, (err, messages) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de la récupération des messages', details: err });
        }
        res.status(200).json(messages);
    });
};

// Fonction pour obtenir un message par son ID
const getMessageById = (req, res) => {
    const { id } = req.params;

    Message.getMessageById(id, (err, message) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de la récupération du message', details: err });
        }
        if (!message) {
            return res.status(404).json({ error: 'Message non trouvé' });
        }
        res.status(200).json(message);
    });
};

// Fonction pour obtenir tous les messages d'un utilisateur
const getMessageByUtilisateur = (req, res) => {
    const { utilisateur_id } = req.params;

    Message.getMessageByUtilisateur(utilisateur_id, (err, messages) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de la récupération des messages', details: err });
        }
        res.status(200).json(messages);
    });
};

// Fonction pour obtenir des messages par date d'envoi
const getMessageByDateEnvoi = (req, res) => {
    const { date_envoi } = req.params;

    Message.getMessageByDateEnvoi(date_envoi, (err, messages) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de la récupération des messages', details: err });
        }
        res.status(200).json(messages);
    });
};

// Fonction pour obtenir tous les messages lus
const getMessageLu = (req, res) => {
    Message.getMessageLu((err, messages) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de la récupération des messages lus', details: err });
        }
        res.status(200).json(messages);
    });
};

// Fonction pour marquer un message comme lu
const markMessageAsLu = (req, res) => {
    const { id } = req.params;

    Message.markMessageAsLu(id, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de la mise à jour du message', details: err });
        }
        res.status(200).json({ message: 'Message marqué comme lu' });
    });
};

// Fonction pour mettre à jour le texte d'un message
const updateMessage = (req, res) => {
    const { id } = req.params;
    const { message_text } = req.body;

    Message.updateMessage(id, message_text, (err, changes) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de la mise à jour du message', details: err });
        }
        if (changes === 0) {
            return res.status(404).json({ error: 'Message non trouvé ou non modifié' });
        }
        res.status(200).json({ message: 'Message mis à jour avec succès' });
    });
};

// Fonction pour supprimer un message
const deleteMessage = (req, res) => {
    const { id } = req.params;

    Message.deleteMessage(id, (err, changes) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de la suppression du message', details: err });
        }
        if (changes === 0) {
            return res.status(404).json({ error: 'Message non trouvé' });
        }
        res.status(200).json({ message: 'Message supprimé avec succès' });
    });
};

module.exports = {
    addMessage,
    getMessagesByEntreprise,
    getMessageById,
    getMessageByUtilisateur,
    getMessageByDateEnvoi,
    getMessageLu,
    markMessageAsLu,
    updateMessage,
    deleteMessage
};

