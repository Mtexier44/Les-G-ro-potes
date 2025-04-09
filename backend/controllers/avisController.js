const Avis = require('../models/Avis');
const moment = require('moment');

// Ajouter un avis
const addAvis = (req, res) => {
    const { utilisateur_id, entreprise_id, service_id, note, commentaire } = req.body;

    // Vérifier si l'utilisateur, l'entreprise et le service existent
    if (!utilisateur_id || !entreprise_id || !service_id || !note) {
        return res.status(400).json({ message: 'Tous les champs sont requis (utilisateur_id, entreprise_id, service_id, note)' });
    }

    // Vérifier la validité de la note
    if (note < 1 || note > 5) {
        return res.status(400).json({ message: 'La note doit être comprise entre 1 et 5' });
    }

    const date_avis = moment().format('YYYY-MM-DD HH:mm:ss'); // Format de la date et heure actuelles

    const avis = { utilisateur_id, entreprise_id, service_id, note, commentaire, date_avis };

    Avis.addAvis(avis, (err, avisId) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de l\'ajout de l\'avis', error: err });
        }
        return res.status(201).json({ message: 'Avis ajouté avec succès', avisId });
    });
};

// Obtenir tous les avis d'une entreprise
const getAvisByEntreprise = (req, res) => {
    const { entreprise_id } = req.params;

    // Vérifier si l'entreprise existe
    if (!entreprise_id) {
        return res.status(400).json({ message: 'L\'ID de l\'entreprise est requis' });
    }

    Avis.getAvisByEntreprise(entreprise_id, (err, avisList) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la récupération des avis', error: err });
        }
        return res.status(200).json({ avis: avisList });
    });
};

// Obtenir tous les avis d'un service
const getAvisByService = (req, res) => {
    const { service_id } = req.params;

    // Vérifier si le service existe
    if (!service_id) {
        return res.status(400).json({ message: 'L\'ID du service est requis' });
    }

    Avis.getAvisByService(service_id, (err, avisList) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la récupération des avis', error: err });
        }
        return res.status(200).json({ avis: avisList });
    });
};

// Obtenir un avis par son ID
const getAvisById = (req, res) => {
    const { avis_id } = req.params;

    // Vérifier si l'ID de l'avis est fourni
    if (!avis_id) {
        return res.status(400).json({ message: 'L\'ID de l\'avis est requis' });
    }

    Avis.getAvisById(avis_id, (err, avis) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la récupération de l\'avis', error: err });
        }
        if (!avis) {
            return res.status(404).json({ message: 'Avis non trouvé' });
        }
        return res.status(200).json({ avis });
    });
};

// Supprimer un avis
const deleteAvis = (req, res) => {
    const { avis_id } = req.params;

    // Vérifier si l'ID de l'avis est fourni
    if (!avis_id) {
        return res.status(400).json({ message: 'L\'ID de l\'avis est requis' });
    }

    Avis.deleteAvis(avis_id, (err, changes) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la suppression de l\'avis', error: err });
        }
        if (changes === 0) {
            return res.status(404).json({ message: 'Avis non trouvé' });
        }
        return res.status(200).json({ message: 'Avis supprimé avec succès' });
    });
};

// Mettre à jour un avis
const updateAvis = (req, res) => {
    const { avis_id } = req.params;
    const { note, commentaire } = req.body;

    // Vérifier si la note ou le commentaire sont fournis
    if (!note && !commentaire) {
        return res.status(400).json({ message: 'La note ou le commentaire doit être fourni' });
    }

    // Vérifier la validité de la note
    if (note && (note < 1 || note > 5)) {
        return res.status(400).json({ message: 'La note doit être comprise entre 1 et 5' });
    }

    Avis.updateAvis(avis_id, note, commentaire, (err, changes) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'avis', error: err });
        }
        if (changes === 0) {
            return res.status(404).json({ message: 'Avis non trouvé' });
        }
        return res.status(200).json({ message: 'Avis mis à jour avec succès' });
    });
};

module.exports = { addAvis, getAvisByEntreprise, getAvisByService, getAvisById, deleteAvis, updateAvis };
