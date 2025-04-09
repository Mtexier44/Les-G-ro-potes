const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/db'); // Connexion à la base de données
const { body, validationResult } = require('express-validator'); 

// Fonction pour l'inscription d'un utilisateur
const registerUser = [
    // Validation des champs
    body('email').isEmail().withMessage('Email invalide'),
    body('mot_de_passe').isLength({ min: 6 }).withMessage('Le mot de passe doit contenir au moins 6 caractères'),
    body('nom').notEmpty().withMessage('Le nom est requis'),
    body('prenom').notEmpty().withMessage('Le prénom est requis'),
    body('role').notEmpty().withMessage('Le rôle est requis'),
    body('telephone').isMobilePhone().withMessage('Le numéro de téléphone est invalide'),
    body('adresse').notEmpty().withMessage('L\'adresse est requise'),
    body('ville').notEmpty().withMessage('La ville est requise'),

    // Fonction pour traiter l'inscription
    (req, res) => {
        const { nom, prenom, email, mot_de_passe, role, telephone, adresse, ville } = req.body;

        // Vérification des erreurs de validation
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Vérification si l'utilisateur existe déjà dans la base de données
        const checkEmailQuery = 'SELECT * FROM utilisateur WHERE email = ?';
        db.get(checkEmailQuery, [email], (err, row) => {
            if (err) {
                return res.status(500).json({ message: 'Erreur serveur.' });
            }
            if (row) {
                return res.status(400).json({ message: 'Cet email est déjà utilisé.' });
            }

            // Hachage du mot de passe
            bcrypt.hash(mot_de_passe, 10, (err, hashedPassword) => {
                if (err) {
                    return res.status(500).json({ message: 'Erreur lors du hachage du mot de passe.' });
                }

                // Insertion de l'utilisateur dans la base de données
                const insertUserQuery = `
                    INSERT INTO utilisateur (nom, prenom, email, mot_de_passe, role, telephone, adresse, ville)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
                `;
                db.run(insertUserQuery, [nom, prenom, email, hashedPassword, role, telephone, adresse, ville], function(err) {
                    if (err) {
                        return res.status(500).json({ message: 'Erreur serveur lors de l\'enregistrement.' });
                    }
                    return res.status(201).json({ message: 'Utilisateur enregistré avec succès.' });
                });
            });
        });
    }
];

// Fonction pour la connexion d'un utilisateur (génération d'un token JWT)
const loginUser = [
    // Validation des champs
    body('email').isEmail().withMessage('Email invalide'),
    body('mot_de_passe').isLength({ min: 6 }).withMessage('Le mot de passe est requis'),

    // Fonction pour traiter la connexion
    (req, res) => {
        const { email, mot_de_passe } = req.body;

        // Vérification des erreurs de validation
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Vérification si l'utilisateur existe dans la base de données
        const getUserQuery = 'SELECT * FROM utilisateur WHERE email = ?';
        db.get(getUserQuery, [email], (err, user) => {
            if (err) {
                return res.status(500).json({ message: 'Erreur serveur.' });
            }
            if (!user) {
                return res.status(400).json({ message: 'Email ou mot de passe incorrect.' });
            }

            // Vérification du mot de passe
            bcrypt.compare(mot_de_passe, user.mot_de_passe, (err, isMatch) => {
                if (err) {
                    return res.status(500).json({ message: 'Erreur lors de la comparaison du mot de passe.' });
                }
                if (!isMatch) {
                    return res.status(400).json({ message: 'Email ou mot de passe incorrect.' });
                }

                // Génération du token JWT
                const payload = { id: user.id, nom: user.nom, role: user.role };
                const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

                // Retourner le token
                return res.status(200).json({ message: 'Connexion réussie.', token });
            });
        });
    }
];

// Fonction pour obtenir les informations de l'utilisateur (nécessite un token JWT valide)
const getUserInfo = (req, res) => {
    const userId = req.user.id;  // Le userId est ajouté dans la requête grâce au middleware d'authentification

    const getUserQuery = 'SELECT id, nom, prenom, email, role, telephone, adresse, ville FROM utilisateur WHERE id = ?';
    db.get(getUserQuery, [userId], (err, user) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur serveur.' });
        }
        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé.' });
        }
        return res.status(200).json({ user });
    });
};

module.exports = { registerUser, loginUser, getUserInfo };
