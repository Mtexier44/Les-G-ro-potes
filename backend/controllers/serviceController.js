const serviceModel = require('../models/Service');

// Fonction pour ajouter un service
const addService = (req, res) => {
    const service = req.body; // Récupère les données du service envoyées dans le corps de la requête

    serviceModel.addService(service, (err, id) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de l\'ajout du service', error: err });
        }
        return res.status(201).json({ message: 'Service ajouté avec succès', id });
    });
};

// Fonction pour obtenir tous les services d'une entreprise
const getServicesByEntreprise = (req, res) => {
    const { entreprise_id } = req.params; // Récupère l'ID de l'entreprise à partir des paramètres de la requête

    serviceModel.getServicesByEntreprise(entreprise_id, (err, services) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la récupération des services', error: err });
        }
        return res.status(200).json(services);
    });
};

// Fonction pour obtenir un service par son ID
const getServiceById = (req, res) => {
    const { service_id } = req.params; // Récupère l'ID du service à partir des paramètres de la requête

    serviceModel.getServiceById(service_id, (err, service) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la récupération du service', error: err });
        }
        if (!service) {
            return res.status(404).json({ message: 'Service non trouvé' });
        }
        return res.status(200).json(service);
    });
};

// Fonction pour obtenir un service par l'ID de l'entreprise
const getServiceByEntrepriseId = (req, res) => {
    const { entreprise_id } = req.params;

    serviceModel.getServiceByEntrepriseId(entreprise_id, (err, services) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la récupération des services de l\'entreprise', error: err });
        }
        return res.status(200).json(services);
    });
};

// Fonction pour obtenir un service par son type
const getServiceByTypeService = (req, res) => {
    const { type_service } = req.params;

    serviceModel.getServiceByTypeService(type_service, (err, services) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la récupération des services par type', error: err });
        }
        return res.status(200).json(services);
    });
};

// Fonction pour obtenir un service par sa description
const getServiceByDescription = (req, res) => {
    const { description } = req.params;

    serviceModel.getServiceByDescription(description, (err, services) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la récupération des services par description', error: err });
        }
        return res.status(200).json(services);
    });
};

// Fonction pour obtenir un service par son prix
const getServiceByPrix = (req, res) => {
    const { prix } = req.params;

    serviceModel.getServiceByPrix(prix, (err, services) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la récupération des services par prix', error: err });
        }
        return res.status(200).json(services);
    });
};

// Fonction pour obtenir un service par sa localisation
const getServiceByLocalisation = (req, res) => {
    const { localisation } = req.params;

    serviceModel.getServiceByLocalisation(localisation, (err, services) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la récupération des services par localisation', error: err });
        }
        return res.status(200).json(services);
    });
};

// Fonction pour mettre à jour un service
const updateService = (req, res) => {
    const { service_id } = req.params; // Récupère l'ID du service à mettre à jour
    const serviceModel = req.body; // Récupère les données mises à jour du service dans le corps de la requête

    serviceModel.updateService(service_id, { entreprise_id, type_service, description, prix, localisation }, (err, changes) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la mise à jour du service', error: err });
        }
        if (changes === 0) {
            return res.status(404).json({ message: 'Service non trouvé ou mise à jour échouée' });
        }
        return res.status(200).json({ message: 'Service mis à jour avec succès' });
    });
};

// Fonction pour supprimer un service
const deleteService = (req, res) => {
    const { service_id } = req.params; // Récupère l'ID du service à supprimer

    serviceModel.deleteService(service_id, (err, changes) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la suppression du service', error: err });
        }
        if (changes === 0) {
            return res.status(404).json({ message: 'Service non trouvé ou suppression échouée' });
        }
        return res.status(200).json({ message: 'Service supprimé avec succès' });
    });
};

module.exports = {
    addService,
    getServicesByEntreprise,
    getServiceById,
    getServiceByEntrepriseId,
    getServiceByTypeService,
    getServiceByDescription,
    getServiceByPrix,
    getServiceByLocalisation,
    updateService,
    deleteService
};
