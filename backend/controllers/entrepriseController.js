const Entreprise = require('../models/entreprise');

exports.getEntreprises = async (req, res) => {
    const entreprises = await Entreprise.findAll();
    res.json(entreprises); 
};

exports.getEntrepriseById = async (req, res) => {
    const entreprise = await Entreprise.findByPk(req.params.id);
    if (entreprise) {
        res.json(entreprise);
    } else {
        res.status(404).json({ message: 'Entreprise not found' });
    }   
};

exports.createEntreprise = async (req, res) => {
    const entreprise = await Entreprise.create(req.body);
    res.status(201).json(entreprise);
};

exports.updateEntreprise = async (req, res) => {
    const entreprise = await Entreprise.findByPk(req.params.id);
    if (entreprise) {
        await entreprise.update(req.body);
        res.json(entreprise);
    } else {
        res.status(404).json({ message: 'Entreprise not found' });
    }
};

exports.deleteEntreprise = async (req, res) => {
    const entreprise = await Entreprise.findByPk(req.params.id);
    if (entreprise) {
        await entreprise.destroy();
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Entreprise not found' });
    }
};