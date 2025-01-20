-- Sélectionner toutes les entreprises avec toutes leurs colonnes
SELECT * 
FROM entreprise;

-- Sélectionner une entreprise par son nom
SELECT * 
FROM entreprise
WHERE nom = 'nom_de_l_entreprise';

-- Sélectionner une entreprise par son type
SELECT * 
FROM entreprise
WHERE type_entreprise = 'type_entreprise_recherché';

-- Sélectionner une entreprise par son ID
SELECT * 
FROM entreprise
WHERE id = id;

-- Sélectionner une entreprise par son adresse
SELECT * 
FROM entreprise
WHERE adresse = 'adresse_recherchée';

-- Sélectionner une entreprise par son téléphone
SELECT * 
FROM entreprise
WHERE telephone = 'numéro_téléphone_recherché';

-- Sélectionner une entreprise par son email
SELECT * 
FROM entreprise
WHERE email = 'email_recherché';

-- Sélectionner les entreprises qui desservent une ville spécifique
SELECT * 
FROM entreprise
WHERE villes_desservies LIKE '%ville_recherchée%';

-- Sélectionner les entreprises par leur nombre de patients
SELECT * 
FROM entreprise
WHERE nombre_patients = '%ville_recherchée%';

-- Sélectionner les entreprises par la description de leurs services
SELECT * 
FROM entreprise
WHERE description_services LIKE '%mot_clé%';

-- Sélectionner une entreprise par son logo
SELECT * 
FROM entreprise
WHERE logo = 'nom_fichier_logo';

-- Sélectionner les entreprises contenant des photos spécifiques
SELECT * 
FROM entreprise
WHERE photos LIKE '%mot_clé_photo%';

-- Sélectionner les entreprises contenant des vidéos spécifiques
SELECT * 
FROM entreprise
WHERE videos LIKE '%mot_clé_vidéo%';