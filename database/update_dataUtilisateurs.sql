-- Mettre à jour le prénom d'un utilisateur par son ID
UPDATE utilisateur
SET prenom = 'nouveau_prenom'
WHERE prenom;

-- Mettre à jour le nom d'un utilisateur par son ID
UPDATE utilisateur
SET nom = 'nouveau_nom'
WHERE nom;

-- Mettre à jour l'email d'un utilisateur par son ID
UPDATE utilisateur
SET email = 'nouvel_email@example.com'
WHERE email;

-- Mettre à jour le mot de passe d'un utilisateur par son ID
UPDATE utilisateur
SET mot_de_passe = 'nouveau_mot_de_passe'
WHERE mot_de_passe;

-- Mettre à jour le rôle d'un utilisateur par son ID
UPDATE utilisateur
SET role = 'nouveau_role' -- Exemple : 'admin', 'client', ou 'etudiant'
WHERE role;

-- Mettre à jour le téléphone d'un utilisateur par son ID
UPDATE utilisateur
SET telephone = 'nouveau_telephone'
WHERE telephone;

-- Mettre à jour l'adresse d'un utilisateur par son ID
UPDATE utilisateur
SET adresse = 'nouvelle_adresse'
WHERE adresse;

-- Mettre à jour la ville d'un utilisateur par son ID
UPDATE utilisateur
SET ville = 'nouvelle_ville'
WHERE ville;

-- Mettre à jour plusieurs champs d'un utilisateur par son ID
UPDATE utilisateur
SET nom = 'nouveau_nom',
    prenom = 'nouveau_prenom',
    email = 'nouvel_email@example.com',
    mot_de_passe = 'nouveau_mot_de_passe',
    role = 'nouveau_role',
    telephone = 'nouveau_telephone',
    adresse = 'nouvelle_adresse',
    ville = 'nouvelle_ville'
WHERE id = 'id_utilisateur';

-- Ajouter un utilisateur dans la table utilisateur de ma base de données create_tables.db
-- Assurez-vous que l'email n'existe pas déjà dans la table
INSERT OR IGNORE INTO utilisateur (prenom, nom, email, mot_de_passe, role, telephone, adresse, ville)
VALUES ('prenom', 'nom', 'email@example.com', 'password', 'role', 'telephone', 'adresse', 'ville'); 
-- Si vous voulez forcer l'insertion même en cas de conflit, utilisez INSERT OR REPLACE
