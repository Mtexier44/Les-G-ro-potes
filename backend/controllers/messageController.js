const Message = require('../models/message');

exports.getMessages = async (req, res) => {
    const messages = await Message.findAll();
    res.json(messages);
};

exports.getMessageById = async (req, res) => {
    const message = await Message.findByPk(req.params.id);
    if (message) {
        res.json(message);
    } else {
        res.status(404).json({ message: 'Message not found' });
    }
};

exports.createMessage = async (req, res) => {
    const message = await Message.create(req.body);
    res.status(201).json(message);
};

exports.updateMessage = async (req, res) => {
    const message = await Message.findByPk(req.params.id);
    if (message) {
        await message.update(req.body);
        res.json(message);
    } else {
        res.status(404).json({ message: 'Message not found' });
    }
};

exports.deleteMessage = async (req, res) => {
    const message = await Message.findByPk(req.params.id);
    if (message) {
        await message.destroy();
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Message not found' });
    }
};
