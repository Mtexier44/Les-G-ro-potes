const Service = require('../models/service');

exports.getAllServices = async (req, res) => {
    const services = await Service.findAll();
    res.json(services);
};

exports.getServiceById = async (req, res) => {
    const service = await Service.findByPk(req.params.id);
    if (service) {
        res.json(service);
    } else {
        res.status(404).json({ message: 'Service not found' });
    }
};

exports.createService = async (req, res) => {
    const service = await Service.create(req.body);
    res.status(201).json(service);
};

exports.updateService = async (req, res) => {
    const service = await Service.findByPk(req.params.id);
    if (service) {
        await service.update(req.body);
        res.json(service);
    } else {
        res.status(404).json({ message: 'Service not found' });
    }
};

exports.deleteService = async (req, res) => {
    const service = await Service.findByPk(req.params.id);
    if (service) {
        await service.destroy();
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Service not found' });
    }
};