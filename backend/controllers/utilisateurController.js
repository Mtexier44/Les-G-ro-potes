const utilisateurModel = require('../models/Utilisateur');

// Fonction pour ajouter un utilisateur
const addUtilisateur = (req, res) => {
    const utilisateur = req.body; // Récupère les données de l'utilisateur envoyées dans le corps de la requête

    utilisateurModel.addUtilisateur(utilisateur, (err, id) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de l\'ajout de l\'utilisateur', error: err });
        }
        return res.status(201).json({ message: 'Utilisateur ajouté avec succès', id });
    });
};

// Fonction pour obtenir tous les utilisateurs
const getAllUtilisateurs = (req, res) => {
    utilisateurModel.getAllUtilisateurs((err, utilisateurs) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs', error: err });
        }
        return res.status(200).json(utilisateurs);
    });
};

// Fonction pour obtenir un utilisateur par son ID
const getUtilisateurById = (req, res) => {
    const { id } = req.params; // Récupère l'ID de l'utilisateur à partir des paramètres de la requête

    utilisateurModel.getUtilisateurById(id, (err, utilisateur) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la récupération de l\'utilisateur', error: err });
        }
        if (!utilisateur) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }
        return res.status(200).json(utilisateur);
    });
};

// Fonction pour obtenir un utilisateur par son nom
const getUtilisateurByName = (req, res) => {
    const { nom } = req.params;

    utilisateurModel.getUtilisateurByName(nom, (err, utilisateurs) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs par nom', error: err });
        }
        return res.status(200).json(utilisateurs);
    });
};

// Fonction pour obtenir un utilisateur par son prénom
const getUtilisateurByPrenom = (req, res) => {
    const { prenom } = req.params;

    utilisateurModel.getUtilisateurByPrenom(prenom, (err, utilisateurs) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs par prénom', error: err });
        }
        return res.status(200).json(utilisateurs);
    });
};

// Fonction pour obtenir un utilisateur par son email
const getUtilisateurByEmail = (req, res) => {
    const { email } = req.params;

    utilisateurModel.getUtilisateurByEmail(email, (err, utilisateur) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la récupération de l\'utilisateur par email', error: err });
        }
        if (!utilisateur) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }
        return res.status(200).json(utilisateur);
    });
};

// Fonction pour obtenir un utilisateur par son role
const getUtilisateurByRole = (req, res) => {
    const { role } = req.params;

    utilisateurModel.getUtilisateurByRole(role, (err, utilisateurs) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs par role', error: err });
        }
        return res.status(200).json(utilisateurs);
    });
};

// Fonction pour obtenir un utilisateur par son téléphone
const getUtilisateurByTelephone = (req, res) => {
    const { telephone } = req.params;

    utilisateurModel.getUtilisateurByTelephone(telephone, (err, utilisateur) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la récupération de l\'utilisateur par téléphone', error: err });
        }
        if (!utilisateur) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }
        return res.status(200).json(utilisateur);
    });
};

// Fonction pour obtenir un utilisateur par son adresse
const getUtilisateurByAdresse = (req, res) => {
    const { adresse } = req.params;

    utilisateurModel.getUtilisateurByAdresse(adresse, (err, utilisateur) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la récupération de l\'utilisateur par adresse', error: err });
        }
        if (!utilisateur) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }
        return res.status(200).json(utilisateur);
    });
};

// Fonction pour obtenir un utilisateur par sa ville
const getUtilisateurByVille = (req, res) => {
    const { ville } = req.params;

    utilisateurModel.getUtilisateurByVille(ville, (err, utilisateur) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la récupération de l\'utilisateur par ville', error: err });
        }
        if (!utilisateur) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }
        return res.status(200).json(utilisateur);
    });
};

// Fonction pour mettre à jour un utilisateur
const updateUtilisateur = (req, res) => {
    const { id } = req.params; // Récupère l'ID de l'utilisateur à mettre à jour
    const utilisateur = req.body; // Récupère les données mises à jour de l'utilisateur dans le corps de la requête

    // S'assurer que tous les champs sont présents, sinon les initialiser à null
    const { nom, prenom, email, mot_de_passe, role, telephone, adresse, ville } = utilisateur;

    utilisateurModel.updateUtilisateur(id, { nom, prenom, email, mot_de_passe, role, telephone, adresse, ville }, (err, success) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'utilisateur', error: err });
        }
        if (!success) {
            return res.status(404).json({ message: 'Utilisateur non trouvé ou mise à jour échouée' });
        }
        return res.status(200).json({ message: 'Utilisateur mis à jour avec succès' });
    });
};

// Fonction pour supprimer un utilisateur
const deleteUtilisateur = (req, res) => {
    const { id } = req.params; // Récupère l'ID de l'utilisateur à supprimer

    utilisateurModel.deleteUtilisateur(id, (err, success) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la suppression de l\'utilisateur', error: err });
        }
        if (!success) {
            return res.status(404).json({ message: 'Utilisateur non trouvé ou suppression échouée' });
        }
        return res.status(200).json({ message: 'Utilisateur supprimé avec succès' });
    });
};

module.exports = {
    addUtilisateur,
    getAllUtilisateurs,
    getUtilisateurById,
    getUtilisateurByName,
    getUtilisateurByPrenom,
    getUtilisateurByEmail,
    getUtilisateurByRole,
    getUtilisateurByTelephone,
    getUtilisateurByAdresse,
    getUtilisateurByVille,
    updateUtilisateur,
    deleteUtilisateur
};
