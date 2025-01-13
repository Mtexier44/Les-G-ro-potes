const Utilisateur = require('../models/utilisateur')

// Récupérer tous les utilisateurs
exports.getAllUtilisateurs = async (req, res) => {
    const utilisateurs = await Utilisateur.findAll();
    res.json(utilisateurs);
};

// Récupérer un utilisateur par son ID
exports.getUtilisateurById = async (req, res) => {
    const utilisateur = await Utilisateur.findByPk(req.params.id);
    if (utilisateur) {
        res.json(utilisateur);
    } else {
        res.status(404).json({ message: 'Utilisateur not found' });
    }
};


// Créer un nouveau utilisateur
exports.createUtilisateur = async (req, res) => {
    const utilisateur = await Utilisateur.create(req.body);
    res.status(201).json(utilisateur);
};

// Modifier un utilisateur
exports.updateUtilisateur = async (req, res) => {
    const utilisateur = await Utilisateur.findByPk(req.params.id);
    if (utilisateur) {
        await utilisateur.update(req.body);
        res.json(utilisateur);
    } else {
        res.status(404).json({ message: 'Utilisateur not found' });
    }
};


// Supprimer un utilisateur
exports.deleteUtilisateur = async (req, res) => {
    const utilisateur = await Utilisateur.findByPk(req.params.id);
    if (utilisateur) {
        await utilisateur.destroy();
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Utilisateur not found' });
    }
};