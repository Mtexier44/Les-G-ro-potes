const LogActivity = require('../models/logActivity');

exports.getLogs = async (req, res) => {
    const logs = await LogActivity.findAll();
    res.json(logs);
};

exports.getLogById = async (req, res) => {
    const log = await LogActivity.findByPk(req.params.id);
    if (log) {
        res.json(log);
    } else {
        res.status(404).json({ message: 'Log not found' });
    }
};

exports.createLog = async (req, res) => {
    const log = await LogActivity.create(req.body);
    res.status(201).json(log);
};

exports.updateLog = async (req, res) => {
    const log = await LogActivity.findByPk(req.params.id);
    if (log) {
        await log.update(req.body);
        res.json(log);
    } else {
        res.status(404).json({ message: 'Log not found' });
    }
};

exports.deleteLog = async (req, res) => {
    const log = await LogActivity.findByPk(req.params.id);
    if (log) {
        await log.destroy();
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Log not found' });
    }
};

exports.getLogsForDate = async (req, res) => {
    const logs = await LogActivity.findAll({ where: { createdAt: { [Op.gte]: req.params.date } } });
    res.json(logs);
};