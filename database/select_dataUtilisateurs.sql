-- Sélectionner tous les utilisateurs
SELECT * FROM utilisateur;

-- Sélectionner tous les utilisateurs avec leurs informations spécifiques
SELECT id, nom, prenom, email, mot_de_passe, role, telephone, adresse, ville
FROM utilisateur;

-- Sélectionner un utilisateur par son ID
SELECT * FROM utilisateur WHERE id = 'id_utisateur'; -- Remplacez 1 par l'ID souhaité

-- Sélectionner un utilisateur par son prénom
SELECT * FROM utilisateur WHERE prenom = 'prenom_utilisateur';

-- Sélectionner un utilisateur par son nom
SELECT * FROM utilisateur WHERE nom = 'nom_utilisateur';

-- Sélectionner un utilisateur par son email
SELECT * FROM utilisateur WHERE email = 'email_utilisateur';

-- Sélectionner tous les utilisateurs qui sont des clients
SELECT * FROM utilisateur WHERE role = 'client';

-- Sélectionner tous les clients dans une ville donnée
SELECT * FROM utilisateur WHERE role = 'client' AND ville = 'nom_de_la_ville';

-- Sélectionner tous les administrateurs
SELECT * FROM utilisateur WHERE role = 'admin';

-- Sélectionner tous les administrateurs dans une ville donnée
SELECT * FROM utilisateur WHERE role = 'admin' AND ville = 'nom_de_la_ville';

-- Sélectionner tous les étudiants
SELECT * FROM utilisateur WHERE role = 'etudiant';

-- Sélectionner un étudiant par sa ville
SELECT * FROM utilisateur WHERE role = 'etudiant' AND ville = 'nom_de_la_ville';

-- Sélectionner tous les étudiants dans une ville donnée
SELECT * FROM utilisateur WHERE role = 'etudiant' AND ville = 'nom_de_la_ville';

-- Sélectionner un utilisateur par son numéro de téléphone
SELECT * FROM utilisateur WHERE telephone = 'numero_de_telephone';

-- Sélectionner tous les utilisateurs ayant une adresse
SELECT * FROM utilisateur WHERE adresse IS NOT NULL AND adresse != '';

-- Sélectionner tous les clients ayant une adresse
SELECT * FROM utilisateur WHERE role = 'client' AND adresse IS NOT NULL AND adresse != '';

-- Sélectionner tous les administrateurs ayant une adresse
SELECT * FROM utilisateur WHERE role = 'admin' AND adresse IS NOT NULL AND adresse != '';

-- Sélectionner tous les étudiants ayant une adresse
SELECT * FROM utilisateur WHERE role = 'etudiant' AND adresse IS NOT NULL AND adresse != '';

-- Sélectionner tous les utilisateurs dans une ville donnée
SELECT * FROM utilisateur WHERE ville = 'nom_de_la_ville';

-- Sélectionner un client dans une ville donnée
SELECT * FROM utilisateur WHERE ville = 'nom_de_la_ville' AND role = 'client';

-- Sélectionner tous les utilisateurs qui sont dans une ville donnée et ont une adresse
SELECT * FROM utilisateur WHERE ville = 'nom_de_la_ville' AND adresse IS NOT NULL AND adresse != '';