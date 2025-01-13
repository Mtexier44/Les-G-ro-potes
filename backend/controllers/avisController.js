const Avis = require('../models/avis');


exports.getAvis = async (req, res) => {
    const avis = await Avis.findAll();
    res.json(avis);
};

exports.getAvisById = async (req, res) => {
    const avis = await Avis.findByPk(req.params.id);
    if (avis) {
        res.json(avis);
    } else {
        res.status(404).json({ message: 'Avis not found' });
    }
};


exports.createAvis = async (req, res) => {
    const avis = await Avis.create(req.body);
    res.status(201).json(avis);
};

exports.updateAvis = async (req, res) => {
    const avis = await Avis.findByPk(req.params.id);
    if (avis) {
        await avis.update(req.body);
        res.json(avis);
    } else {
        res.status(404).json({ message: 'Avis not found' });
    }
};


exports.deleteAvis = async (req, res) => {
    const avis = await Avis.findByPk(req.params.id);
    if (avis) {
        await avis.destroy();
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Avis not found' });
    }
};