-- Supprimer un utilisateur par son ID
DELETE FROM utilisateur
WHERE id = 'id_utilisateur'; -- Remplacez 1 par l'ID de l'utilisateur à supprimer

-- supprimer un utilisateur par son nom
DELETE FROM utilisateur
WHERE nom = 'Nom_utilisateur'; -- Remplacez par le nom de l'utilisateur

-- Supprimer un utilisateur par son prénom
DELETE FROM utilisateur
WHERE prenom = 'Prenom_utilisateur'; -- Remplacez par le prénom de l'utilisateur

-- Supprimer un utilisateur par son email
DELETE FROM utilisateur
WHERE email = 'email@example.com'; -- Remplacez par l'email de l'utilisateur

-- Supprimer tous les utilisateurs ayant un rôle spécifique (ex. : étudiant)
DELETE FROM utilisateur
WHERE role = 'étudiant';

-- Supprimer tous les utilisateurs ayant un rôle spécifique (ex. : admin)
DELETE FROM utilisateur
WHERE role = 'admin'; -- Remplacer par le nom de l'admin

-- Supprimer un utilisateur par son adresse
DELETE FROM utilisateur
WHERE adresse = 'adresse_utilisateur'; -- Remplacez par l'adresse de l'utilisateur

-- Supprimer un utilisateur par son email
DELETE FROM utilisateur
WHERE email = 'email@example.com'; -- Remplacez par l'email de l'utilisateur

-- Supprimer tous les utilisateurs ayant un rôle spécifique (ex. : clients)
DELETE FROM utilisateur
WHERE role = 'client';

-- Supprimer tous les utilisateurs d'une ville spécifique
DELETE FROM utilisateur
WHERE ville = 'ville_souhaitee'; -- Remplacez par le nom de la ville

-- Supprimer tous les utilisateurs sans adresse
DELETE FROM utilisateur
WHERE adresse IS NULL OR adresse = '';

-- Supprimer tous les utilisateurs sans numéro de téléphone
DELETE FROM utilisateur
WHERE telephone IS NULL OR telephone = '';