const { body, validationResult } = require('express-validator');

// Validation pour l'inscription d'un utilisateur
const registerUserValidator = [
  body('nom')
    .isString()
    .withMessage('Le nom doit être une chaîne de caractères')
    .notEmpty()
    .withMessage('Le nom est requis'),
  
  body('prenom')
    .isString()
    .withMessage('Le prénom doit être une chaîne de caractères')
    .notEmpty()
    .withMessage('Le prénom est requis'),

  body('email')
    .isEmail()
    .withMessage('L\'email doit être valide')
    .notEmpty()
    .withMessage('L\'email est requis'),

  body('mot_de_passe')
    .isLength({ min: 6 })
    .withMessage('Le mot de passe doit contenir au moins 6 caractères')
    .notEmpty()
    .withMessage('Le mot de passe est requis'),

  body('role')
    .isString()
    .withMessage('Le rôle doit être une chaîne de caractères')
    .notEmpty()
    .withMessage('Le rôle est requis'),

  body('telephone')
    .optional()
    .isString()
    .withMessage('Le téléphone doit être une chaîne de caractères'),

  body('adresse')
    .optional()
    .isString()
    .withMessage('L\'adresse doit être une chaîne de caractères'),

  body('ville')
    .optional()
    .isString()
    .withMessage('La ville doit être une chaîne de caractères')
];

// Validation pour la connexion de l'utilisateur
const loginUserValidator = [
  body('email')
    .isEmail()
    .withMessage('L\'email doit être valide')
    .notEmpty()
    .withMessage('L\'email est requis'),

  body('mot_de_passe')
    .notEmpty()
    .withMessage('Le mot de passe est requis')
];

// Fonction pour gérer les erreurs de validation
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { 
  registerUserValidator,
  loginUserValidator,
  handleValidationErrors 
};
