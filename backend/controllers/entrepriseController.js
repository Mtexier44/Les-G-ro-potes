const Entreprise = require('../models/Entreprise');

// Fonction pour ajouter une entreprise
const addEntreprise = (req, res) => {
    const { nom, type_entreprise, email, telephone, adresse, villes_desservies, nombre_patients, description_services, logo, photos, videos } = req.body;

    // Validation basique des champs obligatoires
    if (!nom || !type_entreprise || !email || !telephone || !adresse || !villes_desservies) {
        return res.status(400).json({ message: 'Veuillez remplir tous les champs obligatoires.' });
    }

    const entreprise = { nom, type_entreprise, email, telephone, adresse, villes_desservies, nombre_patients, description_services, logo, photos, videos };

    Entreprise.addEntreprise(entreprise, (err, lastID) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de l\'ajout de l\'entreprise.', error: err.message });
        }
        return res.status(201).json({ message: 'Entreprise ajoutée avec succès.', id: lastID });
    });
};

// Fonction pour obtenir toutes les entreprises
const getAllEntreprises = (req, res) => {
    Entreprise.getAllEntreprises((err, entreprises) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la récupération des entreprises.', error: err.message });
        }
        return res.status(200).json(entreprises);
    });
};

// Fonction pour obtenir une entreprise par son ID
const getEntrepriseById = (req, res) => {
    const id = req.params.id;

    Entreprise.getEntrepriseById(id, (err, entreprise) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la récupération de l\'entreprise.', error: err.message });
        }
        if (!entreprise) {
            return res.status(404).json({ message: 'Entreprise non trouvée.' });
        }
        return res.status(200).json(entreprise);
    });
};

// Fonction pour obtenir une entreprise par son nom
const getEntrepriseByName = (req, res) => {
    const nom = req.params.nom;

    Entreprise.getEntrepriseByName(nom, (err, entreprise) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la recherche de l\'entreprise par nom.', error: err.message });
        }
        if (!entreprise) {
            return res.status(404).json({ message: 'Entreprise non trouvée.' });
        }
        return res.status(200).json(entreprise);
    });
};

// Fonction pour obtenir une entreprise par son email
const getEntrepriseByEmail = (req, res) => {
    const email = req.params.email;

    Entreprise.getEntrepriseByEmail(email, (err, entreprise) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la recherche de l\'entreprise par email.', error: err.message });
        }
        if (!entreprise) {
            return res.status(404).json({ message: 'Entreprise non trouvée.' });
        }
        return res.status(200).json(entreprise);
    });
};

// Fonction pour obtenir une entreprise par son téléphone
const getEntrepriseByTelephone = (req, res) => {
    const telephone = req.params.telephone;

    Entreprise.getEntrepriseByTelephone(telephone, (err, entreprise) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la recherche de l\'entreprise par téléphone.', error: err.message });
        }
        if (!entreprise) {
            return res.status(404).json({ message: 'Entreprise non trouvée.' });
        }
        return res.status(200).json(entreprise);
    });
};

// Fonction pour obtenir une entreprise par son adresse
const getEntrepriseByAdresse = (req, res) => {
    const adresse = req.params.adresse;

    Entreprise.getEntrepriseByAdresse(adresse, (err, entreprise) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la recherche de l\'entreprise par adresse.', error: err.message });
        }
        if (!entreprise) {
            return res.status(404).json({ message: 'Entreprise non trouvée.' });
        }
        return res.status(200).json(entreprise);
    });
};

// Fonction pour obtenir une entreprise par ses villes desservies
const getEntrepriseByVillesDesservies = (req, res) => {
    const villes_desservies = req.params.villes_desservies;

    Entreprise.getEntrepriseByVillesDesservies(villes_desservies, (err, entreprises) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la recherche de l\'entreprise par villes desservies.', error: err.message });
        }
        if (!entreprises || entreprises.length === 0) {
            return res.status(404).json({ message: 'Aucune entreprise trouvée.' });
        }
        return res.status(200).json(entreprises);
    });
};

// Fonction pour obtenir une entreprise par son nombre de patients
const getEntrepriseByNombrePatients = (req, res) => {
    const nombre_patients = parseInt(req.params.nombre_patients);

    Entreprise.getEntrepriseByNombrePatients(nombre_patients, (err, entreprises) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la recherche de l\'entreprise par nombre de patients.', error: err.message });
        }
        if (!entreprises || entreprises.length === 0) {
            return res.status(404).json({ message: 'Aucune entreprise trouvée.' });
        }
        return res.status(200).json(entreprises);
    });
};

// Fonction pour obtenir une entreprise par sa description de services
const getEntrepriseByDescriptionServices = (req, res) => {
    const description_services = req.params.description_services;

    Entreprise.getEntrepriseByDescriptionServices(description_services, (err, entreprises) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la recherche de l\'entreprise par description de services.', error: err.message });
        }
        if (!entreprises || entreprises.length === 0) {
            return res.status(404).json({ message: 'Aucune entreprise trouvée.' });
        }
        return res.status(200).json(entreprises);
    });
};

// Fonction pour obtenir une entreprise par son logo
const getEntrepriseByLogo = (req, res) => {
    const logo = req.params.logo;

    Entreprise.getEntrepriseByLogo(logo, (err, entreprise) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la recherche de l\'entreprise par logo.', error: err.message });
        }
        if (!entreprise) {
            return res.status(404).json({ message: 'Entreprise non trouvée.' });
        }
        return res.status(200).json(entreprise);
    });
};

// Fonction pour obtenir une entreprise par ses photos
const getEntrepriseByPhotos = (req, res) => {
    const photos = req.params.photos;

    Entreprise.getEntrepriseByPhotos(photos, (err, entreprises) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la recherche de l\'entreprise par photos.', error: err.message });
        }
        if (!entreprises || entreprises.length === 0) {
            return res.status(404).json({ message: 'Aucune entreprise trouvée.' });
        }
        return res.status(200).json(entreprises);
    });
};

// Fonction pour obtenir une entreprise par ses videos
const getEntrepriseByVideos = (req, res) => {
    const videos = req.params.videos;

    Entreprise.getEntrepriseByVideos(videos, (err, entreprises) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la recherche de l\'entreprise par videos.', error: err.message });
        }
        if (!entreprises || entreprises.length === 0) {
            return res.status(404).json({ message: 'Aucune entreprise trouvée.' });
        }
        return res.status(200).json(entreprises);
    });
};





// Fonction pour mettre à jour une entreprise
const updateEntreprise = (req, res) => {
    const id = req.params.id;
    const { nom, type_entreprise, email, telephone, adresse, villes_desservies, nombre_patients, description_services, logo, photos, videos } = req.body;

    const entreprise = { nom, type_entreprise, email, telephone, adresse, villes_desservies, nombre_patients, description_services, logo, photos, videos };

    Entreprise.updateEntreprise(id, entreprise, (err, changes) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'entreprise.', error: err.message });
        }
        if (changes === 0) {
            return res.status(404).json({ message: 'Entreprise non trouvée pour mise à jour.' });
        }
        return res.status(200).json({ message: 'Entreprise mise à jour avec succès.' });
    });
};

// Fonction pour supprimer une entreprise
const deleteEntreprise = (req, res) => {
    const id = req.params.id;

    Entreprise.deleteEntreprise(id, (err, changes) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la suppression de l\'entreprise.', error: err.message });
        }
        if (changes === 0) {
            return res.status(404).json({ message: 'Entreprise non trouvée pour suppression.' });
        }
        return res.status(200).json({ message: 'Entreprise supprimée avec succès.' });
    });
};

module.exports = {
    addEntreprise,
    getAllEntreprises,
    getEntrepriseById,
    getEntrepriseByName,
    getEntrepriseByEmail,
    getEntrepriseByTelephone,
    getEntrepriseByAdresse,
    getEntrepriseByVillesDesservies,
    getEntrepriseByNombrePatients,
    getEntrepriseByDescriptionServices,
    getEntrepriseByLogo,
    getEntrepriseByPhotos,
    getEntrepriseByVideos,
    updateEntreprise,
    deleteEntreprise
};

