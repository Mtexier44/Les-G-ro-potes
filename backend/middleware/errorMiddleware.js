function errorMiddleware(err, req, res, next) {
    console.error(err.stack);
    res.status(err.status || 500).json({message: err.message || 'Une erreur est survenue sur le serveur.'});
}


module.exports = errorMiddleware;